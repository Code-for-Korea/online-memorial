package kr.codefor.memorial.server.hall.domain.news.repository

import com.querydsl.core.types.dsl.Expressions
import kr.codefor.memorial.server.hall.domain.news.entity.News
import kr.codefor.memorial.server.hall.domain.news.entity.QNews.news
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport


interface NewsRepository : JpaRepository<News, Long>, NewsRepositoryCustom {

}

interface NewsRepositoryCustom {

    fun fetchRandomize(fetchCount: Long): List<News>
}

class NewsRepositoryImpl : QuerydslRepositorySupport(News::class.java), NewsRepositoryCustom {

    override fun fetchRandomize(fetchCount: Long): List<News> {
        return from(
            news
        ).where(
            news.infoLink.isNotNull
                .and(news.infoLink.notLike("%.kosha.or.kr%"))
        ).orderBy(
            Expressions.numberTemplate(Long::class.java, "function('rand')").asc()
        ).limit(fetchCount)
            .fetch()
    }
}
