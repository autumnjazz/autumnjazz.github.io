const miniNav = document.querySelector('.mini-nav');
const navLinks = document.querySelector('.main-menu');
const links = document.querySelector('.main-menu li');

miniNav.addEventListener("click", () =>{
    navLinks.classList.toggle("open");
});


$('.main-menu-item').click(function(e) {
    if($(this).siblings('li').find('ul.submenu:visible').length) {
        $('ul.submenu').slideUp('normal');
    }
    $(this).find('ul.submenu').slideToggle('normal');
});
