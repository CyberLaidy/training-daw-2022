window.onload = function(e) {
    console.log('documento cargado')

    // // document.getElementsByTagName('h1')[0].innerText = 'Changed from JS!!'

    //Cambiar el título del segundo h2
    let ti2 = document.getElementsByTagName("h2").innerText=('Hola')
    console.log(ti2);

    //Seleccionar el elemento con id == username
    let idUser = document.getElementById("username");
    console.log(idUser);

    //Cambiar el color de todos los .first que estén dentro de un artículo 
    let colorF = document.querySelectorAll("article.first");
    function colorF() {
        Element.style.color="orange";
    }
    console.log(colorF);

    //Seleccionar todos lo elementos li con class == item
    let selectLiClassItem = document.getElementsByClassName("li.item");
    console.log(selectLiClassItem);

    //Seleccionar todos lo buttons dentro de class == buttons
    let selectClassBt = document.querySelectorAll("class.buttons");
    console.log(selectClassBt);

    //Cambiar el color de fondo del primer párrafo
    let fp = document.querySelector("p").getElementsByClassName("first");
    function fp() {
        Element.style.backgroundColor="pink";
    }
    console.log(fp);

    //Cambiar el color de frente (forecolor) de los elementos buttons dentro de class == buttons
    let changeColor = document.getElementsByClassName("buttons");
    function changeColor() {
        Element.style.forecolor="gray";
    }
    console.log(changeColor);
}