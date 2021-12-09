package kr.codefor.memorial.server.hall.domain.news.service

import java.net.URL

data class NewsMetaData(
    val url: URL,
    val title: String,
    val description: String?,
    val thumbnail: String?
)
