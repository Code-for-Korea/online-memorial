package kr.codefor.memorial.server.hall.domain.news.entity

import kr.codefor.memorial.server.hall.configuration.jpa.BaseEntity
import kr.codefor.memorial.server.hall.domain.incident.entity.Incident
import javax.persistence.*

@Entity
@Table(name = "news")
class News internal constructor(

    @JoinColumn(name = "incidentId", referencedColumnName = "id", updatable = false)
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    val incident: Incident,

    val infoLink: String?,

    val followLink: String?,

    val addition: String?

) : BaseEntity()
