var prevScrollpos = window.scrollY;
window.onscroll = function () {
  var currentScrollPos = window.scrollY;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("scrolltop").style.bottom = "1em";
  } else {
    document.getElementById("scrolltop").style.bottom = "-3em";
  }
  prevScrollpos = currentScrollPos;
};
