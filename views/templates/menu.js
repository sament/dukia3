

window.onscroll = function() {stickyNav()};

  //var navbar = document.getElementById("stickyNav");
  //var sticky = navbar.offsetTop;

var firstNav = document.getElementById("topheader");
  var navbar = document.getElementById("stickyNav");
  var sticky = firstNav.offsetHeight;

  function stickyNav() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
    console.log("scrolling");
  }