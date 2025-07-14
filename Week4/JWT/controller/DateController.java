package com.cognizant.SpringJWT.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.SimpleDateFormat;
import java.util.Date;

import static com.cognizant.SpringJWT.SpringJwtApplication.LOGGER;

@RestController
public class DateController {

    @GetMapping("/displayDate")
    public String displayDateMethod() {
        LOGGER.info("START - /displayDate");

        try (ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml")) {
            SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
            String formattedDate = format.format(new Date());

            LOGGER.info("END - /displayDate");
            return "Formatted Date: " + formattedDate;
        }
    }
}
