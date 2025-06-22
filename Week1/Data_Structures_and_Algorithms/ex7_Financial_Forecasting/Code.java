// pure recursion code
public class FinancialForecast {
    public static double futureValueRecursive(double principal, double rate, int years) {
        if (years == 0) {
            return principal;
        } else {
            return futureValueRecursive(principal, rate, years - 1) * (1 + rate);
        }
    }

 // optimisation -> using Iterative Approach 
  public static double futureValueIterative(double principal, double rate, int years) {
    double result = principal;
    for (int i = 1; i <= years; i++) {
        result *= (1 + rate);
    }
    return result;
}
  
    public static void main(String[] args) {
        double principal = 10000;
        double rate = 0.05;
        int years = 10;
        System.out.printf("By Recursive Appraoch :");
        System.out.printf("Future Value after %d years: Rs.%.2f%n", years, futureValueRecursive(principal, rate, years));
        System.out.printf("By Iterative Appraoch :");
        System.out.printf("Future Value after %d years: Rs.%.2f%n", years, futureValueIterative(principal, rate, years));
    }
}
