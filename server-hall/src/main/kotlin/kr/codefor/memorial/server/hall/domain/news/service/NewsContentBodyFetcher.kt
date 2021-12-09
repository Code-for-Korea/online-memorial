package kr.codefor.memorial.server.hall.domain.news.service

import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import org.springframework.stereotype.Service
import java.net.URL

@Service
class NewsContentBodyFetcher {

    fun fetch(url: URL): Document {
        return Jsoup.connect(url.toExternalForm()).get()
    }
}

