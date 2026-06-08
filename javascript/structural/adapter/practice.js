//biblioteca
class maisPDF{

    gerarPdf(nome){
        console.log(nome + " - Pdf gerado com sucesso!")
    }
}



//nova biblioteca para pdf
class pdfGratis{

    formatarPdf(nome){
        console.log(nome + " - Pdf gerado com sucesso!")
    }
}



//adapter
class maisPDFAdapter{
    
    constructor(lib){
        this.biblioteca = lib
    }

    gerar(nome){
        this.biblioteca.gerarPdf(nome)
    }
}


//Adapter
class pdfGratisAdapter{
    
    constructor(lib){
        this.biblioteca = lib
    }

    gerar(nome){
        this.biblioteca.formatarPdf(nome)
    }
}



//adaptee
class adaptee{
    constructor(adapter){
        this.adapter = adapter
    }
    
    gerar(valor){
        this.adapter.gerar(valor)
    }
}




//código cliente

const maispdf = new maisPDFAdapter(new maisPDF);
const pdfgratis = new pdfGratisAdapter(new pdfGratis);


let pdf = new adaptee(maispdf)
pdf.gerar("Predo")


pdf =  new adaptee(pdfgratis)
pdf.gerar("Maria Betania")























