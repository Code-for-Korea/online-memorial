package kr.codefor.memorial.server.hall.configuration.jpa

import kr.codefor.memorial.server.hall.util.lateInit
import javax.persistence.GeneratedValue
import javax.persistence.GenerationType
import javax.persistence.Id
import javax.persistence.MappedSuperclass

@MappedSuperclass
abstract class BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long? = lateInit()
}
