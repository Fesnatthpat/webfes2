function toggleham(x) {
    x.classList.toggle("change");

    let myMenu = document.getElementById('navmenu')
    if (myMenu.className === 'menu') {
        myMenu.className += 'menu-active'
    } else {
        myMenu.className = 'menu'
    }
}