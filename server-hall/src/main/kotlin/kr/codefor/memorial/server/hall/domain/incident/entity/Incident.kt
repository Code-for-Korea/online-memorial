package kr.codefor.memorial.server.hall.domain.incident.entity

import kr.codefor.memorial.server.hall.util.lateInit
import java.time.LocalDateTime
import javax.persistence.*

@Entity
@Table(name = "incidents")
class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = lateInit()

    val dateTime: LocalDateTime = lateInit()

    val city: String = lateInit()

    val killed: Long? = lateInit()

    val injured: Long? = lateInit()

    val type: String = lateInit()

    val reason: String = lateInit()
}
