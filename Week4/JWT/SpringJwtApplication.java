package com.cognizant.SpringJWT;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringJwtApplication {
	public static final Logger LOGGER = LoggerFactory.getLogger(SpringJwtApplication.class);

	public static void main(String[] args) {
		LOGGER.info("Application started");
		org.springframework.boot.SpringApplication.run(SpringJwtApplication.class, args);
	}
}
