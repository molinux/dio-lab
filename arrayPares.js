
function substituiPares(array) {
  if(!array || !array.length) return -1;

  for(let i = 0; i < array.length; i++) {
    if(array[i] === 0) {
      console.log("Você já é zero!");
    } else if (array[i] % 2 === 0) {
      console.log(`Substituindo ${array[i]} por 0...`);
      array[i] = 0;
    }
  }
  
  return array;
}

// let arr = [1,2,3,4,5,6,7,8,9];
// let arr = [1,3,4,6,80,33,23,90];

// Testando tratamento de erro com array vazio
let arr
console.log(substituiPares([]));
console.log(substituiPares(null));
console.log(substituiPares(arr));