//contrato a ser seguido

class Transporte {
    entregar() {
        throw new Error("Method not implemented");
    }
}

//classes concretas
class Navio extends Transporte {
    entregar() {
        console.log('Entraga por navio');
    }
}


class Caminhao extends Transporte {
    entregar() {
        console.log('Entraga por caminhao');
    }
}


//fábrica abstrata
class TransporteFactory{
    criarTransporte() {
        throw new Error("Method not implemented");
    }

    // constructor(transporte) {
    //     this.transporte = transporte; //inversao de dependencia 
    // }
    
    entregar() {
        const transporte = this.criarTransporte();
        transporte.entregar();
    }

        criarImposto() {  
             const transporte = this.criarTransporte();
             transporte.entregar();      
        }

        criarConsumo() {  
             const transporte = this.criarTransporte();
             transporte.entregar();      
        }

}

//factory concreta
class NavioFactory extends TransporteFactory {
    criarTransporte() {
        return new Navio();
    }
    
    criarImposto() {
        return new Navio();
    }

    criarConsumo() {
        return new Navio();
    }
}
//factory concreta
class CaminhaoFactory extends TransporteFactory {
    criarTransporte() {
        return new Caminhao();
    }
}


const caminhao = new CaminhaoFactory();
caminhao.entregar();
caminhao.criarImposto();
caminhao.criarConsumo();

const navio = new NavioFactory();
navio.entregar();