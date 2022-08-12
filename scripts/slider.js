var slider_array = [];
var name_slide;

nav_slide.forEach(slide => {
    slide.addEventListener('click', navSlideClick)
});

for(var i = 0; i < 4; i++){
    var slide = document.createElement('div');
    slide.classList.add('content_slide');
    switch (i) {
        case 0:
            name_slide = "soda"
            break;
        case 1:
            name_slide = "izvest"
            break;
        case 2:
            name_slide = "gips"
            break;
        case 3:
            name_slide = "plaster"
            break;
    
        default:
            break;
    }
    slide.classList.add(name_slide);
    slide.innerHTML = `
    <div class="${name_slide}_img"></div>
    <ul class="${name_slide} description">
        <li class = "${name_slide}_item">Первый пункт</li>
        <li class = "${name_slide}_item">Второй пункт</li>
        <li class = "${name_slide}_item">Третий пункт</li>
        <li class = "${name_slide}_item">Четвёртый пункт</li>
        <li class = "${name_slide}_item">Пятый пункт</li>
    </ul>
    `;
    // slide.innerHTML = `
    // <div class="${name_slide}_img"></div>
    // <ul class="${name_slide} description">
        
    // </ul>
    // `;
    slider_array.push(slide);
    // slider.appendChild(slide);
}

function render(){
    var tmp_slide = document.createElement('div');
    tmp_slide.classList.add('slide');
    tmp_slide.appendChild(slider_array[countSlider]);
    tmp_slide.style.left = offset * viewport + "px";
    slider.appendChild(tmp_slide);
    if(countSlider == slider_array.length - 1)
        countSlider = 0;
    else
        countSlider++;
    offset = 1;
}


function slide_right(){
    //начальное расположение заголовков
    if(countNameSlide >= 0)
        nav_slide[countNameSlide].style.right = `${(100 / 4) * (nav_slide.length - countNameSlide - 1)}%`;
    else{
        nav_slide[0].style.right = `${(100 / 4) * (nav_slide.length - 0 - 1)}%`;
    }

    if(countNameSlide == nav_slide.length - 1){
        countNameSlide = 0;
    }else{
        countNameSlide++;
    }

    //Расчёт передвижения слайда
    var slides2 = document.querySelectorAll('.slide');
    var offset2 = 0;
    for(var i = 0; i < slides2.length; i++){
        slides2[i].style.left = offset2 * viewport - viewport + "px";
        offset2++;
    }
    //Выбор активной надписи
    for(var i = 0; i < nav_slide.length; i++){
        nav_slide[i].classList.remove('active');    
    }
    switch (countNameSlide) {
        case 0:
            nav_slide[countNameSlide].style.right = "13%";
            break;
        case 1:
            nav_slide[countNameSlide].style.right = "17%";
            break;
        case 2:
            nav_slide[countNameSlide].style.right = "27%";
            break;
        case 3:
            nav_slide[countNameSlide].style.right = "22%";
            break;
    
        default:
            break;
    }
    // nav_slide[countNameSlide].style.right = "15%";
    nav_slide[countNameSlide].classList.add('active');

    setTimeout(() => {
        slides2[0].remove();
        render();
    }, 1000);
}

function navSlideClick(e){
    // debugger
    clearInterval(interval);
    var slides2 = document.querySelectorAll('.slide');
    slides2[1].remove();
    for(var i = 0; i < slider_array.length; i++){
        if(nav_slide[i] == e.target){
            nav_slide[countNameSlide].style.right = `${(100 / 4) * (nav_slide.length - countNameSlide - 1)}%`;
            countNameSlide = i-1;
            countSlider = i;
            render();
            setTimeout(slide_right, 1000);
            // interval = setInterval(slide_right, 5000);
        }
    }
}