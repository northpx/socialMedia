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
var root = document.querySelector(':root');
const colors = document.querySelectorAll('.choose-color span'); 

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


const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
};

// font
fontSizes.forEach(size => {

    size.addEventListener('click', ()=>{
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-18rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--sticky-top-left', '5.4rem');
            root.style.setProperty('--sticky-top-right', '-33rem');
        }
        document.querySelector('html').style.fontSize = fontSize
    })
})

//remove active color
const colorActiveRemove = () => {
    colors.forEach(color => {
        color.classList.remove('active');
    })
}

// change primary color
colors.forEach(color => {
    color.addEventListener('click', () => {
        let primary;
        if(color.classList.contains('color-1')){
            primaryHue = 252;
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 352;
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
        }
        else if(color.classList.contains('color-1')){
            primaryHue = 202;
        }

        root.style.setProperty('', primaryHue)
    })
})





