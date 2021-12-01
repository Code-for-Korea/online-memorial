package kr.codefor.memorial.server.hall.interfaces.incident

import kr.codefor.memorial.server.hall.domain.incident.service.IncidentCount

data class IncidentCountDto(
    val killed: Long,
    val injured: Long
)

data class IncidentAggregateResultDto(
    val dayOfWeek: String,
    val count: IncidentCountDto
)

// ===== Extensions
internal fun IncidentCount.toDto() = IncidentCountDto(
    killed = killed,
    injured = injured
)
