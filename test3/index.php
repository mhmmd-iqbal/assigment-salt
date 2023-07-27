<?php
/*
Human race has method “SharedPower” where “Genki” will always return 10
Namekian race have method “Power” where the “Genki” will be Random (1-10) * 10 + 100
Saiyan race have 2 power where there method “NormalPower” will be random (1 - 10) * 10 + 100
and method “SaiyanPower” will be random (1 -10) * 10 + 500
*/

// Define the RaceInterface
interface RaceInterface
{
    public function genki(): int;
}

class Human implements RaceInterface
{
    public function genki(): int
    {
        return 10;
    }

    public function sharedPower(): int
    {
        return $this->genki();
    }
}

class Namekian implements RaceInterface
{
    public function genki(): int
    {
        return rand(1, 10) * 10 + 100;
    }

    public function power(): int
    {
        return $this->genki();
    }
}

class Saiyan implements RaceInterface
{
    public function genki(): int
    {
        return rand(1, 10) * 10 + 100;
    }

    public function normalPower(): int
    {
        return $this->genki();
    }

    public function saiyanPower(): int
    {
        return rand(1, 10) * 10 + 500;
    }
}

// Create instances of each race
$gohan = new Saiyan();
$picollo = new Namekian();
$krilin = new Human();
$vegeta = new Saiyan();

// Test the methods for each race
echo "Gohan Genki is: " . $gohan->genki() . " (Gohan is Saiyan race)<br/>" . PHP_EOL;
echo "Picollo Genki is: " . $picollo->genki() . " (Picollo is Namekian race)<br/>" . PHP_EOL;
echo "Krilin Genki is: " . $krilin->genki() . " (Krillin is Human race)<br/>" . PHP_EOL;
echo "Vegeta Genki is: " . $vegeta->genki() . " (Vegeta is Saiyan race)<br/>" . PHP_EOL;
