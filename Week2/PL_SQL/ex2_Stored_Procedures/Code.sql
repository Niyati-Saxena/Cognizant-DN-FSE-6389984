-- Scenario 1
    -- Applying 1% interest rate to all savings accounts
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS    
BEGIN
    UPDATE accounts
    SET balance = balance + balance*0.01 , lastmodified = sysdate
    WHERE accounttype = 'Savings';
    
    COMMIT;
    
END;
/

-- executing stored procedure
EXEC ProcessMonthlyInterest;

    


