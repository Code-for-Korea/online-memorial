package kr.codefor.memorial.server.hall.domain.news.service

import org.jsoup.nodes.Document
import org.springframework.stereotype.Service
import java.net.URL


@Service
class NewsMetaDataParser(
    private val newsContentBodyFetcher: NewsContentBodyFetcher
) {

    fun parse(url: URL): NewsMetaData {
        val doc: Document = newsContentBodyFetcher.fetch(url)

        val title = doc.select("meta[property=og:title]").first()?.attr("content") ?: doc.title()
        val description = doc.select("meta[property=og:description]").first()?.attr("content")
        val thumbnail = doc.select("meta[property=og:image]").first()?.attr("content")

        return NewsMetaData(url, title, description, thumbnail)
    }
}
