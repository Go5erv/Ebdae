// Navbar
$(document).ready(function() {
    // Transition effect for navbar 
    $(window).scroll(function() {
      // checks if window is scrolled more than 500px, adds/removes solid class
      if($(this).scrollTop() > 100) { 
          $('.navbar').addClass('solid');
      } else {
          $('.navbar').removeClass('solid');
      }
    });
});
// Loading
$(window).load(function(){
    //Loading Screen 
    $(".loading, .loading .sk-chase").fadeOut(2000);
});
// Slider
(function($) {
  $.fn.menumaker = function(options) {
      var cssmenu = $(this),
          settings = $.extend({
              format: "dropdown",
              sticky: false
          }, options);
      return this.each(function() {
          $(this).find(".button").on('click', function() {
              $(this).toggleClass('menu-opened');
              var mainmenu = $(this).next('ul');
              if (mainmenu.hasClass('open')) {
                  mainmenu.slideToggle().removeClass('open');
              } else {
                  mainmenu.slideToggle().addClass('open');
                  if (settings.format === "dropdown") {
                      mainmenu.find('ul').show();
                  }
              }
          });
          cssmenu.find('li ul').parent().addClass('has-sub');
          multiTg = function() {
              cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
              cssmenu.find('.submenu-button').on('click', function() {
                  $(this).toggleClass('submenu-opened');
                  if ($(this).siblings('ul').hasClass('open')) {
                      $(this).siblings('ul').removeClass('open').slideToggle();
                  } else {
                      $(this).siblings('ul').addClass('open').slideToggle();
                  }
              });
          };
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
          resizeFix = function() {
              var mediasize = 1000;
              if ($(window).width() > mediasize) {
                  cssmenu.find('ul').show();
              }
              if ($(window).width() <= mediasize) {
                  cssmenu.find('ul').hide().removeClass('open');
              }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
      });
  };
})(jQuery);


//  Swiper blog
var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      520: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});

// Swiper services
var swiper_serv = new Swiper(".services .services-top .slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });
  // logo Services Swiper
  var swiper_serv_logo = new Swiper(".services .logo-services .slide-content", {
    slidesPerView: 7,
    spaceBetween: 10,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 5,
        },
        950: {
            slidesPerView: 7,
        },
    },
  });
  // animation scroll header
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
     //Smooth Scroll To Div
   
     $('.topnav li a').click(function(){
      $('html, body').animate({
        scrollTop: $('#' + $(this).data('value')).offset().top
        
         }, 1000);
     });
  
// Scroll Top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
// lamp 
const lampContainer = document.getElementById('lamp-container');
const lampOffImage = document.getElementById('lamp-off-image');
const lampOnImage = document.getElementById('lamp-on-image');

lampContainer.addEventListener('mouseenter', () => {
  lampOffImage.style.display = 'none';
  lampOnImage.style.display = 'block';
});

lampContainer.addEventListener('mouseleave', () => {
  lampOffImage.style.display = 'block';
  lampOnImage.style.display = 'none';
});

// agency tabs
// Get all tab elements
const tabs = document.querySelectorAll('.tab');

// Get all tab content elements
const tabContents = document.querySelectorAll('.tab-content');

// Add click event listener to each tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove 'active' class from all tabs
    tabs.forEach(tab => tab.classList.remove('active'));

    // Remove 'active' class from all tab contents
    tabContents.forEach(content => content.classList.remove('active'));

    // Add 'active' class to clicked tab
    tab.classList.add('active');

    // Get the data-tab attribute value
    const tabId = tab.getAttribute('data-tab');

    // Find the corresponding tab content and add 'active' class
    const tabContent = document.querySelector(`#${tabId}`);
    tabContent.classList.add('active');
  });
});


// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle counter animation
function startCounterIfInView() {
  var counterSection = document.querySelector('.counter');
  var counters = document.querySelectorAll('.counter-number');
  var hasStarted = false;

  function runCounter() {
      if (!hasStarted && isElementInViewport(counterSection)) {
          counters.forEach(function(counter, index) {
              var endValue = parseInt(counter.getAttribute('data-end-value'));
              var duration = parseInt(counter.getAttribute('data-duration'));
              var delay = index * 500; // Delay each counter for better visual effect

              setTimeout(function() {
                  $(counter).jQuerySimpleCounter({ end: endValue, duration: duration });
              }, delay);
          });
          hasStarted = true;
      }
  }

  // Initial check on page load
  runCounter();

  // Check on scroll
  window.addEventListener('scroll', function() {
      runCounter();
  });
}

// Run the counter animation when the counter section is in view
startCounterIfInView();



// Body js
var dteNow = new Date();
var intYear = dteNow.getFullYear();

$('#copyright').each(function() {
    var text = $(this).text();
    $(this).text(text.replace('CurrentCopyrightYear', intYear)); 
});



