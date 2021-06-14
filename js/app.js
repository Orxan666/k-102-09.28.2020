// Slider
var next = document.getElementsByClassName('next-btn ')[0];
var prev = document.getElementsByClassName('prev-btn ')[0];
var slide =[...document.querySelectorAll('.slide')];
let currentSlide = 0;

function NextSlide(){
    slide[currentSlide].className = "slide";
    currentSlide = (currentSlide + 1 + slide.length)%slide.length;
    slide[currentSlide].className = "slide active-slide";
}

function PrevSlide(){
    slide[currentSlide].className = "slide";
    currentSlide = (currentSlide - 1 + slide.length)%slide.length;
    slide[currentSlide].className = "slide active-slide";
}

next.onclick = function(){
    NextSlide()
}                       

prev.onclick = function(){
    PrevSlide();
}

setInterval(function(){
    NextSlide();
},8500);
// ---------- 
// slider end
$(window).scroll(function(){
  if($(this).scrollTop() > 150) {
    $('.header').addClass('active');
  }
  else{
    $('.header').removeClass('active');

  }
})


// uuuuuuuuuuuuuuuuuuuuuuuuuuuuu


// =============
var width = 100;
var animation_speed = 700;
var time_val = 3000;
var current_slide = 1;

var $slider = $('.big-carousel');
var $slide_container = $('.carousel');
var $slides = $('.slide');

var interval;
// ----------------
$('.text-slider-ul').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
  
})

// ----------------
// 0000000000000000000000
// COUNTER START
function Appear(){
  var counterDiv = document.querySelector('.counter-div');
  var counterPosition = counterDiv.getBoundingClientRect().top;
  var screenPosition = window.innerHeight/1.3
  
  if (counterPosition < screenPosition) {
    const counters = document.querySelectorAll('.counter');
    const speed = 3000;
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        const inc = target / speed;
  
  
        if (count < target) {
          counter.innerText =Math.ceil(count + inc) ;
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  }
}

window.addEventListener('scroll', Appear)
// COUNTER END
// 00000000000000000000000000000
// 3D CARD JS START
// 000000000000000000000
const sectionTeam = document.querySelectorAll(".section-team")
sectionTeam.forEach(cr=>{
  const card=cr.querySelector(".card")
  const container = cr.querySelector(".cont");
console.log(cr)
  const title = cr.querySelector(".title");
  const sneaker = cr.querySelector(".sneaker img");
  const purchase = cr.querySelector(".purchase button");
  const description = cr.querySelector(".info h3");
  const sizes = cr.querySelector(".sizes");

  container.addEventListener("mousemove",(e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
  
  // card.style.transform =`rotateY(${xAxis}deg) rotateX(${yAxis}deg) `
  })
  //
  container.addEventListener("mouseenter",(e) => {
    card.style.transition = "none";
    title.style.transform = "translateZ(150px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
    description.style.transform = "translateZ(125px)";
    sizes.style.transform = "translateZ(100px)";
    purchase.style.transform = "translateZ(75px)"; 
  })
  // ----
  container.addEventListener("mouseleave",(e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0) rotateZ(0)";
    description.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)"; 
  
  
  })
  
    
})
// 0000000000
$('.netflix').slick({
  infinite: true,
  slidesToShow: 5,
  autoplaySpeed: 2000,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
}
 
);
// iiiiiiiiiiiiiiiiiiiiiiiiiiiiiii
$('.slide-our').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: $(".next"),
  prevArrow: $(".prev"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
 
  ]
}
 
);
// -----------
// sectionLatest start









