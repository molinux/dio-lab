// // MAP: Array map com this
// const maca = {
//   value: 2
// }

// const laranja = {
//   value: 3
// }

// function mapComThis(arr, thisArg) {
//   return arr.map(function(item) {
//     return item * this.value
//   }, thisArg);

// }

// const nums = [1,2];
// console.log('this -> maca', mapComThis(nums, maca));
// console.log('this -> laranja', mapComThis(nums, laranja));

// // MAP: Array map sem this
// function mapSemThis(arr) {
//   return arr.map(function (item) {
//     return item * 2;
//   });
// }

// const nums = [ 2,4,6,8,10];

// console.log(mapSemThis(nums));
// console.log((nums));




// // FILTER: Filtre e retorne todos os números pares de um array.
// function pairNumbers(arr) {
//   return arr.filter(callback);
// };

// function callback(item) {
//   return item % 2 === 0;
// }

// const nums = [1, 57, 30, 45, 46, 78, 99];
// console.log(pairNumbers(nums));



// //REDUCE: Some todos os números de um array

// function somaNumeros(arr) {
//   return arr.reduce(function(prev,current) {
//     console.log({prev});
//     console.log({current});
//     return prev + current;
//   });
// }

// const arr = [1, 2];
// console.log(somaNumeros(arr));


// REDUCE: Crie uma função que recebe uma lista de preços e 
// um número representando o saldo disponível. Calcule qual será o saldo final 
// após subtrair todos os preços da lista enviada.

const lista = [
  {
    name: 'Sabao em po',
    preco: 15
  },
  {
    name: 'Cereal',
    preco: 12
  },
  {
    name: 'Toalha',
    preco: 30
  }
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
  return lista.reduce(function(prev,curr, index) {
    console.log("rodada", index + 1);
    console.log({prev});
    console.log({curr});
    return prev - curr.preco;
  }, saldoDisponivel);
}

console.log(`Saldo disponivel: R$ ${calculaSaldo(saldoDisponivel, lista)}`);