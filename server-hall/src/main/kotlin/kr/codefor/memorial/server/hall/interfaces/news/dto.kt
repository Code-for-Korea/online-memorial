package kr.codefor.memorial.server.hall.interfaces.news

import kr.codefor.memorial.server.hall.domain.news.service.NewsMetaData

data class NewsMetaDataDto(
    val url: String,
    val title: String,
    val description: String?,
    val thumbnail: String?
)


internal fun NewsMetaData.toDto() = NewsMetaDataDto(
    url = url.toExternalForm(),
    title = title,
    description = description,
    thumbnail = thumbnail
)
