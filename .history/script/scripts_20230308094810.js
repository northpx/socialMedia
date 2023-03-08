// sidebar
const menuItems = document.querySelectorAll(".menu-item");
// message
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('.message-search');


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
const searchMessage = () => {
    const val = messageSearch.ariaValueMax.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        if(name)
    })
}


messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },3000);
})

