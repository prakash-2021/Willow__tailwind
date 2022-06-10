const dropdownService = document.getElementById("dropdownService");
const menuDropdown = document.getElementById("menuDropdown");
menuDropdown.classList.add("hidden")
dropdownService.addEventListener('click', function () {
    menuDropdown.classList.toggle("hidden")
})




let swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        spaceBetween: 0,
        loop: true,
    },
});


window.addEventListener('scroll', reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowheight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowheight - revealPoint)
            reveals[i].classList.add('active');

        else
            reveals[i].classList.remove('active');
    }

}



const navMenu = document.getElementById('navMenu');
const hamMenu = document.getElementById('hamMenu');
const hamParent = document.querySelector('.hamMenu')

hamMenu.addEventListener('click', function () {
    if (navMenu.style.display == "none") {
        navMenu.style.display = "block"
        hamParent.style.background = "rgb(141, 135, 135)";
    }
    else {
        navMenu.style.display = "none"
        hamParent.style.background = "rgb(209 213 219)";
    }

})