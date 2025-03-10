// CODE FOR QUOTE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

 // Call the function to advance the slideshow
 window.onload = function (event) {
    setInterval(function () {
      plusSlides(1);
    }, 7500);
  };




  $(document).ready(function() {
    $('.w1').on('click', function(){
      $(".webCircle").removeClass("active");
      $('.w1').addClass("active");
      $(':root').css({'--current-color': '#EC3963'})
    
    })
    
    $('.w2').on('click', function(){
      $(".webCircle").removeClass("active");
      $('.w2').addClass("active");
      $(':root').css({'--current-color': '#BB67A3'});
    })
    
    $('.w3').on('click', function(){
      $(".webCircle").removeClass("active");
      $('.w3').addClass("active");
      $(':root').css({'--current-color': '#46A9D3'});
    
      })
  })

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


  // When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}




// VUE ON CLICK
const app = Vue.createApp({
  created () {
    fetch('courses.json').then(response => response.json()).then(json => {
          this.courses = json
          this.currentCourse = this.courses.web1;
    }),
    fetch('gallery.json').then(response => response.json()).then(json => {
      this.galleryKeys = json;
      this.currentGallery = this.galleryKeys.web1;
    })
  }, 
  data() {
    return {
    courses: {},
    currentCourse: {},
    galleryKeys: {},
    currentGallery: {},
    }
  },
  methods: {
    changeCurrentCourse(courseKey) {
      this.currentCourse = this.courses[courseKey];
      this.currentGallery = this.galleryKeys[courseKey]
    },
    chunkText(text) {
      let chars = text.split('');
      let initLength = chars.length;
      if (chars.length % 12 != 0) { 
        for (let i = 0; i < 12 - initLength; i++) {
          chars.push(" ");
        }
      }
      return chars
    },
    openLink(link) {
      window.open(link, "_blank")
    }
  }
  
}).mount("#app")
