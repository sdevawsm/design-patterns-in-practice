class Computador {

    constructor(builder) {

        this.processador = builder.processador;
        this.memoria = builder.memoria;
        this.ssd = builder.ssd;
        this.gpu = builder.gpu;
        this.fonte = builder.fonte;
        this.gabinete = builder.gabinete;
        this.waterCooler = builder.waterCooler;
    }
}



class ComputadorBuilder {

    setProcessador(valor) {
        this.processador = valor;
        return this;
    }

    setMemoria(valor) {
        this.memoria = valor;
        return this;
    }

    setSSD(valor) {
        this.ssd = valor;
        return this;
    }

    setGPU(valor) {
        this.gpu = valor;
        return this;
    }

    setFonte(valor) {
        this.fonte = valor;
        return this;
    }

    setGabinete(valor) {
        this.gabinete = valor;
        return this;
    }

    setWaterCooler(valor) {
        this.waterCooler = valor;
        return this;
    }

    build() {

        if (!this.processador) {
            throw new Error(
                "Processador é obrigatório"
            );
        }

        if (!this.memoria) {
            throw new Error(
                "Memória é obrigatória"
            );
        }

        return new Computador(this);
    }
}


const pc = new ComputadorBuilder()

    .setProcessador("Ryzen 9")

    .setMemoria("32GB")

    .setSSD("1TB")

    .setGPU("RTX 5090")

    .setFonte("1000W")

    .setGabinete("Corsair")

    .setWaterCooler(true)

    .build();

console.log(pc);