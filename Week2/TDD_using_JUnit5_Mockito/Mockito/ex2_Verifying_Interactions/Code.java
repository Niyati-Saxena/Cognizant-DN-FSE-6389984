import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

public class MyServiceTest {
    @Test
    public void testInteractions() {
        // creating mock object
        ExternalAPI mockAPI = mock(ExternalAPI.class);

        // injecting mock
        MyService service = new MyService(mockAPI);

        service.fetchData();
        // verifying getdata() was called on mockAPI
        verify(mockAPI).getdata();


    }
}
