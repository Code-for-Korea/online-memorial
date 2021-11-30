package kr.codefor.memorial.server.hall.configuration.environment

import kr.codefor.memorial.server.hall.util.notNull
import org.springframework.boot.SpringApplication
import org.springframework.boot.env.EnvironmentPostProcessor
import org.springframework.boot.env.YamlPropertySourceLoader
import org.springframework.core.env.ConfigurableEnvironment
import org.springframework.core.env.PropertiesPropertySource
import org.springframework.core.env.PropertySource
import org.springframework.core.io.ClassPathResource
import org.springframework.core.io.Resource
import java.io.IOException
import java.util.*


class EncryptEnvPostProcessor : EnvironmentPostProcessor {

    private data class MemorialProfile(
        val key: String,
        val iv: String,
        val cipherTransformation: String
    )

    override fun postProcessEnvironment(environment: ConfigurableEnvironment?, application: SpringApplication?) {
        environment.notNull { "environment must not be null" }

        val datasourceUserName = environment!!.getProperty("spring.datasource.username")
            .notNull { "datasourceUserName must not be null" }

        val datasourcePassword = environment.getProperty("spring.datasource.password")
            .notNull { "datasourcePassword must not be null" }

        val memorialProfile = getMemorialProfile()

        val encryptHolder = AesEncryptHolder(
            key = memorialProfile.key,
            iv = memorialProfile.iv,
            cipherTransformation = memorialProfile.cipherTransformation
        )

        val properties = Properties()
        properties["spring.datasource.username"] = encryptHolder.dec(datasourceUserName)
        properties["spring.datasource.password"] = encryptHolder.dec(datasourcePassword)

        environment.propertySources.addFirst(PropertiesPropertySource("server-hall", properties))
    }

    private fun getMemorialProfile(): MemorialProfile {
        val resource = ClassPathResource("memorial-private.yml")
        val propertySource = loadYaml(resource)

        val encryptKey = propertySource.getProperty(ONLINE_MEMORIAL_PROFILE_ENCRYPT_KEY).notNull().toString()
        val encryptIv = propertySource.getProperty(ONLINE_MEMORIAL_PROFILE_ENCRYPT_IV).notNull().toString()
        val encryptCipherTransformation = propertySource.getProperty(ONLINE_MEMORIAL_PROFILE_CIPHER_TRANSFORMATION)
            .notNull().toString()

        return MemorialProfile(
            key = encryptKey,
            iv = encryptIv,
            cipherTransformation = encryptCipherTransformation
        )
    }

    private fun loadYaml(path: Resource): PropertySource<*> {
        require(path.exists()) { "Resource $path does not exist" }
        return try {
            loader.load("custom-resource", path)[0]
        } catch (ex: IOException) {
            throw IllegalStateException("Failed to load yaml configuration from $path", ex)
        }
    }

    companion object {
        private val loader = YamlPropertySourceLoader()

        private const val ONLINE_MEMORIAL_PROFILE_ENCRYPT_KEY = "memorial.encrypt.key"
        private const val ONLINE_MEMORIAL_PROFILE_ENCRYPT_IV = "memorial.encrypt.iv"
        private const val ONLINE_MEMORIAL_PROFILE_CIPHER_TRANSFORMATION = "memorial.encrypt.cipherTransformation"
    }
}
