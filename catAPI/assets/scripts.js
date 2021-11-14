/*

RETORNO DA CONSULTA A API

  "id": 33,
  "url": "https://thatcopy.github.io/catAPI/imgs/jpg/9098db4.jpg",
  "webpurl": "https://thatcopy.github.io/catAPI/imgs/webp/9098db4.webp",
  "x": 51.15,
  "y": 28.6
}

*/

// METODO 1:

const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

const getCats = async () => {
  try {
    const data = await fetch(BASE_URL);
    // Transformar em JSON
    const json = await data.json();
    // webpurl = imagem comprimida
    return json.webpurl;
  } catch (e) {
    console.log(e.message);
  }
}

const loadImg = async () => {
  catImg.src = await getCats();
}

catBtn.addEventListener('click', loadImg);

// Para a página já iniciar com uma imagem, chamamos a função loadImg
loadImg();

// // METODO 2:

// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const catBtn = document.getElementById('change-cat');

// const getCats = async = () => {
//   const data = await fetch(BASE_URL)
//     .then((res) => res.json())
//     .catch((e) => console.log(e));

//     return data.webpurl;
// };

// const loadImg = async() => {
//   const catImg = document.getElementById('cat');
//   catImg.src = await getCats();
// };

// catBtn.addEventListener('click', loadImg);

// loadImg();