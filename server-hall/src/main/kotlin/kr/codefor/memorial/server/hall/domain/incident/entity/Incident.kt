package kr.codefor.memorial.server.hall.domain.incident.entity

import kr.codefor.memorial.server.hall.configuration.jpa.BaseEntity
import java.time.LocalDateTime
import javax.persistence.Entity
import javax.persistence.Table

@Entity
@Table(name = "incidents")
class Incident internal constructor(

    val dateTime: LocalDateTime,

    val city: String,

    val killed: Long,

    val injured: Long,

    val type: String,

    val reason: String
    
) : BaseEntity() {
    companion object {

        fun of(
            dateTime: LocalDateTime,
            city: String,
            killed: Long,
            injured: Long,
            type: String,
            reason: String
        ): Incident {
            return Incident(
                dateTime = dateTime,
                city = city,
                killed = killed,
                injured = injured,
                type = type,
                reason = reason
            )
        }
    }
}
