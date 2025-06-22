public class Logger {
    // implementing singleton using lazy initialization (created only when needed)
    private static Logger instance; //static instance
    
    // private constructor
    private Logger() {
        // empty
    }

    // method to get instance of logger class
    public static Logger getlogger() {
        if (instance == null) {   // created only once for the first time 
            instance = new Logger(); 
        }

        return instance;
    }
}

class SingletonPatternExample {
    public static void main(String[] args) {
        // test case to verify there exists only one inntance of the class
        Logger logger1 = Logger.getlogger(); // instance got initialised
        Logger logger2 = Logger.getlogger(); // same instance is returned

        if (logger1 == logger2) {

            System.out.println("Logger is Singlenton !");
        } else {
            System.out.println("Logger isn't Singleton !");

        }
    }
}
