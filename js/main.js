const mobMenu = $('.mobile-menu');


document.addEventListener('invalid', (function () {
  return function (e) {
    e.preventDefault();
    return false;
  };
})(), true);

$('img').attr('draggable', false);

//MAIN SLIDER
const mainSlider = new Swiper('#main-swiper', {
  direction: 'vertical',
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 100,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: '.main-down',
    prevEl: '.main-up'
  },
  mousewheel: {
    releaseOnEdges: true,
  },
  allowTouchMove: false,
  speed: 1300,
  on: {
    slideChangeTransitionStart: function () {
      $('.slide-content').css('opacity', '0');
    },
    slideChangeTransitionEnd: function () {
      $('.slide-content').css('opacity', '1');

      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }
});

function hamburger() {
  $('.hamburger-menu').stop().toggleClass('animate');

  mobMenu.stop().toggleClass('active');

  if (mobMenu.hasClass('active')) {
    mobMenu.fadeIn();
  } else {
    mobMenu.fadeOut();
  }
}

$('.hamb-wrap').on('click', function () {
  hamburger();
})

mainSlider.on('slideChange', function () {
  let currentSlide = mainSlider.activeIndex;
  $(".nav-links.desktop li").eq(currentSlide).addClass("active");
  $(".nav-links.desktop li").not(`:eq(${currentSlide})`).removeClass('active');
});

$('.logo').click(mainSlider, () => {
  mainSlider.slideTo(0, 1000, true);
})
$('.mobile-logo').click(mainSlider, () => {
  mainSlider.slideTo(0, 1000, true);
})
$('#slide1').click(mainSlider, () => {
  mainSlider.slideTo(0, 1000, true);
})
$('#slide2').click(mainSlider, () => {
  mainSlider.slideTo(1, 1000, true);
})
$('#slide3').click(mainSlider, () => {
  mainSlider.slideTo(2, 1000, true);
})
$('#slide4').click(mainSlider, () => {
  mainSlider.slideTo(3, 1000, true);
})
$('#slide5').click(mainSlider, () => {
  mainSlider.slideTo(4, 1000, true);
})
$('#slide6').click(mainSlider, () => {
  mainSlider.slideTo(5, 1000, true);
})

$('#slide1-mob').click(mainSlider, () => {
  mainSlider.slideTo(0, 1000, true);
  hamburger();
})
$('#slide2-mob').click(mainSlider, () => {
  mainSlider.slideTo(1, 1000, true);
  hamburger();
})
$('#slide3-mob').click(mainSlider, () => {
  mainSlider.slideTo(2, 1000, true);
  hamburger();
})
$('#slide4-mob').click(mainSlider, () => {
  mainSlider.slideTo(3, 1000, true);
  hamburger();
})
$('#slide5-mob').click(mainSlider, () => {
  mainSlider.slideTo(4, 1000, true);
  hamburger();
})
$('#slide6-mob').click(mainSlider, () => {
  mainSlider.slideTo(5, 1000, true);
  hamburger();
})

//ABOUT HORIZONTAL CONTAINER
const swiperAbout = new Swiper('#swiperAboutH', {
  navigation: {
    nextEl: '.about-right',
    prevEl: '.about-left'
  },
  spaceBetween: 50,
  draggable: true,
  grabCursor: true,
  slidesPerView: 1,
  updateOnWindowResize: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }
});

//WORKSHOP HORIZONTAL CONTAINER
const swiperWorkshop = new Swiper('#swiperWorkshopH', {
  navigation: {
    nextEl: '.workshop-right',
    prevEl: '.workshop-left'
  },
  grabCursor: true,
  breakpoints: {
    600: {
      slidesPerView: 1
    },
    999: {
      slidesPerView: 2
    }
  },
  slidesPerView: 1,
  updateOnWindowResize: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }
});

//CLIENTS HORIZONTAL CONTAINER
const swiperClients = new Swiper('#swiperClientsH', {
  navigation: {
    nextEl: '.clients-right',
    prevEl: '.clients-left'
  },
  draggable: true,
  grabCursor: true,
  breakpoints: {
    600: {
      slidesPerView: 1
    },
    999: {
      slidesPerView: 2
    }
  },
  slidesPerView: 1,
  updateOnWindowResize: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }
});

//CONTACT HORIZONTAL CONTAINER
const swiperContact = new Swiper('#swiperContactH', {
  navigation: {
    nextEl: '.contact-right',
    prevEl: '.contact-left'
  },
  pagination: {
    draggable: true,
  },
  draggable: true,
  grabCursor: true,
  slidesPerView: 1,
  on: {
    slideChangeTransitionEnd: function () {
      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }
});

//SERVICES HORIZONTAL CONTAINER
const swiperServices = new Swiper('#swiperServicesH', {
  spaceBetween: 50,
  navigation: {
    nextEl: '.services-right',
    prevEl: '.services-left'
  },
  pagination: {
    draggable: true,
  },
  draggable: true,
  grabCursor: true,
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 1
    },
    999: {
      slidesPerView: 2
    }
  },
  updateOnWindowResize: true,
  on: {
    slideChangeTransitionEnd: function () {
      if (this.isEnd) {
        this.navigation.$nextEl.addClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      } else if (this.isBeginning) {
        this.navigation.$prevEl.addClass('hide');
        this.navigation.$nextEl.removeClass('hide');
      } else {
        this.navigation.$nextEl.removeClass('hide');
        this.navigation.$prevEl.removeClass('hide');
      }
    }
  }

});

