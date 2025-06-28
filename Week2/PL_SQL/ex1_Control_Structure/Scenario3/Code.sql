-- Scenario 3
    -- Reminder message for customers whose loans are due within next 30 days
BEGIN
    FOR res IN (
    SELECT loanamount , enddate , customerID 
    FROM loans
    WHERE enddate BETWEEN sysdate AND sysdate + 30
    ) LOOP
        dbms_output.put_line('Loan Due Reminder : Dear Customer with ID ' || res.customerID || ' your loan is due on ' || TO_CHAR(res.enddate , 'DD-MM-YYYY'));
    END LOOP;
END;
/    
    


