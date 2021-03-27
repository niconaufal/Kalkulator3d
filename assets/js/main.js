/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')



/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})


/*SCROLL ABOUT*/
sr.reveal('.Kerucut__img', {delay: 500})
sr.reveal('.Kerucut__subtitle', {delay: 300})
sr.reveal('.Kerucut__profession', {delay: 400})
sr.reveal('.Kerucut__text', {delay: 500})
sr.reveal('.Kerucut__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.Bola__subtitle', {})
sr.reveal('.Bola__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.Bola__img', {delay: 400})


var luas;
var volume;
var jari;
var tinggi;
var LuasAlas;
function hitung() {
 jari = parseFloat(document.getElementById("ipt_jari").value);
 tinggi = parseFloat(document.getElementById("ipt_tinggi").value);
 luas = 2 * 3.14 * jari *(jari+tinggi);
 LuasAlas = 3.14 *jari * jari;
 volume = LuasAlas * tinggi;
 document.getElementById('opt_luas').value = luas + " " + "m2";
 document.getElementById('opt_volume').value = volume + " " + "m3";
}

var seluas;
var volum;
var jaring;
var setinggi;
var garis;
var LuasAlasan;
function hitungan(){
 jaring = parseFloat(document.getElementById("ipt_jaring").value);
 setinggi = parseFloat(document.getElementById("ipt_setinggi").value);
 garis = parseFloat(document.getElementById("ipt_garis").value);
 seluas = 3.14 * jaring *(jaring + garis);
 LuasAlasan = 3.14 *jaring * jaring;
 volum = 1/3 * LuasAlasan * setinggi;
 document.getElementById('opt_seluas').value = seluas + " " + "m2";
 document.getElementById('opt_volum').value = volum + " " + "m3";
}

var meluas;
var volumes;
var jaringan;
var LuasKalasan;
function menghitung(){
 jaringan = parseFloat(document.getElementById("ipt_jaringan").value);
 
 LuasKalasan = 3.14 *jaringan* jaringan;
 meluas = 4 * LuasKalasan;
 volumes = 4/3 * LuasKalasan * jaringan;
 document.getElementById('opt_meluas').value = meluas + " " + "m2";
 document.getElementById('opt_volumes').value = volumes + " " + "m3";
}

