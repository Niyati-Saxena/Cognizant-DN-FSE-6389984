-- Scenario 2 
    -- promoting customers to VIP if their balance is greater than 10,000
    
-- Adding IsVIP in customers table
ALTER TABLE customers
ADD IsVIP VARCHAR2(5) DEFAULT 'FALSE'; 

-- prmoting to IsVIP
BEGIN 
    for res in (
    SELECT IsVIP , customerID
    FROM customers
    WHERE balance > 10000
    ) LOOP
        UPDATE customers 
        SET IsVIP = 'True'
        WHERE customerID = res.customerID;
    END LOOP;
    
    COMMIT;
    
END;
/


