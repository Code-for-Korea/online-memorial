package kr.codefor.memorial.server.hall.domain.incident.repository

import kr.codefor.memorial.server.hall.domain.incident.entity.Incident
import kr.codefor.memorial.server.hall.domain.incident.entity.QIncident.incident
import kr.codefor.memorial.server.hall.domain.incident.service.IncidentCount
import kr.codefor.memorial.server.hall.domain.incident.service.QIncidentCount
import kr.codefor.memorial.server.hall.util.eqFilterNull
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport


interface IncidentRepository : JpaRepository<Incident, Long>, IncidentRepositoryCustom {

}

interface IncidentRepositoryCustom {

    fun countBy(year: Int?): IncidentCount
}

class IncidentRepositoryImpl : QuerydslRepositorySupport(Incident::class.java), IncidentRepositoryCustom {

    override fun countBy(year: Int?): IncidentCount {
        return from(incident)
            .select(
                QIncidentCount(
                    incident.killed.sum(),
                    incident.injured.sum()
                )
            )
            .where(incident.dateTime.year().eqFilterNull(year))
            .fetchOne()
    }
}
