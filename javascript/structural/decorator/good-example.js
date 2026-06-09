//Component
class Cafe {

    custo() {
        throw new Error(
            "Método não implementado"
        );
    }
}



//comportamentos
class CafeSimples extends Cafe {

    custo() {
        return 5;
    }
}



//Decorator  ou oprimeiro comportamento 
class CafeDecorator extends Cafe {

    constructor(cafe) {

        super();

        this.cafe = cafe;
    }

    custo() {

        let cafe = this.cafe.custo();

        return cafe + 2;
    }
}


//segundo comportamento
class CafeComLeiteDecorator extends CafeDecorator {

    constructor(cafe) {

        super();

        this.cafe = cafe;
    }

    custo() {

        let cafe = this.cafe.custo();

        return cafe + 3 ;
    }
}




let cafe = new CafeSimples()

cafe =  new CafeDecorator( cafe  ) //retorna 7

cafe =  new CafeComLeiteDecorator( cafe  )

console.log( cafe.custo() )
