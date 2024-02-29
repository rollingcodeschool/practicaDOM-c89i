function modificarTitulo(){
    console.log('aqui tengo que modificar el titulo');
    //quiero traer el h1 del index.html
    const tituloPrincipal = document.getElementsByTagName('h1');
    // const tituloPrincipal = document.getElementsByClassName('display-1');
    // const tituloPrincipal = document.getElementById('tituloPrincipal');
    // const tituloPrincipal = document.querySelectorAll('section');
    // const tituloPrincipal = document.querySelector('h1');
    console.log(tituloPrincipal[0]);
    // tituloPrincipal[0].innerText = "Esta es una prueba de innerText";
    tituloPrincipal[0].innerHTML = "Esta es una prueba de <b>innerHTML</b>";
    tituloPrincipal[0].className = 'text-info display-4'
}