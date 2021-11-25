
// Carrusel de imágenes del header
$(".header__top__container").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false,
        }
    }
})

// Carrusel de productos
$(".seccionProductos__container").owlCarousel({
    margin: 10,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 2.1,
            nav: false,
        },
        400:{
            items: 2.4,
            nav: false,
        },
        600:{
            items: 3.5,
            nav: false,
        },
        768:{
            items: 4.6,
            nav: false,
        },
        1000:{
            items: 5.8,
            nav: false,
        },
        1200:{
            items: 7,
            nav: false,
        },
        1400:{
            items: 8.5,
            nav: false,
        }
    }
})

// Display vertical de barra de navegación

const navVerticalContainer = document.getElementsByClassName("navVerticalContainer")[0];
const navVertical = document.getElementsByClassName("navVertical")[0];
const bars = document.getElementsByClassName("nav__bars")[0];
const times = document.getElementsByClassName("nav__bars")[1];

const navBar = document.getElementsByClassName("nav")[0];
const navItem = document.getElementsByClassName("nav__a");

const home = document.getElementsByClassName("navVertical__a")[0];
const catalogo = document.getElementsByClassName("navVertical__a")[1];
const nosotros = document.getElementsByClassName("navVertical__a")[2];
const contacto = document.getElementsByClassName("navVertical__a")[3];

// Eventos
bars.addEventListener("click", navVerticalContainerOn);
bars.addEventListener("click", navVerticalOn);
bars.addEventListener("click", iconoBars);
times.addEventListener("click", navVerticalContainerOn);
times.addEventListener("click", navVerticalOn);
times.addEventListener("click", iconoBars);
// Scroll de barra de navegación:
window.addEventListener('scroll', scrollNav);
// Menu Vertical
home.addEventListener("click", navVerticalContainerOn);
catalogo.addEventListener("click", navVerticalContainerOn);
nosotros.addEventListener("click", navVerticalContainerOn);
contacto.addEventListener("click", navVerticalContainerOn);

home.addEventListener("click", navVerticalOn);
catalogo.addEventListener("click", navVerticalOn);
nosotros.addEventListener("click", navVerticalOn);
contacto.addEventListener("click", navVerticalOn);

home.addEventListener("click", iconoBars);
catalogo.addEventListener("click", iconoBars);
nosotros.addEventListener("click", iconoBars);
contacto.addEventListener("click", iconoBars);




// Funciones
function navVerticalContainerOn() {
    navVerticalContainer.classList.toggle("visibility")
}

function navVerticalOn() {
    setTimeout(() => {
        navVertical.classList.toggle("navVerticalOn")}, 50);
}
    
function iconoBars() {
    times.classList.toggle("displayNone")
    bars.classList.toggle("displayNone")
}

    
    
// Función del scroll de navegación
function scrollNav() {
    const scrolled = window.scrollY;
    
    if(scrolled >= 668){
        navBar.classList.remove("displayNoneNav")
    }else{
        navBar.classList.add("displayNoneNav");
    }
}
    
    
// Scroll de items de la barra de navegación
window.addEventListener('scroll', () => {
const scrolled = parseInt(window.scrollY);
// console.log(scrolled)

if((scrolled >= 668) && (scrolled < 1990)){
    navItem[1].classList.remove("displayNone")
    navItem[1].innerHTML = `CATÁLOGO`
}else{
    navItem[1].classList.add("displayNone");
    navItem[1].innerHTML = `Catálogo`
}

if((scrolled >= 1990) && (scrolled < 3800)){
    navItem[2].classList.remove("displayNone")
    navItem[2].innerHTML = `NOSOTROS`
}else{
    navItem[2].classList.add("displayNone");
    navItem[2].innerHTML = `Nosotros`
}

if(scrolled >= 3800){
    navItem[3].classList.remove("displayNone")
    navItem[3].innerHTML = `CONTACTO`
}else{
    navItem[3].classList.add("displayNone");
    navItem[3].innerHTML = `Contacto`
}


    
// Media Queries de Navegación
    
    if(window.matchMedia("(min-width: 785px)").matches) {
        
        navItem[0].innerHTML = `Home`

        
        if(scrolled >= 1028){
            navBar.classList.remove("displayNoneNav")
        }else{
            navBar.classList.add("displayNoneNav");
        }
        
        for (item of navItem){
            item.classList.remove("displayNone")
        }
        
        if((scrolled >= 1028) && (scrolled < 2660)){
            navItem[1].innerHTML = `CATÁLOGO`
        }else{
            navItem[1].innerHTML = `Catálogo`
        }
        
        if((scrolled >= 2660) && (scrolled < 3332)){
            navItem[2].innerHTML = `NOSOTROS`
        }else{
            navItem[2].innerHTML = `Nosotros`
        }
        
        if(scrolled >= 3332){
            navItem[3].innerHTML = `CONTACTO`
        }else{
            navItem[3].innerHTML = `Contacto`
        }
    }else{
        navItem[0].classList.add("displayNone")
    }
})

// Carrusel de comentarios de clientes
$(".redes__clientesDicen").owlCarousel({ 
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    margin: 100,
    responsive: {
        0:{
            items: 1,
            nav: false,
        },
        1200:{
            items: 3,
            nav: false,
        }
    }
})