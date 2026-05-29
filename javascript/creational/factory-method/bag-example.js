class Caminhao {

  entregar() {
    console.log("Entrega por caminhão");
  }
}

class Navio {

  entregar() {
    console.log("Entrega por navio");
  }
}

class Logistica {

  criarTransporte(tipo) {

    if (tipo === "caminhao") {
      return new Caminhao();
    }

    if (tipo === "navio") {
      return new Navio();
    }

    throw new Error("Tipo inválido");
  }
}

const logistica = new Logistica();

const transporte =
  logistica.criarTransporte("navio");

transporte.entregar();