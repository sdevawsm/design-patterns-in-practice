class Computador {

    constructor(
        processador,
        memoria,
        ssd,
        gpu,
        fonte,
        gabinete,
        waterCooler
    ) {
        this.processador = processador;
        this.memoria = memoria;
        this.ssd = ssd;
        this.gpu = gpu;
        this.fonte = fonte;
        this.gabinete = gabinete;
        this.waterCooler = waterCooler;
    }
}



const pc = new Computador(
    "Ryzen 9",
    "32GB",
    "1TB",
    "RTX 5090",
    "1000W",
    "Corsair",
    true
);

console.log(pc);