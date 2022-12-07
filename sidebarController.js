"use strict";

const watchSidebar = () => {
  if (window.innerWidth < 600 && $("#sidebar")[0].className != "active") {
    console.log("aplica a menor");
    $("#sidebar").toggleClass("active");
  }
  if (window.innerWidth > 600 && $("#sidebar")[0].className == "active") {
    console.log("aplica a mayor");
    $("#sidebar").toggleClass("active");
  }
};

window.onload = watchSidebar;
window.onresize = watchSidebar;
