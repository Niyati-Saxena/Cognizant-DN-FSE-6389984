-- Scenario 2
    -- Adding bonus to the salary as per the department
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus (
    bonus_percentage IN NUMBER, --input parameters
    input_dept IN VARCHAR2
   ) IS
    
BEGIN
    
    UPDATE employees 
    SET salary = salary + (salary*bonus_percentage/100)
    WHERE department = input_dept;
    
    COMMIT; 
    
END;
/
-- executing the procedure
BEGIN
    UpdateEmployeeBonus(3,'IT');
    UpdateEmployeeBonus(5,'HR');
END;    
/    


    


