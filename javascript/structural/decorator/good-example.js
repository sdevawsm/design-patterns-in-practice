// Decorator Pattern Example in JavaScript
//simulando interface (Tipo interface)
class Cafe {
    getValor() {
        throw new Error("Method 'getValor()' must be implemented.");
    }

    getDescricao() {
        throw new Error("Method 'getDescricao()' must be implemented.");
    }
}


// Component
class CafeSimples extends Cafe {

    getValor() {
        return 5.0;
    }

    getDescricao() {
        return "Cafe Simples";
    }

}

// Decorator
class LeiteDecorator extends Cafe {

    constructor(cafe) {
        this.cafe = cafe;
    }

    getValor() {
        return this.cafe.getValor() + 2.0;
    }

    getDescricao() {
        return this.cafe.getDescricao() + " com Leite";
    }

}

// Second Decorator
class AcucarDecorator extends Cafe {

    constructor(cafe) {
        this.cafe = cafe;
    }

    getValor() {
        return this.cafe.getValor() + 1.0;
    }

    getDescricao() {
        return this.cafe.getDescricao() + " com Acucar";
    }

}

// =========================
// Main
// =========================

// Café simples
const simpleCoffee = new CafeSimples();
console.log(
    "Simple Coffee:",
    simpleCoffee.getValor(),
    "-",
    simpleCoffee.getDescricao()
);

// Café com leite
const milkCoffee = new LeiteDecorator(simpleCoffee);
console.log(
    "Milk Coffee:",
    milkCoffee.getValor(),
    "-",
    milkCoffee.getDescricao()
);

// Café com açúcar
const sugarCoffee = new AcucarDecorator(simpleCoffee);
console.log(
    "Sugar Coffee:",
    sugarCoffee.getValor(),
    "-",
    sugarCoffee.getDescricao()
);

// Café com leite e açúcar
const milkSugarCoffee =
    new AcucarDecorator(
        new LeiteDecorator(
            new CafeSimples()
        )
    );

console.log(
    "Milk and Sugar Coffee:",
    milkSugarCoffee.getValor(),
    "-",
    milkSugarCoffee.getDescricao()
);