package kr.codefor.memorial.server.hall.configuration.environment

import org.junit.jupiter.api.Test

class EncryptHolderTest {

    private val encrypt = AesEncryptHolder(
        key = "A1B2C3D4E5F6G7H8",
        iv = "8H7G6F5E4D3C2B1A",
        cipherTransformation = "AES/CBC/PKCS5Padding"
    )

    @Test
    fun encrypt() {
        val enc = encrypt.enc("user-12345")
        val dec = encrypt.dec(enc)

        assert(dec == "user-12345")
    }
}
