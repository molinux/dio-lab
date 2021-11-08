function changeMode() {
  // console.log("cliquei !");
  // Como vai mudar as classes e mudar o texto, serão 2 funções, uma para cada evento
  changeClasses();
  changeText();
}

function changeClasses() {
  button.classList.toggle(darkModeClass);
  h1.classList.toggle(darkModeClass);
  body.classList.toggle(darkModeClass);
  footer.classList.toggle(darkModeClass);
}

function changeText() {
  const lightMode = 'Light Mode';
  const darkMode = 'Dark Mode'
  if(body.classList.contains(darkModeClass)) {
    button.innerHTML = lightMode;
    h1.innerHTML = darkMode + " ON";
    return;
  }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + " ON";
  // console.log(body.innerHTML);
}

// Como a string 'dark-mode' está sendo utilizada em varios pontos do código
// Vamos criar uma constante pra ela. Pois caso mude o nome, mudará apenas em um único local
const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

// console.log(body);

button.addEventListener('click', changeMode);

// console.log(button);