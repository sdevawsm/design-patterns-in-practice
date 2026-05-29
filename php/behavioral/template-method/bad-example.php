<?php

class ExportadorPDF
{
    public function exportar()
    {
        echo "Buscar dados\n";
        echo "Formatar PDF\n";
        echo "Salvar arquivo\n";
    }
}

class ExportadorCSV
{
    public function exportar()
    {
        echo "Buscar dados\n";
        echo "Formatar CSV\n";
        echo "Salvar arquivo\n";
    }
}

$pdf = new ExportadorPDF();
$pdf->exportar();

echo PHP_EOL;

$csv = new ExportadorCSV();
$csv->exportar();