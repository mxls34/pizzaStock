
import javax.swing.JOptionPane;

class Method{
    
}

public class App {
    public static void main(String[] args) throws Exception {

        while (true) { 
            String menu = "1.Add ingredient\n";
            menu += "2.Decrete Ingredient\n"; 
            menu += "3.View Ingredient\n";
            menu += "4.Exit"; 
            String inpuString = JOptionPane.showInputDialog(menu);
    
            int choice = Integer.parseInt(inpuString);
            if(choice == 1){
                JOptionPane.showMessageDialog(null, "Ingredient Added","Menu Ingredient",JOptionPane.INFORMATION_MESSAGE);
            }else if(choice == 2){
                JOptionPane.showMessageDialog(null, "Ingredient was cut", "cut stock", JOptionPane.INFORMATION_MESSAGE);
            }else if (choice == 3){
                JOptionPane.showMessageDialog(null, "Show Ingredient List","View",JOptionPane.INFORMATION_MESSAGE);
            }else if(choice == 4){
                JOptionPane.showMessageDialog(null, "Exiting Program...","Exit",JOptionPane.WARNING_MESSAGE);
                break;
            }else{
                JOptionPane.showMessageDialog(null, "Your Enter Not Correct","",JOptionPane.WARNING_MESSAGE);
            }
        }
    }
}