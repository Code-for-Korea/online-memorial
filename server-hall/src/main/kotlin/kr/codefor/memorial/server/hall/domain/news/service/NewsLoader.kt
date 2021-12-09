package kr.codefor.memorial.server.hall.domain.news.service

import kotlinx.coroutines.runBlocking
import org.springframework.stereotype.Service
import java.net.URL

@Service
class NewsLoader(
    private val newsFetcher: NewsFetcher,
    private val newsMetaDataParser: NewsMetaDataParser
) {

    fun loadLastedFive(): List<NewsMetaData> {
        val fetchNews = newsFetcher.fetchLatest(fetchCount = FETCH_COUNT)

        return runBlocking {
            fetchNews.map {
                newsMetaDataParser.parse(URL(it.infoLink))
            }
        }
    }

    companion object {

        const val FETCH_COUNT = 5L
    }
}
