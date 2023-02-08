/*
LECTURE: Values and Variables
*/
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let myCurrentJob = "Programmer"; //por convencao, os nomes de variaveis sao as mais descritivas possiveis e a primeira palavra comeca em minuscula e as outras comecam em maiuscula.
let myFirstJob = "Caixa";

console.log("Current job:", myCurrentJob);
console.log("First job:", myFirstJob);




/*
LECTURE: Data Types

>>Tipos de dados

1. number: numeros de ponto flutuante => usado para decimais e inteiros
//OBS: let age = 23; => essa variavel 23 eh igual a 23.0 (soh nao aparece, mas 23 tem ponto flutuante), fazem tudo parte do tipo Number

2.string: sequencia de caracteres => usado para textos
ex: let firstName = 'Jonas'; (nao importa se eh aspas simples ou duplas)

3.boolean: true ou false => usado para tomar decisoes
ex: let fullAge = true;

4.undefined: valor assumido por uma variavel definida com valor vazio
ex: let children;
Declarei a variavel mas nao defini um valor pra ela
Nesse caso, o valor de children = undefined e o tipo da variavel children = undefined

5.null: tambem significa valor vazio, mas usada em outras circunstancias

6.symbol: valor que eh unico e nao pode ser mudado(ainda nao sera comentado)


>> JavaScript possui um recurso de tipagem dinamica, que significa que quando criamos uma nova variavel, nao eh necessario que definir manualmente o tipo dela.

>>typeof: operador que mostra o tipo de um valor

>>a primeira vez que declaramos uma variavel, precisamos usar "let", mas quando vamos alterar essa variavel ja criada, nao eh necessario usar "let"

>>Ha um bug no JavaScript que mostra o tipo de null = object, mas isso eh apenas um bug

>>codigo:
*/
let javascriptIsFun = true; //o valor que contem o tipo de dado e nao a variavel
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);

javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun);

let year; //variavel do tipo undefined
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

/*
LECTURE: let, const e var

>>let: eh usado quando precisamos mudar a variavel (na primeira vez que a variavel eh declarada, usa-se o let, depois quando formos muda-la, nao se usa o let) ou quando declaramos variaveis vazias
    ex de mudanca de variavel:
        let age = 30;
        age = 31;
    ex de variavel vazia:
        let year;  (variavel vazia/sem valor)
        year = 1991; (mudanca da variavel)
 
        
>>const: usado para declarar variaveis que nao devem mudar. 
OBS: nao da para declarar uma variavel const vazia (ex: const year;)
    ex:
        const birthYear = 1991;
        birthYear = 1990; (se tentar mudar a const igual esse exemplo, dara um erro)


>>var: metodo antigo de se declarar uma variavel. Funciona praticamente igual ao let (nao se deve usar o var)
*/


/*
LECTURE: Basic Operators

>>Tipos de operadores
    - o operador + serve para somar numeros e concatenar strings
*/
//codigo:

//math operators
const now = 2026;
let ageGustavo = now - 1997;
let ageGiovana = now - 1979;
console.log("My age in 2026:", ageGustavo, "My mon's age in 2026:", ageGiovana);
console.log("My age * 2:", ageGustavo * 2);

const fstName = 'Gustavo';
const secondName = 'Achcar';
console.log(firstName + " " + secondName);


//assignment operators
let x = 10 + 5;
x += 10; //x = x + 10 
x *= 4; //x = x * 4
x++; //x = x + 1
x--; //x = x - 1
console.log(x);


//comparison operators = retornam valores booleanos
console.log(ageGustavo > ageGiovana); // >, <, >=, <=
console.log(ageGiovana >= 18);

const isFullAge = ageGustavo >= 18;

console.log(now - 1991 > now - 2018)
const averageAge = (ageGiovana + ageGustavo) / 2;
console.log(ageGiovana, ageGustavo, averageAge);

/*
LECTURE: Strings and Template Literals

codigo:
*/

const primeiroNome = 'Gustavo';
const trabalho = 'Programador';
const anoNasc = 1997;
const ano = 2037;

const gustavo = "Eu sou o " + primeiroNome + ", um " + trabalho + " de " + (ano - anoNasc) + " anos.";

console.log(gustavo);

