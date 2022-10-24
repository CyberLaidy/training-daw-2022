//Listar todos los divs
let listDivs = document.getElementsByTagName("div");
console.log(listDivs);

//Listar todos los elementos con style =='buttons'
let listButtons = document.getElementsByClassName("buttons");
console.log(listButtons);

//Listar 1 div con class == buttons
let divButton = document.querySelector("div.buttons");
console.log(divButton);

//Listar todos los divs con class == buttons
let listDivButton = document.querySelectorAll("div.buttons");
console.log(listDivButton);
