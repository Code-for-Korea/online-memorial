package kr.codefor.memorial.server.hall.domain.news.service

import kr.codefor.memorial.server.hall.infrastructure.cache.CacheConfig
import org.jsoup.nodes.Document
import org.springframework.cache.annotation.CacheEvict
import org.springframework.cache.annotation.Cacheable
import org.springframework.scheduling.annotation.Async
import org.springframework.scheduling.annotation.Scheduled
import org.springframework.stereotype.Service
import java.net.URL


@Service
class NewsMetaDataParser(
    private val newsContentBodyFetcher: NewsContentBodyFetcher
) {

    @CacheEvict(value = [NEWS_METADATA_CACHE])
    @Scheduled(fixedRate = ONE_DAY)
    fun reportCacheEvict() {
    }

    @Async
    @Cacheable(value = [NEWS_METADATA_CACHE], cacheManager = CacheConfig.IN_MEMORY_CACHE_MANAGER)
    fun parseAsync(url: URL): NewsMetaData {
        return parse(url = url)
    }

    fun parse(url: URL): NewsMetaData {
        val doc: Document = newsContentBodyFetcher.fetch(url)

        val title = doc.select("meta[property=og:title]").first()?.attr("content") ?: doc.title()
        val description = doc.select("meta[property=og:description]").first()?.attr("content")
        val thumbnail = doc.select("meta[property=og:image]").first()?.attr("content")

        return NewsMetaData(url, title, description, thumbnail)
    }

    companion object {

        private const val NEWS_METADATA_CACHE = "newsMetaDataCache"
        private const val ONE_DAY = 24 * 60 * 60 * 1000L
    }
}