const gustavoNovo = `Eu sou o ${primeiroNome}, um ${trabalho} de ${ano - anoNasc} anos.`;
console.log(gustavoNovo);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple
lines`);


/*
LECTURE: Taking Decisions: if / else Statements

codigo:
*/

const idade = 15;


if (idade >= 18) {
    console.log("Sarah pode comecar a tirar CNH");
}
else {
    const anosFaltando = 18 - idade;
    console.log(`Sarah eh muito nova. Espere mais ${anosFaltando} anos para poder tirar a CNH :)`);
}

const nascAno = 1997;
let century;
if (nascAno <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);


/*
LECTURE: Type Conversion and Coercion

codigo:
*/

//type conversion
const inputYear = '1997';
console.log(Number(inputYear)) //convertendo string em numero
console.log(inputYear + 18);
console.log(Number(inputYear) - 18);

console.log(Number('Gustavo')); //nao tem como fazer a conversao, por isso aparece NaN(not a number) no console do site

console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old'); //sempre que houver uma operacao entre uma string e um numero, o numero sera convertido para uma string

console.log('23' - '10' - 3); //com o operador -(menos) ocorre o oposto: as strings sao convertidas em numeros -> resultado = 10
console.log('23' + '10' + 3); //resultado = 23103
console.log('23' * '2') //resultado = 46 -> ou seja, o operador *(multiplicacao) tambem converte string em numero
console.log('23' / '2'); //resultado = 11.5 -> ou seja, o operador /(divisao) tambem converte string em numero

let n = '1' + 1; //n = string = '11'
n = n - 1; //n = number = 10
console.log(n); //tipo do n fica como number


/*
LECTURE: Truthy and Falsy Values

5 falsy values: 
    1- 0;
    2- '' (string vazia);
    3- undefined; 
    4- null; 
    5- NaN;
    OBS: Se esses valores forem convertidos para boolean, se tornam falsos

codigo:
*/

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Gustavo'));
console.log(Boolean({})); //{} = objeto vazio
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all :)");
}
else {
    console.log("You should get a job!");
}


/*
LECTURE: Equality Operators: == vs ===

    = -> atribuicao de valores

    == -> comparacao de valores, chamado de operador de igualdade flexivel, pois faz a coercao de tipos, ou seja, funciona quando os valores possuem tipos diferentes
        ex: '18' == 18
            true

    === -> comparacao de valores, chamado de operador de igualdade estrita, pois nao faz a coercao de tipos, ou seja, funciona apenas quando os dois valores possuem o mesmo tipo
        ex: 18 === 18
            true

            '18' === 18
            false

OBS: Evitar o operador de igualdade flexivel o maximo possivel, pois causa bugs. Essa eh uma das regras de boas praticas para se fazer um codigo limpo

codigo:
*/

const age = 18;
if (age === 18) //=== retorna um valor booleano
{
    console.log("You just became an adult :D (strict/estrito)");
}

if (age == '18') console.log("You just became an adult :D (loose/flexivel)");

const favourite = Number(prompt("What's your favourite number ?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 18) {
    console.log("Cool! 18 is an amazing number!");
}
else if (favourite === 7) {
    console.log("7 is also a cool number")
}
else {
    console.log("Number is not 18 or 7");
}

if (favourite !== 18) console.log("Why not 18?");


/*
LECTURE: Logical Operators

->Operators: 
    Not: !
    And: && 
    Or: ||

codigo:
*/

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
    console.log("You are able to drive");
}
else {
    console.log("Someone else should drive");
}


/*
LECTURE: The Switch Statement


codigo:
*/

const day = 'monday';

switch (day) {
    case 'monday': // compara day com 'monday' -> day === monday? Se sim, executa os codigos abaixo
        console.log('Study JavaScript');
        console.log('Study C');
        break;
    case 'tuesday':
        console.log('Study Python');
        break;
    case 'wednesday': //executa caso for algum dos dois valores
    case 'thursday':
        console.log('Study HTML');
        break;
    case 'friday':
        console.log('Study CSS');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend!');
        break;
    default:
        console.log('Not a valid day');
}

//fazendo esse switch com if/else:

if (day === 'monday') {
    console.log('Study JavaScript');
    console.log('Study C');
}
else if (day === 'tuesday') {
    console.log('Study Python');
}
else if (day === 'wednesday' || day == 'thursday') {
    console.log('Study HTML');
}
else if (day === 'friday') {
    console.log('Study CSS');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend!');
}
else {
    console.log('Not a valid day');
}


/*
LECTURE: The Conditional (Ternary) Operator


codigo:
*/

const years = 23;
years >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water') //se years >= 18 for true: executa o primeiro console.log, senao executa o segundo

const drink = years >= 18 ? 'wine' : 'water';
console.log(drink);

console.log(`I like to drink ${years >= 18 ? 'wine' : 'water'}`);