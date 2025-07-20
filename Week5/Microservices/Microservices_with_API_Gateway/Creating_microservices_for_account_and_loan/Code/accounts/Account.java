package com.cognizant.account.model;

public class Account {
    public String number;
    public String type;
    public int balance;

    public Account(String number, String type, int balance) {
        this.number = number;
        this.type = type;
        this.balance = balance;
    }
}
