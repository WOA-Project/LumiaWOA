if (!'loading' in HTMLImageElement.prototype) {
    const script = document.createElement('script');
    script.src = "/js/lazysizes.min.js";
    document.body.appendChild(script);
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").classList.add("scrolled");
  } else {
    document.getElementById("navbar").classList.remove("scrolled");
  }
}