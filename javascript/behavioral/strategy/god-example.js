class FreteStrategy {   
    calcular(peso) {    
            throw new Error("Método calcular() deve ser implementado");
    }
}

class SedexStrategy extends FreteStrategy {
  calcular(peso) {
    return peso * 2;
  }
}

class PacStrategy extends FreteStrategy {
  calcular(peso) {
    return peso * 1.5;
  }
}

class RetiradaStrategy extends FreteStrategy {
  calcular(peso) {
    return 0;
  }
}


//Contexto
class CalculadoraFrete {

  constructor(strategy) {
    this.strategy = strategy;
  }

  calcular(peso) {
    return this.strategy.calcular(peso);
  }
}

//Uso
const sedex = new CalculadoraFrete(
  new SedexStrategy()
);

console.log("SEDEX:", sedex.calcular(10));


const pac = new CalculadoraFrete(
  new PacStrategy()
);

console.log("PAC:", pac.calcular(10));


const retirada = new CalculadoraFrete(
  new RetiradaStrategy()
);

console.log("RETIRADA:", retirada.calcular(10));