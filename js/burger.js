// Модуль работы с меню (бургер) =======================================================================================================================================================================================================================
function menuInit() {
    let iconMenu = document.querySelector(".icon-menu");
    if (iconMenu) {
        iconMenu.addEventListener("click", function(e) {
            const menuBody = document.querySelector(".menu__body");
            menuBody.classList.toggle("_active");
            document.documentElement.classList.toggle("menu-open");
        });
    }

}
menuInit();