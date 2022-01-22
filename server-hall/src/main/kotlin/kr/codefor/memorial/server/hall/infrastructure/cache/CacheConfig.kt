package kr.codefor.memorial.server.hall.infrastructure.cache

import org.springframework.beans.factory.ObjectProvider
import org.springframework.boot.autoconfigure.cache.CacheManagerCustomizer
import org.springframework.boot.autoconfigure.cache.CacheManagerCustomizers
import org.springframework.boot.autoconfigure.condition.ConditionalOnMissingBean
import org.springframework.cache.annotation.EnableCaching
import org.springframework.cache.concurrent.ConcurrentMapCacheManager
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.context.annotation.Primary
import kotlin.streams.toList

/**
 * @Author Heli
 */
@EnableCaching
@Configuration
class CacheConfig {

    @Primary
    @Bean(name = [IN_MEMORY_CACHE_MANAGER])
    fun inMemoryCacheManager(cacheManagerCustomizers: CacheManagerCustomizers): ConcurrentMapCacheManager {
        val inMemoryCacheManager = ConcurrentMapCacheManager()
        return cacheManagerCustomizers.customize(inMemoryCacheManager)
    }

    @Bean
    @ConditionalOnMissingBean
    fun cacheManagerCustomizers(customizers: ObjectProvider<CacheManagerCustomizer<*>>): CacheManagerCustomizers {
        return CacheManagerCustomizers(customizers.orderedStream().toList())
    }

    companion object {

        const val IN_MEMORY_CACHE_MANAGER = "inMemoryCacheManager"
    }
}
