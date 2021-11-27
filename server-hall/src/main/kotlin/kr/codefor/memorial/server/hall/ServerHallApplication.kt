package kr.codefor.memorial.server.hall

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class ServerHallApplication

fun main(args: Array<String>) {
    runApplication<ServerHallApplication>(*args)
}

@RestController
class HelloRestController {

    @GetMapping("/hello")
    fun hello() = "Hello, memorial-server-hall"
}
