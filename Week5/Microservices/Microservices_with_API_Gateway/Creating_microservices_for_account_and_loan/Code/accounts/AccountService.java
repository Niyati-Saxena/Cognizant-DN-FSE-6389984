package com.cognizant.account.service;

import com.cognizant.account.model.Account;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    public Account getAccountByNumber(String number) {
        return new Account(number, "saving", 234343);
    }
}
