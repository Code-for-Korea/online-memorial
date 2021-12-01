package kr.codefor.memorial.server.hall.domain.incident.service

import kr.codefor.memorial.server.hall.domain.incident.repository.IncidentRepository
import org.springframework.stereotype.Service
import java.time.DayOfWeek

@Service
class IncidentAggregator(
    private val incidentRepository: IncidentRepository
) {

    fun aggregateByDay(): Map<DayOfWeek, IncidentCount> {
        return incidentRepository.findAll().groupBy {
            it.dateTime.dayOfWeek
        }.map {
            it.key to IncidentCount(
                killed = it.value.sumOf { incident -> incident.killed!! },
                injured = it.value.sumOf { incident -> incident.injured!! }
            )
        }.toMap()
    }
}
