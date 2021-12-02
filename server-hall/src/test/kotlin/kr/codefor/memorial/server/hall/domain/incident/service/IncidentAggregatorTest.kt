package kr.codefor.memorial.server.hall.domain.incident.service

import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import kr.codefor.memorial.server.hall.domain.incident.entity.Incident
import kr.codefor.memorial.server.hall.domain.incident.repository.IncidentRepository
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import strikt.api.expectThat
import strikt.assertions.get
import strikt.assertions.isEqualTo
import java.time.DayOfWeek
import java.time.LocalDateTime

@ExtendWith(MockKExtension::class)
class IncidentAggregatorTest {

    @MockK
    private lateinit var incidentRepository: IncidentRepository

    @InjectMockKs
    private lateinit var incidentAggregator: IncidentAggregator

    @Test
    fun `전체 산재의 요일 별 통계를 구할 수 있다`() {
        // given
        val sunday = LocalDateTime.of(2021, 11, 28, 0, 0)
        val monday = sunday.plusDays(1)
        val tuesday = monday.plusDays(1)
        val wednesday = tuesday.plusDays(1)
        val thursday = wednesday.plusDays(1)
        val friday = thursday.plusDays(1)
        val saturday = friday.plusDays(1)

        val incidents = listOf(
            Incident.of(sunday, "Seoul", 1L, 14L, "사망", "something reason"),
            Incident.of(monday, "Seoul", 2L, 13L, "사망", "something reason"),
            Incident.of(tuesday, "Seoul", 3L, 12L, "사망", "something reason"),
            Incident.of(wednesday, "Seoul", 4L, 11L, "사망", "something reason"),
            Incident.of(thursday, "Seoul", 5L, 10L, "사망", "something reason"),
            Incident.of(friday, "Seoul", 6L, 9L, "사망", "something reason"),
            Incident.of(saturday, "Seoul", 7L, 8L, "사망", "something reason"),

            Incident.of(sunday, "Seoul", 8L, 7L, "사망", "something reason"),
            Incident.of(monday, "Seoul", 9L, 6L, "사망", "something reason"),
            Incident.of(tuesday, "Seoul", 10L, 5L, "사망", "something reason"),
            Incident.of(wednesday, "Seoul", 11L, 4L, "사망", "something reason"),
            Incident.of(thursday, "Seoul", 12L, 3L, "사망", "something reason"),
            Incident.of(friday, "Seoul", 13L, 2L, "사망", "something reason"),
            Incident.of(saturday, "Seoul", 14L, 1L, "사망", "something reason")
        )
        every { incidentRepository.findAll() } returns incidents

        // when
        val actual = incidentAggregator.aggregateByDay()

        // then
        expectThat(actual) {
            get(DayOfWeek.SUNDAY) isEqualTo IncidentCount(killed = 9L, injured = 21L)
            get(DayOfWeek.MONDAY) isEqualTo IncidentCount(killed = 11L, injured = 19L)
            get(DayOfWeek.TUESDAY) isEqualTo IncidentCount(killed = 13L, injured = 17L)
            get(DayOfWeek.WEDNESDAY) isEqualTo IncidentCount(killed = 15L, injured = 15L)
            get(DayOfWeek.THURSDAY) isEqualTo IncidentCount(killed = 17L, injured = 13L)
            get(DayOfWeek.FRIDAY) isEqualTo IncidentCount(killed = 19L, injured = 11L)
            get(DayOfWeek.SATURDAY) isEqualTo IncidentCount(killed = 21L, injured = 9L)
        }
    }
}
