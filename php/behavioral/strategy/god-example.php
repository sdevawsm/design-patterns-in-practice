<?php

//Contrato que as estratégias devem seguir
interface FreteStrategy
{
    public function calcular(float $peso): float;
}

//Implementação da estratégia para SEDEX
class SedexStrategy implements FreteStrategy
{
    public function calcular(float $peso): float
    {
        return $peso * 2;
    }
}

//Implementação da estratégia para PAC
class PacStrategy implements FreteStrategy
{
    public function calcular(float $peso): float
    {
        return $peso * 1.5;
    }
}

//Implementação da estratégia para RETIRADA
class RetiradaStrategy implements FreteStrategy
{
    public function calcular(float $peso): float
    {
        return 0;
    }
}



//Contexto que utiliza a estratégia
class CalculadoraFrete
{
    private FreteStrategy $strategy;

    public function __construct(FreteStrategy $strategy)
    {
        $this->strategy = $strategy;
    }

    public function calcular(float $peso): float
    {
        return $this->strategy->calcular($peso);
    }
}




///usando as estratégias

// SEDEX
$sedex = new CalculadoraFrete(
    new SedexStrategy()
);

echo "SEDEX: ";
echo $sedex->calcular(10);
echo PHP_EOL;


// PAC
$pac = new CalculadoraFrete(
    new PacStrategy()
);

echo "PAC: ";
echo $pac->calcular(10);
echo PHP_EOL;


// RETIRADA
$retirada = new CalculadoraFrete(
    new RetiradaStrategy()
);

echo "RETIRADA: ";
echo $retirada->calcular(10);
echo PHP_EOL;