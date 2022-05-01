       /*  // tipos primitivos
         boolean */
        var boolean = false;
console.log(`A variável ${boolean} tem o tipo ${typeof (boolean)}`);
        

//number
var numero = 1;
console.log('A variável ${boolean} tem o tipo ${typeof(numero)}');

// String
var nome = 'Carlos';
console.log('A variável ${nome} tem o tipo${typeof(nome)}');

//function 
var função = function () { };
console.log('A variável ${função}tem o tipo ${typeof(nome)}');

//como declarar

var ;//VARIÁVEL GLOBAL OU LOCAL -VALOR INICIAL NULO
let;//VARIÁVEL LOCAL DE BLOCO-VALOR INICIAL NULO
const ;//VALOR INICIAL OBRIGATÓRIO '*/

//USANDO VAR GLOBAL
/* var nome='Carlos'*/
var nome = 'Carlos';

//usando var local

 function nomeDaFuncao() {
     var sobrenome = 'Carlos';
     console.log(sobrenome);
 }

 console.log(nome);
 nomeDaFuncao();


// as propriedades de var se aplicam a let, mas por convenção usamos let no escopo local.

/* //usando const
    const constante ='constante';
/o valor não pode ser alterado; */

/* // atribuição*/

//var atribuicão='Carlos';//

//comparação
var comparação = "0" == 0;
console.log(comparação);

//comparação identica//
var comparaçãoidentica = "0" === 0;
console.log(comparaçãoidentica);

/* //OPERADORES ARITIMÉTICOS
ADIÇÃO */
var adição = 4 + 4;
console.log(adição);

