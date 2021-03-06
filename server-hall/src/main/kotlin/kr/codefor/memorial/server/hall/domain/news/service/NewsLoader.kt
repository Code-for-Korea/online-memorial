package kr.codefor.memorial.server.hall.domain.news.service

import org.springframework.stereotype.Service
import java.net.URL

@Service
class NewsLoader(
    private val newsFetcher: NewsFetcher,
    private val newsMetaDataParser: NewsMetaDataParser
) {

    fun loadRandomizeFive(): List<NewsMetaData> {
        val fetchNews = newsFetcher.fetchRandomize(fetchCount = FETCH_COUNT)

        return fetchNews.map {
            newsMetaDataParser.parseAsync(URL(it.infoLink))
        }
    }

    companion object {

        private const val FETCH_COUNT = 5L
    }
}
