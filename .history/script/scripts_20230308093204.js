// sidebar
const menuItems = document.querySelectorAll(".menu-item");

const changActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.de
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changActiveItem();
        item.classList.add('active');
    })
})