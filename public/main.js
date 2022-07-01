window.onscroll = function () {
   myFunction();
};

var navbar = document.querySelector("nav");
var content = document.querySelector("main");
var mobNav = document.getElementById("mobileNav");

// Get the offset position of the navbar
var sticky_nav = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
   if (window.pageYOffset >= sticky_nav) {
      navbar.classList.add("sticky_nav");
      content.classList.add("main_content");

      // mobNav.classList.remove("overlay");
      mobNav.classList.add("overlay_scroll");
      //    footer.classList.add("footer_c");
   } else {
      navbar.classList.remove("sticky_nav");
      content.classList.remove("main_content");
      mobNav.classList.remove("overlay_scroll");
      //    footer.classList.remove("footer_c");
   }
}

// -------------------------- ACTIVE Nav LINK --------------------------

// Get the container element
var nav = document.querySelector("nav");

// Get all links with class="nav_link" inside the container
var nav_links = nav.getElementsByClassName("nav_link");

// Loop through the links and add the active_link class to the current/clicked link
for (var i = 0; i < nav_links.length; i++) {
   nav_links[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active_link");
      current[0].className = current[0].className.replace(" active_link", "");
      this.className += " active_link";
   });
}

// ----------------- Mobile Menu Function --------------
function openNav() {
   document.getElementById("mobileNav").style.width = "100%";
   document.getElementById("menu_btn").style.display = "none";
   document.getElementById("cross_btn").style.display = "flex";
}

function closeNav() {
   document.getElementById("mobileNav").style.width = "0%";
   document.getElementById("menu_btn").style.display = "flex";
   document.getElementById("cross_btn").style.display = "none";
}

// ------------------------Alert Close Button-------------------
function closeAlert() {
   document.getElementById("alert_box").style.display = "none";
}

// ---------------------- Product Details page scripts ---------------------

// Mobile  Product Gallery
$(".side_img_bar li").on("click", function (event) {
   var $pic = $(this).find("img");
   $("#main_img").attr("src", $pic.attr("src"));
   $(".side_img_bar li").removeClass("active_img");
   $(this).addClass("active_img");
});

// Review Images Enlargement
$(document).ready(function () {
   $(".review_imgs img").click(function () {
      this.requestFullscreen();
   });
});

// -------------------FAQs scripts for collapse-----------------------

$(document).ready(function () {
   $("#faq_btn_1").click(function () {
      $("#faq_content_1").slideToggle("slow");
   });
});

$(document).ready(function () {
   $("#faq_btn_2").click(function () {
      $("#faq_content_2").slideToggle("slow");
   });
});

$(document).ready(function () {
   $("#faq_btn_3").click(function () {
      $("#faq_content_3").slideToggle("slow");
   });
});

$(document).ready(function () {
   $("#faq_btn_4").click(function () {
      $("#faq_content_4").slideToggle("slow");
   });
});
