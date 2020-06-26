window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const header = document.querySelector(".site-header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    header.style.backgroundColor = "white";
    header.classList.add("has-shadow");
  } else {
    header.style.backgroundColor = "transparent";
    header.classList.remove("has-shadow");
  }
}