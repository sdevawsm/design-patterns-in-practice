//contrato tem que implementar
class Transporte {

  entregar() {
    throw new Error(
      "Método entregar() deve ser implementado"
    );
  }
}


class Caminhao extends Transporte {

  entregar() {
    console.log("Entrega por caminhão");
  }
}


class Navio extends Transporte {

  entregar() {
    console.log("Entrega por navio");
  }
}

class Bicicleta extends Transporte {

  entregar() {
    console.log("Entrega por bicicleta");
  }
}

class Skate extends Transporte {

  entregar() {
    console.log("Entrega por skate");
  }
}



class Logistica {

  //contrato tem que implementar  
  criarTransporte() {
    throw new Error(
      "criarTransporte() deve ser implementado"
    );
  }

  realizarEntrega() {

    const transporte = this.criarTransporte();

    transporte.entregar();
  }
}



class LogisticaSkate extends Logistica {
    //vai ser implementado
    criarTransporte() {
        return new Skate();
    }
}




class LogisticaTerrestre
  extends Logistica {

  criarTransporte() {
    return new Caminhao();
  }
}


class LogisticaMaritima
  extends Logistica {

  criarTransporte() {
    return new Navio();
  }
}




// const terrestre = new LogisticaTerrestre();

// terrestre.realizarEntrega();


// const maritima =
//   new LogisticaMaritima();

// maritima.realizarEntrega();


const skate = new LogisticaSkate();
skate.realizarEntrega();