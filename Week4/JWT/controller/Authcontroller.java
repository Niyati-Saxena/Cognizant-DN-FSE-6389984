package com.cognizant.SpringJWT.controller;

import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.crypto.SecretKey;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static com.cognizant.SpringJWT.SpringJwtApplication.LOGGER;

@RestController
public class AuthController {

    @GetMapping("/authenticate")
    public Map<String, String> generateToken(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START - /authenticate");
        LOGGER.debug("Authorization header: {}", authHeader);

        String user = extractUser(authHeader);
        LOGGER.debug("Decoded user: {}", user);

        String token = createJwt(user);

        Map<String, String> response = new HashMap<>();
        response.put("token", token);

        LOGGER.info("END - /authenticate");
        return response;
    }

    private String extractUser(String authHeader) {
        String encoded = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encoded);
        String decoded = new String(decodedBytes);
        return decoded.split(":")[0];
    }

    private String createJwt(String user) {
        SecretKey key = Keys.hmacShaKeyFor("Z3f8N1qP9sVbX7KwLcEjR5uY0oTmQ2iAvHpWgB6zXrFyUjCd".getBytes());

        JwtBuilder builder = Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 1200000)) // 20 minutes
                .signWith(key, SignatureAlgorithm.HS256);

        return builder.compact();
    }
}