//SERVICES VERTICAL CONTAINER 1
const swiperServices1 = new Swiper('#swipeV1', {
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
  loop: true,
  slidesPerView: 1,
  direction: 'vertical',
  navigation: {
    nextEl: '#swipeV1Down',
    prevEl: '#swipeV1Up'
  },
  updateOnWindowResize: true
});

//SERVICES VERTICAL CONTAINER 2
const swiperServices2 = new Swiper('#swipeV2', {
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
  loop: true,
  slidesPerView: 1,
  direction: 'vertical',
  navigation: {
    nextEl: '#swipeV2Down',
    prevEl: '#swipeV2Up'
  },
  updateOnWindowResize: true
});

//SERVICES VERTICAL CONTAINER 3
const swiperServices3 = new Swiper('#swipeV3', {
  spaceBetween: 50,
  autoplay: {
    delay: 3000,
  },
  allowTouchMove: false,
  loop: true,
  slidesPerView: 1,
  direction: 'vertical',
  navigation: {
    nextEl: '#swipeV3Down',
    prevEl: '#swipeV3Up'
  },
  updateOnWindowResize: true
});

let intro = gsap.timeline({
  defaults: {
    ease: "expo.inOut",
  }
});

$('#toMail').click(swiperContact, (e) => {
  e.preventDefault();
  swiperContact.slideTo(2, 1000, true);
});

$(document).ready( ()=> {
  intro.to('.first', {
    duration: 2,
    height: '100%'
  }).to('.intro', 2, {
    top:'200%'
  }, '-=1').from('.logo', 1, {
    opacity: 0,
    y: -100,
    ease: 'power4'
  }, '-=1').from('.nav-links li', 1, {
    opacity: 0,
    x: 20,
    stagger: .1,
  }, '-=1.5')
})


const form = $('form');
const nameGroup = $('#nameGroup');
const mailGroup = $('#mailGroup');
const phoneGroup = $('#phoneGroup');
const textGroup = $('#textGroup');

const name = $('#name');
const mail = $('#mail');
const phone = $('#phone');
const text = $('#text');

const nameError = $('#nameError');
const mailError = $('#mailError');
const phoneError = $('#phoneError');
const textError = $('#textError');

const submit = $('#submit')

var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regex2 = /^[0-9 -+]+$/;

form.submit((e) => {
  e.preventDefault();
})

submit.click((e) => {
  e.preventDefault();

  if (name.val().length == 0) {
    nameGroup.addClass('error');
    nameError.text('*Popunite ovo polje');
  } else if (name.val().length < 4) {
    nameGroup.addClass('error');
    nameError.text('*Unesite pravo ime');
  } else {
    nameGroup.removeClass('error');
    nameError.text('');
  }

  if (mail.val().length == 0) {
    mailGroup.addClass('error');
    mailError.text('*Popunite ovo polje');
  } else if (regex.test(mail.val()) == true) {
    mailGroup.removeClass('error');
    mailError.text('');
  } else {
    mailGroup.addClass('error');
    mailError.text('*Unesite pravi mail');
  }

  if (phone.val().length == 0) {
    phoneGroup.addClass('error');
    phoneError.text('*Popunite ovo polje');
  } else if (regex2.test(phone.val()) == true) {
    phoneGroup.removeClass('error');
    phoneError.text('');
  } else {
    phoneGroup.addClass('error');
    phoneError.text('*Unesite pravi broj');
  }

  if (text.val().length == 0) {
    textGroup.addClass('error');
    textError.text('*Popunite ovo polje');
  } else if (text.val().length < 10) {
    textGroup.addClass('error');
    textError.text('Poruka je prekratka');
  } else {
    textGroup.removeClass('error');
    textError.text('');
  }

  if ($('.group').hasClass('error')) {
    return false;
  } else {

    nameVal = name.val();
    mailVal = mail.val();
    phoneVal = phone.val();
    textVal = text.val();
    submitval = submit.val();

    $.ajax({
      type: 'post',
      url: './kontaktForm.php',
      data: {
        'name': nameVal,
        'mail': mailVal,
        'phone': phoneVal,
        'msg': textVal,
        'submit': submitval
      },
      success: function (response) {
        if (response == 'Poruka poslana!') {
          submit.fadeOut();
          $('.response').text(response);
          $('.response').fadeIn();
          console.log(response);
        } else {
          alert(response);
        }
      }
    });
  }
})

name.focusout(() => {
  if (name.val().length == 0) {
    nameGroup.removeClass('invalid');
    nameError.text('');
  } else if (name.val().length < 4) {
    nameGroup.addClass('error');
    nameError.text('*Unesite pravo ime');
  } else {
    nameGroup.removeClass('error');
    nameError.text('');
  }
});

mail.focusout(() => {
  if (mail.val().length == 0) {
    mailGroup.removeClass('error');
    mailError.text('');
  } else if (regex.test(mail.val()) == true) {
    mailGroup.removeClass('error');
    mailError.text('');
  } else {
    mailGroup.addClass('error');
    mailError.text('*Unesite pravi mail');
  }
});

phone.focusout(() => {
  if (phone.val().length == 0) {
    phoneGroup.removeClass('error');
    phoneError.text('');
  } else if (regex2.test(phone.val()) == true) {
    phoneGroup.removeClass('error');
    phoneError.text('');
  } else {
    phoneGroup.addClass('error');
    phoneError.text('*Unesite pravi broj');
  }
});

text.focusout(() => {
  if (text.val().length == 0) {
    textGroup.removeClass('error');
    textError.text('');
  } else if (text.val().length < 10) {
    textGroup.addClass('error');
    textError.text('Poruka je prekratka');
  } else {
    textGroup.removeClass('error');
    textError.text('');
  }
});