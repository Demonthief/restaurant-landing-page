const menu = document.querySelector('#bars'),
    navbar = document.querySelector('.navbar')

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