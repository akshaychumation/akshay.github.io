
// Counter js
    const count = document.querySelector(".count"),
  title = document.querySelector(".count-title");

count.innerText = 1;

setInterval(() => {
  if (count.innerText < 30) {
    count.innerText++;
  } else {
  }
}, 100);


const count1 = document.querySelector(".count1"),
  title1 = document.querySelector(".count-title");

count1.innerText = 1;

setInterval(() => {
  if (count1.innerText < 130) {
    count1.innerText++;
  } else {
  }
}, 24);


const count2 = document.querySelector(".count2"),
  title2 = document.querySelector(".count-title");

count2.innerText = 1;

setInterval(() => {
  if (count2.innerText < 12) {
    count2.innerText++;
  } else {
  }
}, 260);
// Counter js


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
    // stagePadding: 200,
    margin: 10,
    nav:true,
    autoWidth:true,
    responsive:{
        0:{
            items:1.5
        },
        
        1000:{
            items:4.5
        }
    }
});



$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".SlideInSection");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
  
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });