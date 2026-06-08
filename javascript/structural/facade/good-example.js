class Estoque {

    verificar() {
        console.log(
            "Verificando estoque"
        );
    }
}

class Pagamento {

    processar() {
        console.log(
            "Processando pagamento"
        );
    }
}

class Email {

    enviar() {
        console.log(
            "Enviando email"
        );
    }
}


class NotaFiscal {

    processar() {
        console.log(
            "Processando nota fiscal"
        );
    }
}

class Pedido {

    enviar() {
        console.log(
            "Enviando pedido"
        );
    }
}



//
class CheckoutFacade {

    constructor() {

        this.estoque =
            new Estoque();

        this.pedido =
        new Pedido();

        this.pagamento =
            new Pagamento();

        this.notaFiscal =
            new NotaFiscal();

        this.email =
            new Email();
    }

    finalizarCompra() {

        this.estoque.verificar();

        this.pedido.enviar();

        this.pagamento.processar();

        this.notaFiscal.processar();

        this.email.enviar();
    }
}


const pagamento = new CheckoutFacade(); 
pagamento.finalizarCompra()
