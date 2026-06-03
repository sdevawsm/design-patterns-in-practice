// class Carro{
//     constructor(marca, modelo, ano, cor){
//         this.marca = marca;
//         this.modelo = modelo;
//         this.ano = ano;
//         this.cor = cor;
//     }
// }



// const carro1 = new Carro(
//     "Toyota", 
//     "Corolla", 
//     2020, 
//     "Prata"
// );

// console.log(carro1);



class Carro{
    constructor(builder){
        this.marca = builder.marca;
        this.modelo = builder.modelo;
        this.ano = builder.ano;
        this.cor = builder.cor;
    }
}


class CarroBuilder{
    setMarca(valor){
        this.marca = valor;
        return this;
    }

    setModelo(valor){
        this.modelo = valor;
        return this;
    }

    setAno(valor){
        this.ano = valor;
        return this;
    }

    setCor(valor){
        this.cor = valor;
        return this;
    }

    build(){
        return new Carro(this);
    }
}   


const carro1 = new CarroBuilder()
    .setMarca("Toyota")
    .setModelo("Corolla")
    .setAno(2020)
    .setCor("Prata")
    .build(); //Cria a instancia do carro e envia os valores

console.log(carro1);