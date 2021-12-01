package kr.codefor.memorial.server.hall.domain.incident.service

import com.querydsl.core.annotations.QueryProjection

data class IncidentCount @QueryProjection constructor(
    val killed: Long,
    val injured: Long
)
