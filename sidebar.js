const burgerMenu = document.getElementById('burger_link')
const sidebarBg = document.querySelector('.sidebar_bg')
const sidebarContent = document.querySelector('.sidebar_content')
const closeBtn = document.getElementById('close_btn')
const submenu = document.querySelector('.submenu')
const menu = document.querySelector('.under-sign-in')

burgerMenu.onclick = function(event) {
    sidebarBg.classList.add('open')
    sidebarContent.classList.add('open')
    event.target.classList.add('hide')
}
  
const subcategories = document.querySelectorAll('.hmenu-translateX-right');
let currentSubcategory;

const aHref = document.querySelectorAll('.hmenu-content a');
    aHref.forEach(item => {
        item.addEventListener('click', (event) => {
            currentSubcategory = subcategories[item.id-1];

            submenu.classList.add('open');
            currentSubcategory.classList.add('open')
            currentSubcategory.style.display = 'inline';
            sidebarContent.style.overflow = 'hidden';
            menu.style.display = 'none';
        })
    })

    const back = document.querySelectorAll('.hmenu-back-button');
    back.forEach(item => {
        item.addEventListener('click', (event) => {
            submenu.classList.remove('open');
            currentSubcategory.classList.remove('open');
            currentSubcategory.style.display = 'none';
            menu.style.display = 'block';
        sidebarContent.style.overflow = 'auto';
        })
    })

    closeBtn.onclick = function(event) {
        sidebarBg.classList.remove('open')
        sidebarContent.classList.remove('open')
        burgerMenu.classList.remove('hide')
        currentSubcategory.classList.remove('open')
        submenu.classList.remove('open')
        currentSubcategory.style.display = 'none';
        menu.style.display = 'block';
        sidebarContent.style.overflow = 'auto';
    }