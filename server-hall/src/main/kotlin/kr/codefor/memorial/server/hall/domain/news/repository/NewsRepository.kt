package kr.codefor.memorial.server.hall.domain.news.repository

import kr.codefor.memorial.server.hall.domain.news.entity.News
import kr.codefor.memorial.server.hall.domain.news.entity.QNews.news
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport


interface NewsRepository : JpaRepository<News, Long>, NewsRepositoryCustom {

}

interface NewsRepositoryCustom {

    fun fetchLatest(fetchCount: Long): List<News>
}

class NewsRepositoryImpl : QuerydslRepositorySupport(News::class.java), NewsRepositoryCustom {

    override fun fetchLatest(fetchCount: Long): List<News> {
        return from(
            news
        ).orderBy(news.id.desc())
            .where(
                news.infoLink.isNotNull
                    .and(news.infoLink.notLike("%.kosha.or.kr%"))
            )
            .limit(fetchCount)
            .fetch()
    }
}
