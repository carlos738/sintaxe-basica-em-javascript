//tipos primitivos
//boolean
var boolean = false;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

//number
var numero = 3;
console.log(`A variavel ${numero} tem o tipo ${typeof(numero)} `);

//string
 var nome = 'Maria';
 console.log(`A variável ${nome } tem o tipo ${typeof(nome)}`);

 //function
 var função = function(){} ;
 console.log(`A variável ${função} tem o tipo ${typeof(funçao)}`);

//como declarar
//var;  variável global ou local - valor inicial nulo

//let; // variavel local de bloco - valor inicial nulo

//const; // variável local de bloco - valor inicial obrigatório */


// usando var global
var nome = 'carlos';
var nome = 'Carlos';


// usando var local
function nomeDaFunção(){
    var sobrenome = 'Pires';
    console.log(sobrenome);
}
console.log(nome);
nomeDaFunção();
 // as propriedades de var se aplicam a let, mas por convenção usamos let no escopo local
  //usando const 
const constante = 'constante';
//valor nao pode ser alterado;



         // atribuição
        var atribuicao = 'diana';

        // comparação
        var comparacao = "0" == 0;
        console.log(comparacao);

        // comparação identica
        var comparacaoIdentica = "0" === 0;
        console.log(comparacaoIdentica); 

        // operadores aritiméticos
        // Adição
        var adição = 574745 + 845;
        console.log(adição);

        //subtração
        var subtração = 4949558-8887766;
        console.log(subtração);

        //multiplicação
        var multiplicação = 3343 * 8447;
        console.log(multiplicação);

        //divisão real
        var divisãoReal = 32 / 8;
        console.log(divisãoReal);

        //divisão inteira
        var divisãoInteira = 78 % 5;
        console.log(divisãoInteira);

        //potenciação
        var potenciação = 43**10;
        console.log(potenciação);

        //OPERADORES RELACIONAIS
        //MAIOR QUE
        var maiorQue = 76 > 54;
        console.log(maiorQue);

        //menor que
        var menorQue = 4 < 9;
        console.log(menorQue);

        //maior ou igual a
        var maiorOuIgual = 43 >= 21;
        console.log(maiorOuIgual);

        // menor ou igual a
        var menorOuIgual = 54 <= 21;
        console.log(menorOuIgual);

        //operadores lógicos
        // && - todos os valores devem ser true
        var e = true && true;
        console.log(e);

        //- || Somente um valor deve ser true 
        var ou = true || false;
        console.log(ou);

        //- ! inverte os valores
        var não = !true;
        console.log(não);






