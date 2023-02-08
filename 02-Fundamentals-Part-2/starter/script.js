/*
Activating Strict Mode
*/
'use strict'; //tem que ser a primeira coisa a ser declarada, senao nao funciona (comentarios nao contam)

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D')

//const interface = 'Audio'; //o strict mode mostra que a palavra 'interface' sera uma palavra restrita no futuro


/*
LECTURE: Functions

codigo:


function logger() {
    console.log('My name is Gustavo');
}

//calling, running or invoking the function 
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/

/*
LECTURE: Function Declarations vs. Expressions

codigo:
*/

//function declaration -> podemos usar elas mesmo antes de sua declaracao 
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1997);
console.log(age1);


//function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}

const age2 = calcAge2(1997);
console.log(age1, age2);

/*
LECTURE: Arrow Functions

codigo:
*/

//Arrow function
const calcAge3 = birthYear => 2037 - birthYear
//parametro => o que a funcao vai retornar

const age3 = calcAge3(1997);
console.log(age3);

const anosAteAposentar = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const aposentadoria = 65 - age;
    //return aposentadoria;
    return `${firstName} aposenta em ${aposentadoria} anos.`;
}

console.log(anosAteAposentar(1997, 'Gustavo'));



/*
LECTURE: Functions Calling Other Functions

codigo:
*/

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
    return juice;
}

console.log(fruitProcessor(2, 3));


/*
LECTURE: Introduction to Arrays

codigo:
*/

const friends = ['Michael', 'Steven', 'Peter']; //declaracao de uma array
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020); //outra forma de declarar uma array
console.log(friends[0]);
console.log(friends[2]);
console.log(friends.length)
console.log(friends[friends.length - 1]);
friends[2] = 'Jay';
console.log(friends);

const primeiroNome = 'Gustavo';
const gustavo = [primeiroNome, 'Achcar', 2022 - 1997, 'estudante', friends];
console.log(gustavo);


//Exercise
const calcAge4 = function (birthYear) {
    return 2037 - birthYear;
}
const anos = [1990, 1967, 2002, 2010, 2018];
const ano1 = calcAge4(anos[0]);
const ano2 = calcAge4(anos[1]);
const ano3 = calcAge4(anos[anos.length - 1]);
console.log(ano1, ano2, ano3);

const idades = [calcAge4(anos[0]), calcAge4(anos[1]), calcAge4(anos[anos.length - 1])];
console.log(idades);


/*
LECTURE: Basic Array Operations (Methods)

- em array, a ordem dos valores colocados importam


codigo:
*/

//adicionando elementos 
const amigos = ['Michael', 'Steven', 'Peter'];
amigos.push('Jay'); //adiciona um elemento no final da array
console.log(amigos);

amigos.unshift('John'); //adiciona um elemento no inicio da array
console.log(amigos);

//removendo elementos
amigos.pop(); //remove o ultimo elemento da array
const removido = amigos.pop(); //mostra o elemento removido
console.log(removido);
console.log(amigos);

amigos.shift(); //remove o primeiro elemento da array
const primeiroRemovido = amigos.shift(); //mostra o elemento removido
console.log(amigos);

console.log(amigos.indexOf('Steven')); //retorna a posicao que o elemento citado esta

console.log(amigos.includes('Steven')); //retorna true se o elemento estiver na array ou false caso contrario
console.log(amigos.includes('Bob')); //usa a igualdade estrita(de mesmos tipos) e nao igualdade de coercao (que funciona para tipos diferentes)

if (amigos.includes('Steven')) {
    console.log('You have a friend called Steven');
}


/*
LECTURE: Introduction to Objects
LECTURE: Dot vs. Bracket Notation

-em objetos, a ordem dos valores declarados nao importam quando queremos recupera-los

-Dot Notation: usado quando ja sabe o nome final da propriedade

-Bracket Notation: usado quando precisamos calcular o nome da propriedade
codigo:
*/

const jonas = {
    nome1: 'Jonas',
    nome2: 'Achcar',
    idade: 2037 - 1991,
    profissao: 'teacher',
    amigo: ['Michael', 'Peter', 'Steven']
}; //constante jonas tem 5 propriedades

console.log(jonas);

console.log(jonas.nome2);
console.log(jonas['nome2']); //a vantagem do bracket notation eh que podemos colocar expressoes dentro do colchetes

const nameKey = 'nome';
console.log(jonas[nameKey + '1']);
console.log(jonas[nameKey + '2']);

const interestedIn = prompt('What do you want to know about Jonas? Choose between, nome1, nome2, idade, profissao e amigo');

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between, nome1, nome2, idade, profissao e amigo');
}

jonas.cidade = 'Uberlandia';
jonas['twitter'] = '@guachcarf';
console.log(jonas);


//Challenge
console.log(`${jonas.nome1} tem ${jonas.amigo.length} amigos, e seu melhor amigo se chama ${jonas.amigo[0]}`);


/*
LECTURE: Object Methods

codigo:
*/

const jonas1 = {
    nome1: 'Jonas',
    nome2: 'Achcar',
    anoNasc: 1991,
    profissao: 'teacher',
    amigo: ['Michael', 'Peter', 'Steven'],
    temCNH: true,


    /*
    calcAge1: function (birthYear) {
        return 2037 - birthYear;
    },
    */

    /*
    calcAge2: function () {
        console.log(this);
        return 2037 - this.anoNasc;
    },
    */

    calcAge3: function () {
        this.idade1 = 2037 - this.anoNasc;
        return this.idade1;
    },

    getSummary: function () {
        return `${this.nome1} is a ${this.calcAge3()}-year old ${jonas1.profissao}, and he has ${this.temCNH ? 'a' : 'no'} driver's license.`
    }

};

//console.log(jonas1.calcAge2());
//console.log(jonas1['calcAge1'](anoNasc));
console.log(jonas1.calcAge3());
console.log(jonas1.getSummary());



/*
LECTURE: Iteration: The for Loop

codigo:
*/

for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}


/*
LECTURE: Looping Arrays, Breaking and Continuing


-continue: encerra a iteracao atual do loop e comeca a proxima imediatamente

-break: interrompe o loop completamente

codigo:
*/

const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = []; //empty array

for (let i = 0; i < jonasArray.length; i++) {
    //Reading from jonasArray
    console.log(jonasArray[i], typeof jonasArray[i]);
    //Filling types array
    //types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);

}

console.log(types);

const year = [1991, 2007, 1969, 2020];
const ages1 = [];

for (let i = 0; i < year.length; i++) {
    ages1.push(2037 - year[i]);
}

console.log(ages1);


//continue and break
console.log('---- ONLY STRINGS ----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] !== 'string') continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}

console.log('---- BREAK WITH NUMBER ----')
for (let i = 0; i < jonasArray.length; i++) {
    if (typeof jonasArray[i] === 'number') break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


/*
LECTURE: Looping Backwards and Loops in Loops

codigo: 
*/

const jonasArray1 = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

for (let i = jonasArray1.length - 1; i >= 0; i--) {
    console.log(jonasArray1[i]);
}


for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`---- Starting exercise ${exercise} ----`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}


/*
LECTURE: The while Loop

codigo:
*/
console.log('---- FOR LOOP ----')
for (let i = 1; i <= 10; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

console.log('____ WHILE LOOP ____')
let i = 1;
while (i <= 10) {
    console.log(`Lifting weights repetition ${i}`);
    i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice != 6) {
    console.log(`You rolled a ${dice}`);
}