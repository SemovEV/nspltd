if (window.addEventListener) {
  if ('onwheel' in document) {
    // IE9+, FF17+, Ch31+
    window.addEventListener("wheel", onWheel);
  } else if ('onmousewheel' in document) {
    // устаревший вариант события
    window.addEventListener("mousewheel", onWheel);
  } else {
    // Firefox < 17
    window.addEventListener("MozMousePixelScroll", onWheel);
  }
} else { // IE8-
  window.attachEvent("onmousewheel", onWheel);
}
var summScroll = 0;
function onWheel(e) {
  e = e || window.event;

  // wheelDelta не даёт возможность узнать количество пикселей
  var delta = e.deltaY || e.detail || e.wheelDelta;
  var product_scroll, partners_scroll;
  summScroll = (summScroll + delta/2);
  console.log(summScroll);
  product_scroll = 100 - summScroll;
  partners_scroll = 200 - summScroll;

  if (product_scroll <= 0){
    product_scroll = 0;
    if(partners_scroll <= 0){
      partners_scroll = 0;
    }
  }else if (product_scroll >= 100){
    product_scroll = 100;
    if(partners_scroll >= 200){
      partners_scroll = 200;
    }
  }
  product.style.transform = `translateY(${product_scroll}vh)`;
  partners.style.transform = `translateY(${partners_scroll}vh)`;

  // console.log(product.style.transform.slice(11, 12));
  // if(product.style.transform.slice(11, 12) == '1' && delta > 0){
  //   for(var i = 0; i < nav_slide.length; i++){
  //     nav_slide[i].classList.remove('active');    
  //   }
  //   nav_slide[0].style.right = "13%";
  //   nav_slide[0].classList.add('active');
  //   render();render();
  //   product.style.transform = `translateY(0px)`;
  //   interval = setInterval(slide_right, 5000);
  // }else if(product.style.transform.slice(11, 12) == '0' && delta < 0 && partners.style.transform.slice(11, 12) == '1'){
  //   product.style.transform = `translateY(100vh)`;
  //   clearInterval(interval)
  //   var slides2 = document.querySelectorAll('.slide');
  //   console.log(2);
  //   setTimeout(() => {
  //     nav_slide[countNameSlide].style.right = `${(100 / 4) * (nav_slide.length - countNameSlide - 1)}%`;
  //     slides2[0].remove();
  //     slides2[1].remove();
  //     offset = 0;
  //     countSlider = 0;
  //     countNameSlide = 0;
  //   }, 1000);
  // }else if(product.style.transform.slice(11, 12) == '0' && delta > 0){
  //   partners.style.transform = `translateY(0)`;
  //   clearInterval(interval)
  //   var slides2 = document.querySelectorAll('.slide');
  //   setTimeout(() => {
  //     nav_slide[countNameSlide].style.right = `${(100 / 4) * (nav_slide.length - countNameSlide - 1)}%`;
  //     slides2[0].remove();
  //     slides2[1].remove();
  //     offset = 0;
  //     countSlider = 0;
  //     countNameSlide = 0;
  //   }, 1000);
  // }else if(partners.style.transform.slice(11, 12) == '0' && delta < 0){
  //   partners.style.transform = `translateY(100vh)`;
  //   for(var i = 0; i < nav_slide.length; i++){
  //     nav_slide[i].classList.remove('active');    
  //   }
  //   nav_slide[0].style.right = "13%";
  //   nav_slide[0].classList.add('active');
  //   render();render();
  //   product.style.transform = `translateY(0px)`;
  //   interval = setInterval(slide_right, 5000);
  // }
}