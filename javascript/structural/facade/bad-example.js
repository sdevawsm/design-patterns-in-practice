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




class Strategy {
    constructor(estoque, pagamento, email, notaFiscal, pedido) {
        this.estoque = estoque;
        this.pagamento = pagamento;
        this.email = email;
        this.notaFiscal = notaFiscal;
        this.pedido = pedido;
    }

    processarPedido() {
        this.estoque.verificar();
        this.pagamento.processar();
        this.notaFiscal.processar();
        this.pedido.enviar();
        this.email.enviar();
    }
}


//Esse é o cliente

const estoque = new Estoque();
const pagamento = new Pagamento();
const email = new Email();
const notaFiscal = new NotaFiscal();
const pedido = new Pedido();

const strategy = new Strategy(estoque, pagamento, email, notaFiscal, pedido);
    
strategy.processarPedido();