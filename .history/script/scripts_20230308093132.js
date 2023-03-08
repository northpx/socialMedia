// sidebar
const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changActiveItem();
        item.classList.add('active');
    })
})