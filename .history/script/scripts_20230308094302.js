// sidebar
const menuItems = document.querySelectorAll(".menu-item");
// message
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');

const changActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', ()=>{
        changActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notifications-count').style.display='none';
        }
    })
})

// messages
messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    setTimeout(()=>{

    },3000)
})