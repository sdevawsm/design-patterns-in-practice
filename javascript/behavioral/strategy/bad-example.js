class Frete {
  calcular(tipo, peso) {

    if (tipo === "sedex") {
      return peso * 2;
    }

    if (tipo === "pac") {
      return peso * 1.5;
    }

    if (tipo === "retirada") {
      return 0;
    }


    throw new Error("Tipo inválido");
  }
}

const frete = new Frete();

console.log("SEDEX:", frete.calcular("sedex", 10));
console.log("PAC:", frete.calcular("pac", 10));
console.log("RETIRADA:", frete.calcular("retirada", 10));