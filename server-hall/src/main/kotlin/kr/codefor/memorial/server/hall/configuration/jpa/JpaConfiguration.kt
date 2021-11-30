package kr.codefor.memorial.server.hall.configuration.jpa

import kr.codefor.memorial.server.hall.domain.Domain
import org.hibernate.cfg.AvailableSettings
import org.springframework.boot.orm.jpa.EntityManagerFactoryBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.jpa.JpaTransactionManager
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean
import javax.persistence.EntityManagerFactory
import javax.sql.DataSource

@Configuration
@EnableJpaRepositories(
    entityManagerFactoryRef = Jpa.SERVER_HALL_ENTITY_MANAGER,
    transactionManagerRef = Jpa.SERVER_HALL_TRANSACTION_MANAGER,
    basePackageClasses = [Domain::class]
)
class JpaConfiguration(
    private val dataSource: DataSource
) {

    @Bean(Jpa.SERVER_HALL_ENTITY_MANAGER)
    fun entityManagerFactory(builder: EntityManagerFactoryBuilder): LocalContainerEntityManagerFactoryBean {

        val properties = mapOf(
            AvailableSettings.USE_SECOND_LEVEL_CACHE to false.toString(),
            AvailableSettings.USE_QUERY_CACHE to false.toString()
        )

        return builder
            .dataSource(dataSource)
            .packages(Domain::class.java)
            .properties(properties)
            .persistenceUnit(Jpa.SERVER_HALL_PERSISTENCE_UNIT)
            .build()
    }

    @Bean(Jpa.SERVER_HALL_TRANSACTION_MANAGER)
    @Primary
    fun transactionManager(factory: EntityManagerFactory): JpaTransactionManager = JpaTransactionManager(factory)
}
