const nav = document.querySelector('.navigation');
const burgerMenu = document.querySelector('.burger_menu');
const arrowBack = document.querySelector('.arrow_back');
const inform = document.querySelector('.inform');
const product = document.querySelector('.product');
const partners = document.querySelector('.partners');
const body = document.querySelector('body');
const slider = document.querySelector('.slider');
const nav_slide = document.querySelectorAll('.nav_slide');

var interval;
//Переменные для слайдера
//счётчик слайдов
var countSlider = 0;
//Ширина слайдера
var viewport = document.querySelector('.product').offsetWidth;
//позиция слайда
var offset = 0;
//Текущеее название слайда
var countNameSlide = 0;

//Расставление отступов
var right = 100;
nav_slide.forEach(slide => {
    right -= 25;
    if(nav_slide[0] == slide){
        slide.style.right = `13%`;
    }else{
        slide.style.right = `${right}%`;
    }
})