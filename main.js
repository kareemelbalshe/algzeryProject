const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');


window.addEventListener('load', () => {
    if (window.innerWidth > 1024) {
        menuBtn.style.display = "none"
        closeBtn.style.display = "none"
        menu.style.display = "flex"
    }
    else {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    }
})
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        menuBtn.style.display = "none"
        closeBtn.style.display = "none"
        menu.style.display = "flex"
    }
    else {
        menu.style.display = 'none';
        closeBtn.style.display = 'none';
        menuBtn.style.display = 'inline-block';
    }
})
menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex';
    closeBtn.style.display = 'inline-block';
    menuBtn.style.display = 'none';
})

const closeNav = () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display = 'inline-block';
}

closeBtn.addEventListener('click', closeNav);


document.onkeydown = e => {
    if (e.key == "F12") {
        alert("Don't try to inspect element")
        return false
    }
    if (e.ctrlKey && e.key == "u") {
        alert("Don't try to view page source")
        return false
    }
    // if(e.ctrlKey&&e.key=="c"){
    //     alert("Don't try to copy any thing")
    //     return false
    // }
    // if(e.ctrlKey&&e.key=="v"){
    //     alert("Don't try to paste any thing to page")
    //     return false
    // }
    if (e.ctrlKey && e.key == "s") {
        alert("Don't try to save page")
        return false
    }
    if (e.ctrlKey && e.shiftKey && e.key === "i") {
        alert("Don't try to inspect element")
        return false
    }
}