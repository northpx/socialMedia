// sidebar
const menuItems = document.querySelectorAll(".menu-item");
// message
const messageNotification = document.querySelector('#message-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


// theme
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
// color
const fontSizes = document.querySelectorAll('.choose-size span');

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
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLocaleLowerCase();
        console.log(name);
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            chat.style.display = 'none'
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage)

messageNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messageNotification.querySelector('.notifications-count').style.display = 'none';
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    },3000);
})

const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

const closeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closeModal);

theme.addEventListener('click', openThemeModal);


// font
fontSizes.forEach(size => {
    let fontSize;

    if(size.classList.contains)
})



