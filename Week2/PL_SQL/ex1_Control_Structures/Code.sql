-- Scenario 1 
    -- Applying 1% percentage discount to current loan interest rate for all the customers above 60 years 
DECLARE 
    -- using Cursors -> help us to easily fetch over customer-loan pair
    CURSOR Senior_cust IS
    SELECT c.name , c.customerID , l.loanID , l.interestRate , TRUNC(MONTHS_BETWEEN(sysdate , c.DOB) / 12) AS age 
    FROM customers c
    JOIN loans l 
    ON c.customerID = l.customerID;
    
BEGIN
    -- using FOR LOOP -> for iterating
    FOR res IN Senior_cust LOOP 
        IF res.age > 60 THEN 
            UPDATE loans
            SET interestRate = InterestRate -1
            WHERE loanID = res.loanID;
        END IF;
    END LOOP;
    COMMIT; -- for making change permanent 
END;
