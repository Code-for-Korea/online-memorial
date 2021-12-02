package kr.codefor.memorial.server.hall.domain.incident.service

import io.mockk.every
import io.mockk.impl.annotations.InjectMockKs
import io.mockk.impl.annotations.MockK
import io.mockk.junit5.MockKExtension
import kr.codefor.memorial.server.hall.domain.incident.repository.IncidentRepository
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import strikt.api.expectThat
import strikt.assertions.isEqualTo

@ExtendWith(MockKExtension::class)
class IncidentQueryTest {

    @MockK
    private lateinit var incidentRepository: IncidentRepository

    @InjectMockKs
    private lateinit var incidentQuery: IncidentQuery

    @Test
    fun `연도의 산재 건수를 조회할 수 있다`() {
        // given
        val year = 2021
        val incidentCount = IncidentCount(
            killed = 1_000L,
            injured = 500L
        )
        every { incidentRepository.countBy(year) } returns incidentCount

        // when
        val actual = incidentQuery.count(year)

        // then
        expectThat(actual) {
            get { killed } isEqualTo 1_000L
            get { injured } isEqualTo 500L
        }
    }

    @Test
    fun `연도가 없으면 전체 산재 건수를 조회할 수 있다`() {
        // given
        val incidentCount = IncidentCount(
            killed = 1_000L,
            injured = 500L
        )
        every { incidentRepository.countBy(null) } returns incidentCount

        // when
        val actual = incidentQuery.count(null)

        // then
        expectThat(actual) {
            get { killed } isEqualTo 1_000L
            get { injured } isEqualTo 500L
        }
    }
}
