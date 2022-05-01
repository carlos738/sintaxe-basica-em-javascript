/* o que são vetores ou arrays

como declarar um array
let array=['string',77,true];
deve ser declarado com colchetes"[]"
console.log(array);*/

//como um array pode guardar diferentes valores inclusive outros arrays
let array=['string',11,true,['array1'],['array2'],['array3'],['array9']];

//como acessar o indice do array

//console.log(array[6]);

//manipulando  um array
//forEach - realiza uma função para cada item do array
//array.forEach(function(item,index){console.log(item,index);})

//push o add item no final do array
array.push('NOVO ITEM');
console.log(array);

// pop- remove o último ítem do array
array.pop();
console.log(array);

//shift - remove o primeiro ítem do array
array.shift();
console.log(array);

//unshift - add item no início do array
array.unshift('new ítem');
console.log(array);

//indexOf - retorna o índice de um ítem do array
console.log(array.indexOf(true));

//splice - remove ou substitui ítem por índice
array.splice(1,3);
console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(1,3);
console.log(novoArray);

/*  // o que são objetos
como declarar um objeto */
/* //let object ={propriedade1:'valor1',propriedade2:'valor2'}
deve ser declarado entre chaves "{}"
console.log(object);*/

// assim como arrays as propriedades de objetos podem guardar quaisquer valores
let object = {String: 'string',number: 1,Boolean: true,array:['array'],objectInterno:{objetoInterno: 'objeto'}};

 // como acessar as propriedades de objetos 
//usando "." 
console.log(object.objectInterno);

//manipulando objeto
//desestruturando objeto
/*let string = object.string;
let number= object.number;
let Boolean= object.Boolean;
*/
//desestruturando usando chaves
let{string, number, Boolean}=  object
console.log(string,number,Boolean);

