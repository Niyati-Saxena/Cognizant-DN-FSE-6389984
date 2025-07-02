package org.example.service;

import org.example.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    // setter method to inject dependency
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String title) {
        System.out.println("Adding Book: " + title);
        bookRepository.saveBook(title);
    }
}
