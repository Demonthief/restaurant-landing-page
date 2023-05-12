const menu = document.querySelector('#bars'),
    navbar = document.querySelector('.navbar'),
    navLinks = document.querySelectorAll('.navbar a');

    navLinks.forEach(link => {
        link.addEventListener('click', () =>{
            for(let i=0; i < navLinks.length; i++){
                navLinks[i].classList.remove('active')
            }
            link.classList.add('active')
        })
    })
    

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
})

window.addEventListener('scroll',() =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
})

//seacrh
const searchIcon = document.querySelector('#search-icon'),
    searchForm = document.querySelector('#search_form')

searchIcon.addEventListener('click', () =>{
    searchForm.classList.add('active')
})
const close = document.querySelector('#close')
close.addEventListener('click', () =>{
    searchForm.classList.remove('active')
})

// swipper
var swiper = new Swiper(".home_container", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});