import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import org.mockito.Mockito;

public class MyServiceTest {
    @Test
    public void testExternalAPI() {
        // creating mock object
        ExternalAPI mockAPI = mock(ExternalAPI.class);

        // stubbing
        when(mockAPI.getdata()).thenReturn("Mock Data!");

        // inject mock into service class
        MyService service = new MyService(mockAPI);
        // calling the method
        String result = service.fetchData();

        // asserting
        assertEquals("Mock Data!" , result);
    }

}
