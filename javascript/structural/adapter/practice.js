//biblioteca
//Adaptee
class MaisPDF{

    gerarPdf(nome){
        console.log(nome + " - Pdf gerado com sucesso!")
    }
}



//nova biblioteca para pdf
//Adaptee
class PdfGratis{

    formatarPdf(nome){
        console.log(nome + " - Pdf gerado com sucesso!")
    }
}



//adapter
class MaisPDFAdapter{
    
    constructor(lib){
        this.biblioteca = lib
    }

    gerar(nome){
        this.biblioteca.gerarPdf(nome)
    }
}


//Adapter
class PdfGratisAdapter{
    
    constructor(lib){
        this.biblioteca = lib
    }

    gerar(nome){
        this.biblioteca.formatarPdf(nome)
    }
}



//Cliente
class Cliente{
    constructor(adapter){
        this.adapter = adapter
    }
    
    gerar(valor){
        this.adapter.gerar(valor)
    }
}




//código cliente

const maispdf = new MaisPDFAdapter(new MaisPDF);
const pdfgratis = new PdfGratisAdapter(new PdfGratis);


let pdf = new Cliente(maispdf)
pdf.gerar("Predo")


pdf =  new Cliente(pdfgratis)
pdf.gerar("Maria Betania")























