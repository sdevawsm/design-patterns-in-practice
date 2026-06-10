// Decorator Pattern Example in Java

interface Cafe {
    double getValor();
    String getDescricao();
}

// Concrete Component
class CafeSimples implements Cafe {

    public double getValor() {
        return 5.0;
    }

    public String getDescricao() {
        return "Cafe Simples";
    }
}


//Decorator
class LeiteDecorator implements Cafe {

    private Cafe cafe;

    public LeiteDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    public double getValor() {
        return cafe.getValor() + 2.0;
    }

    public String getDescricao() {
        return cafe.getDescricao() + " com Leite";
    }
}


//second decorator
class AcucarDecorator implements Cafe {

    private Cafe cafe;

    public AcucarDecorator(Cafe cafe) {
        this.cafe = cafe;
    }

    public double getValor() {
        return cafe.getValor() + 1.0;
    }

    public String getDescricao() {
        return cafe.getDescricao() + " com Acucar";
    }
}


public class Main{

    public static void main(String[] args) {

        // Create a simple coffee
        Cafe simpleCoffee = new CafeSimples();
        System.out.println("Simple Coffee: " + simpleCoffee.getValor() + " - " + simpleCoffee.getDescricao());

        // // Decorate the coffee with milk
        Cafe milkCoffee = new LeiteDecorator(  simpleCoffee );
        System.out.println("Milk Coffee: " + milkCoffee.getValor() + " - " + milkCoffee.getDescricao());

        // Decorate the coffee with sugar
        Cafe sugarCoffee = new AcucarDecorator( simpleCoffee );
        System.out.println("Sugar Coffee: " + sugarCoffee.getValor() + " - " + sugarCoffee.getDescricao());

        // Cafe sugarCoffeeMilk = new AcucarDecorator( milkCoffee );
        // System.out.println("Sugar Coffee: " + sugarCoffeeMilk.getValor() + " - " + sugarCoffeeMilk.getDescricao());

        // // Decorate the coffee with both milk and sugar
        Cafe milkSugarCoffee = new AcucarDecorator(new LeiteDecorator( new CafeSimples() ));
        System.out.println("Milk and Sugar Coffee: " + milkSugarCoffee.getValor() + " - " + milkSugarCoffee.getDescricao());
    }
}