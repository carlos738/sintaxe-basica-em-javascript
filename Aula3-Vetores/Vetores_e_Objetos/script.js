//O QUE SÃO VETORES OU ARRAYS

/*//COMO DECLARAR UM ARRAY
*/
/*
 let array=['string',1,true];
deve ser declarado entre colchetes "[]";
console.log(array);*/

//como um array pode guardar diferentes valores
//inclusive outros arrays.
let array = ['string', 1, true, ['array1'], ['array2'], ['array4']];

/*//como acessar o indice de um array*/
console.log([0]);

//manipulando um array.
//forEach-realiza uma função para cada item do array.
array.forEach(function (item, index) { console.log(item, index) })


//push-add item no final do Array.
array.push('novo item');
console.log(array);

//pop-remove o último ítem do array
array.pop();
console.log(array);

//shift-remove o primeiro ítem do array.
array.shift();
console.log(array);

//unshift - add ítem no início do array.
array.unshift('novo ítem');
console.log(array);

//indexOf- retorna o índice de um ítem do array.
console.log(array.indexOf(true));

//splice remove ou substitui ítem por índice
array.splice(0, 3);
console.log(array);

//slice- retorna uma parte de um array existente
let novoArray= array.slice(0, 3);
console.log(novoArray);

/* //o ue são objetos
como declarar um objeto*/
let object = { propriedade1: 'valor1', propriedade2: 'valor2' }
//deve ser declarado entre chaves"{}";
console.log(object);

//assim como os arrays as prpriedades de objetos podem guardar quaisquer valores.
/*let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objetoInterno: 'objeto Interno'}
};*/
/*//como acessar prpriedades dos objetos
usando ponto"."
*/
//console.log(object.objectInterno);
    //manipulando objeto.
//desestruturando objeto.
/*let string = object.string;
let number = object.number;
let boolean = object.boolean;

//desfrutando usando chaves
let { string, number, boolean } = object;
console.log(string, number, boolean);*/