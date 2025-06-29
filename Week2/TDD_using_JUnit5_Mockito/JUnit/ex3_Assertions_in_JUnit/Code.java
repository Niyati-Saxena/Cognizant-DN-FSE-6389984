import org.junit.Test;
import static org.junit.Assert.*;
public class AssertionTest {

    @Test
    public void testAssertions() {
        // assert equals
        assertEquals(7 , 2 + 9);

        // assert null
        assertNull(null);

        // assert not null
        assertNotNull();

    }

}
