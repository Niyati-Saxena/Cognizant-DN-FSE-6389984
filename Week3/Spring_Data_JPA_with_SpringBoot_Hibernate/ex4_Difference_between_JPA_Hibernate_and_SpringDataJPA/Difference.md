# Difference Between JPA , Hibernate and Spring Data JPA
--
1. JPA
   -> stands Java Persistance API.
   -> Only consists is a specifications.
   -> Standard API for ORM (Object Relational Mapping)
   -> Needs an implementation like Hibernate or EclipseLink
--------
2. Hiberante
   -> It is a framework.
   -> Hibernate is one of the implementation of JPA.
   -> Provides actual ORM engine that maps Java objects to database tables.
------
3. Spring Data JPA
   -> Spring-based framework that sits on top of JPA.
   -> Simplifies JPA usage by eliminating boilerplate code typically for implementing DAOs. (Data Access Object)
   -> Uses Hiberante by default.
   -> Auto-generate queries based on method names.
   
   
   
