import java.util.ArrayList;
import java.util.Comparator;
import java.util.ArrayList;
import java.util.Collections;

public class Product {
    private int ProductID ;
    private String Product_Name ;
    private String Product_Category ;

    // Constructor for initialization
    public Product(int id , String name , String category) {
        this.ProductID = id;
        this.Product_Name = name;
        this.Product_Category = category;
    }

    // getter
    public int getProductID() {
        return ProductID;
    }
} 

public class E_Commerce_Platform {

public static void main(String[] args) {
    // Creating empty arraylist
    ArrayList<Product> products = new ArrayList<> ();
    // adding items
    products.add(new Product(104, "Phone", "Electronics"));
    products.add(new Product(102, "Shoes", "Fashion"));
    products.add(new Product(101, "Laptop", "Electronics"));
    products.add(new Product(103, "Watch", "Accessories"));

    // product to be searched
    Product input = new Product(101, "Laptop" , "Electronics");

    // Linear Search Test Case
    System.out.println("Linear Search Result : ");
    if (LinearSearch(products , input)) {
        System.out.println("Item Found !");
    } else {
        System.out.println("Item Not Found.");
    }

    // sorting the array for BS
    Collections.sort(products, Comparator.comparingInt(Product::getProductID));

    // Binary Search Test Case 
    System.out.println("Binary Search Result : ");
    if (BinarySearch(products , input)) {
        System.out.println("Item Found !");
    } else {
        System.out.println("Item Not Found.");
    }

}


// Linear Search -> returns true or false on the basis of id 
public static boolean LinearSearch(ArrayList<Product> products , Product targetProduct ) {
    int targetID = targetProduct.getProductID();

    for (Product p : products) {
        if (p.getProductID() == targetID) return true;
    }
    return false;
}

// Binary search -> return true/false on the basis of id 
public static boolean BinarySearch(ArrayList<Product> products , Product targetProduct) {
    int targetID = targetProduct.getProductID();
    int st = 0; int end = products.size()-1;

    while (st <= end) {
        int mid = st + (end - st) / 2;
        int midID = products.get(mid).getProductID();

        if (midID == targetID) return true;
        else if (targetID < midID) end = mid -1;
        else st = mid +1;
          
    }

    return false;
}

}
