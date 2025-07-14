package com.cognizant.SpringJWT.controller;

import com.cognizant.SpringJWT.Country;
import com.cognizant.SpringJWT.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CountryController {
    @Autowired
    private CountryService countryService;


    @RequestMapping("/india")
    public Country getCountry(){
        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext("country.xml")) {
            return context.getBean("in", Country.class);
        } catch (Exception e) {
            return null;
        }
    }

    @RequestMapping("/countries")
    public Country[] getCountries(){
        try (ClassPathXmlApplicationContext context =
                     new ClassPathXmlApplicationContext("country.xml")) {
            return context.getBeansOfType(Country.class).values().toArray(new Country[0]);
        } catch (Exception e) {
            return null;
        }


    }

    @RequestMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code){
        return countryService.getCountry(code);
    }
                
    }

