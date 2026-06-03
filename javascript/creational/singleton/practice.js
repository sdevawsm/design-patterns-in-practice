// ===============================
// REQUEST
// ===============================

class Request {

    constructor(uri) {
        this.uri = new URL(uri);
    }
}


// ===============================
// RESPONSE
// ===============================

class Response {

    response = [
        { nome: 'pedro' },
        { nome: 'maria' }
    ];

    returnResponse() {
        return this.response;
    }
}


// ===============================
// MIDDLEWARE
// ===============================

class Middleware {

    constructor(app) {
        this.app = app;
    }

    podeRetornar() {

        const url = this.app.request.uri;

        const name = url.searchParams.get('name');
        const admin = url.searchParams.get('admin');

        console.log(`Usuário: ${name}`);

        if (admin === 'true') {
            return this.app.response.returnResponse();
        }

        return false;
    }
}


// ===============================
// SINGLETON APP
// ===============================

class App {

    static instance = null;

    constructor() {

        if (App.instance) {
            return App.instance;
        }

        this.request = new Request(
            'https://pedro.com/api?name=pedro&admin=true'
        );

        this.response = new Response();

        App.instance = this;
    }

    static getInstance() {

        if (!App.instance) {
            App.instance = new App();
        }

        return App.instance;
    }
}


// ===============================
// USO
// ===============================

const app = App.getInstance();

const middleware = new Middleware(app);

const resultado = middleware.podeRetornar();

console.log(resultado);


// ===============================
// TESTE DO SINGLETON
// ===============================

const app1 = App.getInstance();
const app2 = App.getInstance();



console.log( app1.request );

console.log( app2.request );




// console.log(
//     'Mesma instância?',
//     app1 === app2
// );