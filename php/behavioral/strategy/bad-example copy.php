<?php

class Frete
{
    public function calcular($tipo, $peso)
    {
        if ($tipo === 'sedex') {
            return $peso * 2;
        }

        if ($tipo === 'pac') {
            return $peso * 1.5;
        }

        if ($tipo === 'retirada') {
            return 0;
        }

        throw new Exception("Tipo inválido");
    }
}

$frete = new Frete();

echo "SEDEX: ";
echo $frete->calcular('sedex', 10);
echo PHP_EOL;

echo "PAC: ";
echo $frete->calcular('pac', 10);
echo PHP_EOL;

echo "RETIRADA: ";
echo $frete->calcular('retirada', 10);
echo PHP_EOL;