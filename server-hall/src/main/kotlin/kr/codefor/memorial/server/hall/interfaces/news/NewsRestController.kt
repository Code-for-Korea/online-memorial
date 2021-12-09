package kr.codefor.memorial.server.hall.interfaces.news

import kr.codefor.memorial.server.hall.domain.news.service.NewsLoader
import org.springframework.http.MediaType
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class NewsRestController(
    private val newsLoader: NewsLoader
) {

    @GetMapping(
        value = ["/api/v1/news"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getNewsLatest(): List<NewsMetaDataDto> {
        return newsLoader.loadLastedFive().map {
            it.toDto()
        }
    }
}
