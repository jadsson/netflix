//aqui é onde ocorre o controle de tudo em relação ao carrossel
$('.owl-carousel').owlCarousel({
    loop: true, 
    margin: 10,
    nav: false,
    responsive:{

        300:{
            items:2
        },
        600:{           //tela com 600px ou+, mostrar 5 items
            items:3
        },
        800:{          //tela com 800px ou+, mostrar 5 items
            items:5
        },
        1200:{
            items:6
        },
        1600:{
            items:8
        }
    }
})