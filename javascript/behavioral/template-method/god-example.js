class Exportador {

  // TEMPLATE METHOD
  static exportar() {

    this.buscarDados();

    this.formatar();

    this.salvarArquivo();
  }

  static buscarDados() {
    console.log("Buscar dados");
  }

  static salvarArquivo() {
    console.log("Salvar arquivo");
  }
  
  
  static formatar() {
    throw new Error(
      "formatar() deve ser implementado"
    );
  }
}




class ExportadorPDF extends Exportador {

  static formatar() {
    console.log("Formatar PDF");
  }
}


class ExportadorCSV extends Exportador {

  static formatar() {
    console.log("Formatar CSV");
  }
}



ExportadorPDF.exportar();

console.log("");

ExportadorCSV.exportar();