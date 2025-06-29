import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoggingExample {
    // initializing logger
    private static final Logger logger = LoggerFactory.getLogger(LoggingExample.class);

    public static void main(String[] args) {
        logger.error("Error Message"); // logs a error level message
        logger.warn("Warning Message"); // logs a warning level message
    }

}
