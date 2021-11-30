package kr.codefor.memorial.server.hall.configuration.environment

import java.security.Key
import java.util.*
import java.util.Collections.min
import javax.crypto.Cipher
import javax.crypto.spec.IvParameterSpec
import javax.crypto.spec.SecretKeySpec


interface EncryptHolder {

    fun enc(str: String): String
    fun dec(encStr: String): String
}

class AesEncryptHolder(
    private val key: String,
    private val iv: String,
    private val cipherTransformation: String
) : EncryptHolder {

    private fun getAESKey(): Key {
        val keyBytes = ByteArray(16)
        val b = key.toByteArray()

        val len = min(listOf(b.size, keyBytes.size))

        System.arraycopy(b, 0, keyBytes, 0, len)
        return SecretKeySpec(keyBytes, "AES")
    }

    override fun enc(str: String): String {
        val keySpec = getAESKey();
        val c = Cipher.getInstance(cipherTransformation)

        c.init(Cipher.ENCRYPT_MODE, keySpec, IvParameterSpec(iv.toByteArray()))

        val encrypted = c.doFinal(str.toByteArray())

        return String(Base64.getEncoder().encode(encrypted))
    }

    override fun dec(encStr: String): String {
        val keySpec = getAESKey()
        val c = Cipher.getInstance(cipherTransformation)

        c.init(Cipher.DECRYPT_MODE, keySpec, IvParameterSpec(iv.toByteArray()))

        val decrypted = Base64.getDecoder().decode(encStr.toByteArray())

        return String(c.doFinal(decrypted))
    }
}
