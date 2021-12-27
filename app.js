const menu = document.querySelector(".bx-menu");
const list_menu = document.querySelector(".grocery");
menu.addEventListener("click", function(){
    list_menu.classList.toggle('close')
})