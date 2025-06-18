// product interface
public interface Document {
    void open();
}

// concrete product for each document type
public class WordDoc implements Document {
    public void open() {
        System.out.println("Opening a Word Document..");
    }
}

public class PDFDoc implements Document {
    public void open() {
        System.out.println("Opening a PDF Document..");
    }
}

public class ExcelDoc implements Document {
    public void open() {
        System.out.println("Opening an Excel Document..");
    }
}

// abstract creator
public abstract class DocumentFactory {
    // factory method
    public abstract Document createDocument();

    // calling open()
    public void openDoc() {
        Document doc = createDocument();
        doc.open();
    }
}

// concrete factories for each document type
public class WordFactory extends DocumentFactory{
    public Document createDocument() {
        return new WordDoc();
    }
}

public class PDFFactory extends DocumentFactory{
    public Document createDocument() {
        return new PDFDoc();
    }
}

public class ExcelFactory extends DocumentFactory{
    public Document createDocument() {
        return new ExcelDoc();
    }
}

// test case 
class FactoryMethodPatternExample {
    public static void main(String[] args) {
        DocumentFactory wordf = new WordFactory();
        DocumentFactory pdff = new PDFFactory();
        DocumentFactory excelf = new ExcelFactory();

        wordf.openDoc();
        pdff.openDoc();
        excelf.openDoc();

    }
}