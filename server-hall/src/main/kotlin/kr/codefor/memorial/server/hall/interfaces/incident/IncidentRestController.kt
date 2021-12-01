package kr.codefor.memorial.server.hall.interfaces.incident

import kr.codefor.memorial.server.hall.domain.incident.service.IncidentAggregator
import kr.codefor.memorial.server.hall.domain.incident.service.IncidentQuery
import org.springframework.http.MediaType
import org.springframework.validation.annotation.Validated
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import javax.validation.constraints.Pattern

@RestController
@Validated
class IncidentRestController(
    private val incidentQuery: IncidentQuery,
    private val incidentAggregator: IncidentAggregator
) {

    @GetMapping(
        value = ["/api/v1/incidents/count"],
        produces = [MediaType.APPLICATION_JSON_VALUE]
    )
    fun getIncidentCount(
        @RequestParam(required = false)
        year: Int?
    ): IncidentCountDto {
        val incidentCount = incidentQuery.count(year)

        return incidentCount.toDto()
    }

    @GetMapping(
        value = ["/api/v1/incidents/aggregate"]
    )
    fun getIncidentAggregate(
        @RequestParam
        @Pattern(regexp = "DayOfWeek", message = "type is not in [DayOfWeek]")
        type: String
    ): List<IncidentAggregateResultDto> {
        val aggregateResult = incidentAggregator.aggregateByDay()

        return aggregateResult.map {
            IncidentAggregateResultDto(
                dayOfWeek = it.key.name,
                count = it.value.toDto()
            )
        }
    }
}
