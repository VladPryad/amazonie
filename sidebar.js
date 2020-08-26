const burgerMenu = document.getElementById('burger_link')
const sidebarBg = document.querySelector('.sidebar_bg')
const sidebarContent = document.querySelector('.sidebar_content')
const closeBtn = document.getElementById('close_btn')
const sidebarContentNextSlide = document.querySelector('.hmenu-content-to-left')

burgerMenu.onclick = function(event) {
    sidebarBg.classList.add('open')
    sidebarContent.classList.add('open')
    event.target.classList.add('hide')
}
closeBtn.onclick = function(event) {
    sidebarBg.classList.remove('open')
    sidebarContent.classList.remove('open')
    burgerMenu.classList.remove('hide')
    sidebarContentNextSlide.classList.remove('open')
}

const aHref = document.querySelectorAll('.hmenu-content a')
    aHref.forEach(item => {
        item.addEventListener('click', (event) => {
            sidebarContentNextSlide.classList.add('open')
            
        })
    })