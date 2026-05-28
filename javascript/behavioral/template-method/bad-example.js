 

class ExportadorPDF
{
    exportar()
    {
        console.log("Buscar dados\n");
        console.log("Formatar PDF\n");
        console.log("Salvar arquivo\n") ;
    }
}

class ExportadorCSV
{
    exportar()
    {
        console.log("Buscar dados\n");
        console.log("Formatar CSV\n");
        console.log("Salvar arquivo\n");
    }
}

let pdf = new ExportadorPDF();
pdf.exportar();

console.log("\n");

let csv = new ExportadorCSV();
csv.exportar();