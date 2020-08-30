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
            try {
            currentSubcategory = subcategories[item.id-1];

            currentSubcategory.style.display = 'inline';

            submenu.classList.add('open');              
            window.setTimeout(function() {               
                currentSubcategory.classList.add('open')
            },50);
            sidebarContent.style.overflow = 'hidden';
            menu.style.display = 'none';
            }
            catch(ex) {
                console.log('this category isn\'t working yet ');
            }
        })
    })

    const back = document.querySelectorAll('.hmenu-back-button');
    back.forEach(item => {
        item.addEventListener('click', (event) => {
            submenu.classList.remove('open');
            window.setTimeout(function() {               
            currentSubcategory.style.display = 'none';    
                
            },400);
            
            currentSubcategory.classList.remove('open');
            

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

        //menu.style.display = 'block';
        sidebarContent.style.overflow = 'auto';
    }