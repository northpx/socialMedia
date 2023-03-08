// sidebar
const menuItems = document.querySelectorAll(".menu-item");

const changActiveItem = () =>{
    menuItems.forEach
}

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changActiveItem();
        item.classList.add('active');
    })
})