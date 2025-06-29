-- Scenario 3
    --  Transferring funds between 2 accounts
    
CREATE OR REPLACE PROCEDURE TransferFunds (
    senderID IN NUMBER,
    recieverID IN number,
    amount IN number
)  IS
    
    s_balance NUMBER;
    
BEGIN
    -- ensuring amount is less than balance 
    SELECT balance INTO s_balance
    FROM accounts
    WHERE accountID = senderID
    FOR UPDATE; -- to maintain concurrency
    
    IF s_balance < amount THEN
        RAISE_APPLICATION_ERROR(-20001 , 'Insufficient balance in the account!');
    END IF;
    
    -- transferring money
    UPDATE accounts 
    SET balance = balance - amount , lastmodified = sysdate
    WHERE accountID = senderID;
    
    UPDATE accounts
    SET balance = balance + amount , lastmodified = sysdate
    WHERE accountID = recieverID;
        
    -- recording transactions
    INSERT INTO transactions 
    VALUES (3 , senderID , sysdate , amount , 'Debit');
    INSERT INTO transactions 
    VALUES (4 , recieverID , sysdate , amount , 'Credit');
    
    COMMIT;
    
END;
/

-- executing the procedure
BEGIN 
    TransferFunds(1 , 2 , 20);
END;
/
