class MercadoPago {

    makePayment(valor) {

        //consulta api do banco
        //consulta api do cartão de crédito

        console.log(
            `MercadoPago: ${valor}`
        );
    }
}




class PayPal {

    sendPayment(valor) {

        //consulya api do govero
        //consulta api do banco
        //consulta api do cartão de crédito
        //acessa algum banco de dados
        //faz um monte de coisa

        console.log(
            `PayPal: ${valor}`
        );
    }
}


// class Checkout {

//     finalizar(valor) {

//         const gateway =
//             new MercadoPago();

//         gateway.makePayment(valor);
//     }
// }

class Checkout {

    constructor(gateway) {
        this.gateway = gateway;
     
    }

    finalizar(valor) {

       this.gateway.finalizar(valor)
    }
}





const checkout = new Checkout(new MercadoPago());
checkout.finalizar(100.00, "MercadoPago")


const checkout = new Checkout(new PayPal());
checkout.finalizar(100.00, "PayPal")


