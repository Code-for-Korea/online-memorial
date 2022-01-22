package kr.codefor.memorial.server.hall.domain.news.service

import kr.codefor.memorial.server.hall.domain.news.entity.News
import kr.codefor.memorial.server.hall.domain.news.repository.NewsRepository
import org.springframework.stereotype.Service

@Service
class NewsFetcher(
    private val newsRepository: NewsRepository
) {

    fun fetchRandomize(fetchCount: Long): List<News> {
        return newsRepository.fetchRandomize(fetchCount)
    }
}
