"use strict";

//tipos de funções.
// função declarativa
// deve ser declarada usando a palavra reservada function seguida do nome da funçao, parênteses "()" e chaves "{}"
// deve ser nomeada obrigatioriamente

/*
function nomeDaFunção(){
    alert('Sou uma função declarativa!');
}
*/
//devemos chamar a função para ver o resultado.
//chamando a função
//nomeDaFunção();
// expressão de função
// são funções atribuídas à expressões
// a nomeação é opcional
//com nomeação
var função = function função() {
  alert('SOU UMA EXPRESSÃO DE FUNÇÃO NOMEADA!');
}; //SEM NOMEAÇÃO


var função = function funO() {
  alert('Sou uma expressão de uma função não nomeada! ');
}; // arrow Function
// função de expressão de sintaxe curta
// sempre anônima, não pode ser nomeada
// deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"


var função = function funO() {
  alert('sou uma função anônima!');
};

função();