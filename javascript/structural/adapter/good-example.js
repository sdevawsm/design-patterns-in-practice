
//Adaptee
class MercadoPago { 
    makePayment(valor) {
        //consulta api do banco
        //consulta api do cartão de crédito

        console.log(
            `MercadoPago: ${valor}`
        );
    }
}

//Adaptee
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


//Dois adaptadores 

//Adapter
class MercadoPagoAdapter {
    constructor(gateway) {
        this.gateway = gateway;
    }

    sendPayment(valor) {
        this.gateway.makePayment(valor);
    }
}

//Adapter
class PayPalAdapter {
    constructor(gateway) {
        this.gateway = gateway;
    }
    sendPayment(valor) {
        this.gateway.sendPayment(valor);
    }
}



//Target
class Checkout {

    constructor(gatewayAdpter) {
        this.gateway = gateway;
    }

    finalizar(valor) {
        this.gateway.sendPayment(valor);    
    }
}






const mercadoPagoGatewayAdapter = new MercadoPagoAdapter(new MercadoPago());
const paypalGateway = new PayPalAdapter(new PayPal());


let checkout  = new Checkout( mercadoPagoGatewayAdapter);
checkout.finalizar(100);

checkout = new Checkout(paypalGateway);
checkout.finalizar(200);