class Cafe {

    custo() {
        return 5;
    }
}


class CafeComLeite
    extends Cafe {

    custo() {
        return 7;
    }
}

class CafeComLeiteEChocolate
    extends Cafe {

    custo() {
        return 10;
    }
}



const precoCafe =  new CafeComLeite();

console.log( precoCafe.custo()  )