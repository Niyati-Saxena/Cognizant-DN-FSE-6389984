import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class TestCalculator {
    private Calculator calc;

    @Before
    public void setup() {
        calc = new Calculator();
        System.out.println("Setting up calculator!");
    }

    @After
    public void cleanUp() {
        calc = null;
        System.out.println("Cleaning up calculator!");
    }
    // Test method for addition
    @Test
    public void testAdd() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calc.add(a,b);

        // Assert
        assertEquals(30 , result);
    }

    // Test method for substraction
    @Test
    public void testSubs() {
        // Arrange
        int a = 10;
        int b = 20;

        // Act
        int result = calc.subs(a,b);

        // Assert
        assertEquals(-10 , result);
    }

}
