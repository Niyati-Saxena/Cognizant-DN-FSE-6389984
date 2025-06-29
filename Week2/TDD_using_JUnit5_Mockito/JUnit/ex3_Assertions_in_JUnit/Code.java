import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionTest {
    @Test
    public void testAssertions() {
        // assert equals
        assertEquals(7 , 2 + 5);

        // assert null
        assertNull(null);

        // assert not null
        assertNotNull(new Object());

        // assert true
        assertTrue(2==2);

        // assert false
        assertFalse(3 == 7);
    }
}
