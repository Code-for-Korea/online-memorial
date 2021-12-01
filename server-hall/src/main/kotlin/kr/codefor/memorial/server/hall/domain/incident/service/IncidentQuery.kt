package kr.codefor.memorial.server.hall.domain.incident.service

import kr.codefor.memorial.server.hall.domain.incident.repository.IncidentRepository
import org.springframework.stereotype.Service

@Service
class IncidentQuery(
    private val incidentRepository: IncidentRepository
) {

    fun count(year: Int?): IncidentCount {
        return incidentRepository.countBy(year)
    }
}
