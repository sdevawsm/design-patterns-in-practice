// class FreteStrategy {   
//     calcular(peso) {    
//             throw new Error("Método calcular() deve ser implementado");
//     }
// }

// class SedexStrategy extends FreteStrategy {
//   calcular(peso) {
//     return peso * 2;
//   }
// }

// class PacStrategy extends FreteStrategy {
//   calcular(peso) {
//     return peso * 1.5;
//   }
// }

// class RetiradaStrategy extends FreteStrategy {
//   calcular(peso) {
//     return 0;
//   }
// }


// //Contexto
// class CalculadoraFrete {

//   constructor(strategy) {
//     this.strategy = strategy;
//   }

//   calcular(peso) {
//     return this.strategy.calcular(peso);
//   }
// }

// //Uso
// const sedex = new CalculadoraFrete(
//   new SedexStrategy()
// );

// console.log("SEDEX:", sedex.calcular(10));


// const pac = new CalculadoraFrete(
//   new PacStrategy()
// );

// console.log("PAC:", pac.calcular(10));


// const retirada = new CalculadoraFrete(
//   new RetiradaStrategy()
// );

// console.log("RETIRADA:", retirada.calcular(10));



class FreteStrategy {   
    calcular(peso) {    
            throw new Error("Método calcular() deve ser implementado");
    }

  }

class SedexStrategy extends FreteStrategy {
  calcular(peso) {
    return peso * 2;
  }

    remover() { 
      console.log("Removendo SedexStrategy");
    }
}

class PacStrategy extends FreteStrategy {
  calcular(peso) {
    return peso * 1.5;
  }
}

class NovaFormaStrategy extends FreteStrategy {
  calcular(peso) {
    return peso * 20;
  }
}


class RetiradaStrategy extends FreteStrategy {
  calcular(peso) {
    return 0;
  }
}


class CalculadoraFrete {

  constructor(strategy) {
    this.strategy = strategy;
  }

  calcular(peso) {
    return this.strategy.calcular(peso);
  }
}


const sedex = new SedexStrategy();
const pac = new PacStrategy();
const retirada = new RetiradaStrategy();
const novaForma = new NovaFormaStrategy();

let calculadoraFrete = new CalculadoraFrete(sedex);
console.log("SEDEX:", calculadoraFrete.calcular(10));


calculadoraFrete = new CalculadoraFrete(pac);
console.log("PAC:", calculadoraFrete.calcular(10));

calculadoraFrete = new CalculadoraFrete(retirada);
console.log("RETIRADA':", calculadoraFrete.calcular(10)); 


calculadoraFrete = new CalculadoraFrete(novaForma);
console.log("NOVA FORMA:", calculadoraFrete.calcular(10));