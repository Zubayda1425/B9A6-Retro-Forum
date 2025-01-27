function p(name) {
    console.log(name);
}

p('connected');

//toggle Menu
function navMenu() {
    const menuContainer = document.getElementById('menu_container');
    if (menuContainer.classList.contains("h-0")) {
        menuContainer.classList.replace("h-0", "h-42");
    }
    else
        menuContainer.classList.replace("h-42", "h-0");

}