function burgerOpen() {
    let burgerMenu = document.querySelector('.burger_menu');
    burgerMenu.style.display = 'flex';
}
function burgerClose() {
    let burgerMenu = document.querySelector('.burger_menu');
    burgerMenu.style.display = 'none';

    let screenWidth = window.innerWidth;

    if (screenWidth > 1024) {
        burgerMenu.style.display = 'none';
    }
}
window.addEventListener('resize', function() {
    burgerClose();
})



//активация анимационных элементов
function animActiv(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('anim_active');
    } else {
    change.target.classList.remove('anim_active');
    }
  });
};
let animOpt = { threshold: [0.01] };
let animAct = new IntersectionObserver(animActiv, animOpt);
let animItems = document.querySelectorAll('.anim_left,.anim_right,.anim_scale');
for (let el of animItems) {
  animAct.observe(el);
};

// стрелка для возврата в начало страницы
window.addEventListener('scroll', function() {
    var backPage = document.querySelector('.back_page');

    if (window.scrollY > 100) {
        backPage.style.display = 'flex'; // Показываем элемент
    } else {
        backPage.style.display = 'none'; // Показываем элемент
    }
});
