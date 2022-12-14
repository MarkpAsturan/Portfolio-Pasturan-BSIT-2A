var prevScrollpos = window.pageYOffset;
const nav = document.querySelector(".top_nav")
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
 if (window.pageYOffset == 0) {
    document.getElementById("top_navi").style.top = "0px";
    document.getElementById("navi_side").style.right = "-100px";
  } else {
    document.getElementById("top_navi").style.top = "-100px";
    document.getElementById("navi_side").style.right = "0px";
  }
  prevScrollpos = window.pageYOffset;
}



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting){
        entry.target.classList.add('show');
      }else{
        entry.target.classList.remove('show');
      }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));


function openNav() {
  document.getElementById("myNav").style.width = "50%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function openNav1() {
  document.getElementById("myNav1").style.width = "50%";
}

function closeNav1() {
  document.getElementById("myNav1").style.width = "0%";
}


function openNav2() {
  document.getElementById("myNav2").style.width = "50%";
}

function closeNav2() {
  document.getElementById("myNav2").style.width = "0%";
}






function openNav4() {
  document.getElementById("myNav4").style.width = "50%";
}

function closeNav4() {
  document.getElementById("myNav4").style.width = "0%";
}

function openNav5() {
  document.getElementById("myNav5").style.width = "50%";
}

function closeNav5() {
  document.getElementById("myNav5").style.width = "0%";
}


function openNav6() {
  document.getElementById("myNav6").style.width = "50%";
}

function closeNav6() {
  document.getElementById("myNav6").style.width = "0%";
}



let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}