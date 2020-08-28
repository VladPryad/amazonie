const burgerMenu = document.getElementById('burger_link')
const sidebarBg = document.querySelector('.sidebar_bg')
const sidebarContent = document.querySelector('.sidebar_content')
const closeBtn = document.getElementById('close_btn')

burgerMenu.onclick = function(event) {
    sidebarBg.classList.add('open')
    sidebarContent.classList.add('open')
    event.target.classList.add('hide')
}
closeBtn.onclick = function(event) {
    sidebarBg.classList.remove('open')
    sidebarContent.classList.remove('open')
    burgerMenu.classList.remove('hide')
    currentSubcategory.classList.remove('open')
}
  
const subcategories = document.querySelectorAll('.hmenu-translateX-right');
let currentSubcategory;

const back = document.querySelectorAll('hmenu-back-button');
back.forEach(item => {
    item.addEventListener('click', (event) => {
    sidebarBg.classList.remove('open')
    sidebarContent.classList.remove('open')
    burgerMenu.classList.remove('hide')
    currentSubcategory.classList.remove('open')
    currentSubcategory.classList.add('hide')
    })
})

const aHref = document.querySelectorAll('.hmenu-content a');
    aHref.forEach(item => {
        item.addEventListener('click', (event) => {
            currentSubcategory = subcategories[item.id-1];

            currentSubcategory.classList.add('open')
            sidebarContent.classList.add('hide');
            
        })
    })