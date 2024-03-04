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

function crearElementoNuevo(){
    console.log('tenemos que crear un elemento');
    //crear un elemento con el objeto document
    //1- crear el elemento html
    const parrafoNuevo = document.createElement('p');
    //2 - modificar las propiedades
    parrafoNuevo.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere praesentium repellendus excepturi explicabo temporibus magni molestiae ea non ipsa ut porro, modi sequi pariatur maiores eveniet dolore! A modi voluptas repellendus amet quasi architecto. Praesentium quam nihil, iure laboriosam blanditiis, molestias eum sit esse corporis, dicta fugiat. Odit quaerat iure ipsam fugit illum cupiditate sapiente, possimus optio esse. Hic dolorum eum temporibus, accusamus omnis optio sit in, beatae veniam commodi quo! Deserunt saepe voluptatem officia, soluta error commodi praesentium quibusdam neque laboriosam corrupti! Nesciunt repudiandae tempore expedita facere obcaecati ipsa minus natus velit officia hic? Officiis expedita facere tempore deserunt ab obcaecati rerum odio ipsum ducimus voluptatibus praesentium eos provident aperiam, soluta ratione sequi enim? Perspiciatis tempore ipsum quaerat laboriosam amet incidunt dolore aliquid iure assumenda nihil? Necessitatibus modi deserunt laboriosam iure, itaque nisi? Repellat dignissimos dolorum delectus corporis exercitationem labore iusto quos error reiciendis ad modi deleniti quidem, ex fugiat officiis dolorem saepe quod nisi? Excepturi quidem dignissimos tempora suscipit animi adipisci ipsa omnis nesciunt similique laudantium, possimus sint, eaque ad, magni voluptatem consectetur. Aperiam, culpa! Vitae quaerat saepe aut quae illum, voluptates soluta voluptatem dolorum aspernatur dolore vel unde sint totam fuga ipsam quos ratione illo ab doloremque!`;
    parrafoNuevo.className = 'lead'
    //3- buscar nodo padre
    const seccionElementos = document.querySelector('#seccionElementos')
    console.log(seccionElementos);
    // seccionElementos.appendChild(parrafoNuevo); //agrega nodos hijos al final
    // seccionElementos.prepend(parrafoNuevo); //agrega nodos hijos al principio
    seccionElementos.insertBefore(parrafoNuevo, botonVerMas);
    //modificar el botón
    botonVerMas.innerHTML = 'Ocultar';
    botonVerMas.classList.remove('btn-outline-light');
    botonVerMas.classList.add('btnVerMas');
    // botonVerMas.className = 'btn btnVerMas'
}

const botonVerMas = document.getElementById('btnVerMas');
//esta es la sintaxis cuando la funcion que invoco tiene parametros
// botonVerMas.addEventListener('click', function (){crearElementoNuevo(p1,p2)})
botonVerMas.addEventListener('click', crearElementoNuevo)