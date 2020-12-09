var slideIndex = 1;
let bool = true;

function cookieCheck() {
  if (Cookies.get("hahahaha-geen-cursor")) {
    document.body.style.cursor = "none"
    setTimeout(function() {
      alert("Het zit in de cookies, volgende keer niet zomaar een shell dichtgooien ;)")
    }, 10000);
    setTimeout(function() {
      Cookies.remove("hahahaha-geen-cursor", { path: '' });
      document.body.style.cursor = "auto";
    }, 10001);
  }
}

function openNav() {
  document.getElementById("sidenav-master").style.display = "block";
}

function closeNav() {
  document.getElementById("sidenav-master").style.display = "none";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changeCSS(cssLinkIndex, boolToChangeCookie) {
  bool = !bool;
  var cookieVal = Cookies.get("darkmode")
  if (boolToChangeCookie === 1) {
    Cookies.remove("darkmode", { path: '' })
    Cookies.set("darkmode", bool, { expires: 365 })
  }

  if (Cookies.get("darkmode") == "true") {
    setTimeout(function() {
      document.getElementById("logo").src = "assets/images/full-moon-logo.svg";
      document.getElementById("logo").width = 50;
    },1)
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "/assets/styles/dark.css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  } else if (Cookies.get("darkmode") == "false") {
    document.getElementById("logo").src = "assets/images/lua-logo.svg";
    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "/assets/styles/style.css");

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
  }
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("LuaQuote");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}