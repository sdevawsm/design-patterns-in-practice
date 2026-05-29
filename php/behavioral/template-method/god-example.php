<?php

abstract class Exportador
{
    // TEMPLATE METHOD
    public function exportar()
    {
        $this->buscarDados();

        $this->formatar();

        $this->salvarArquivo();
    }

    private function buscarDados()
    {
        echo "Buscar dados\n";
    }

    abstract protected function formatar();

    private function salvarArquivo()
    {
        echo "Salvar arquivo\n";
    }
}




class ExportadorPDF extends Exportador
{
    protected function formatar()
    {
        echo "Formatar PDF\n";
    }
}


 

class ExportadorCSV extends Exportador
{
    protected function formatar()
    {
        echo "Formatar CSV\n";
    }
}


 

$pdf = new ExportadorPDF();

$pdf->exportar();

echo PHP_EOL;

$csv = new ExportadorCSV();

$csv->exportar();