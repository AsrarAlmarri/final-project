document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".nav");
  
    document.querySelector("#btnNav").addEventListener("click", () => {
        nav.classList.add("nav--open");
    });
  
    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
  });
  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }  

  let urlMenue = document.getElementById("cat");
  urlMenue.onchange= function() {
      let userOption = this.options[this.selectedIndex];

      if(userOption.value !="nothing"){
          window.open(userOption.value, "./starch.html", "");
      }
  }

  
