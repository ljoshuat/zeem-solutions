//nav underline function
function moveLine(myLine) {
    var myDistance = myLine.offset().left - $(".navbar_link").offset().left;
    var myWidth = myLine.width();
  
    $(".nav_underline").css({
      width: myWidth + "px",
      transform: "translateX(" + myDistance + "px"
    });
  }
  
  if ($(".w--current p").length > 0) {
    moveLine($(".w--current p"));
  }
  
  $(".navbar_link").mouseenter(function () {
    moveLine($(this).find("p"));
  });
  
  $(".navbar_link").mouseleave(function () {
    if ($(".w--current p").length > 0) {
      moveLine($(".w--current p"));
    } else {
      $(".nav_underline").css("width", "0px");
    }
  });
  
  // swiper JS - Hero Homepage Slides //
  var mySwiper = new Swiper(".swiper_home-hero", {
    slidesPerView: 1,
    //effect: "fade",
    //crossFade: true,
    autoPlay: true,
    loop: true,
    autoplay: {
      delay: 3500
    },
    pagination: {
      el: ".home-hero-slider",
      dynamicBullets: false,
      clickable: true
    },
  
    slidesPerGroup: 1,
    grabCursor: true,
    a11y: false,
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow",
      prevEl: "#left-arrow"
    }
  });
  
  // swiper JS - Testimonials Homepage Slides //
  var mySwiper = new Swiper(".swiper_testimonials", {
    slidesPerView: 1,
    //effect: "fade",
    //crossFade: false,
    autoPlay: true,
    loop: true,
    autoplay: {
      delay: 3500
    },
    pagination: {
      el: ".testimonials-slider",
      dynamicBullets: false,
      clickable: true
    },
  
    slidesPerGroup: 1,
    grabCursor: true,
    a11y: false,
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow-testimonial",
      prevEl: "#left-arrow-testimonial"
    }
  });
  
  // swiper JS - Vehicles Homepage Slides //
  var mySwiper = new Swiper(".swiper_vehicles-home", {
    slidesPerView: 3,
    //effect: "fade",
    //crossFade: false,
    //autoPlay: true,
    loop: true,
  
    pagination: {
      el: ".products-slider",
      dynamicBullets: false,
      clickable: true
    },
  
    slidesPerGroup: 3,
    grabCursor: true,
    a11y: true,
    spaceBetween: 50,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow-products",
      prevEl: "#left-arrow-products"
    },
  
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1
      },
      767: {
        /* when window >= 767px - webflow tablet */
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 0
      },
      992: {
        /* when window >= 988px - webflow desktop */
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 50
      }
    }
  });
  
  // swiper JS - Press Slider Homepage Slides //
  var mySwiper = new Swiper(".press-logos", {
    slidesPerView: 5,
    //effect: "fade",
    //crossFade: false,
    autoPlay: true,
    loop: true,
    autoplay: {
      delay: 3500
    },
    pagination: {
      el: ".press-slider",
      dynamicBullets: false,
      clickable: true
    },
  
    slidesPerGroup: 5,
    grabCursor: true,
    a11y: false,
    spaceBetween: 0,
    allowTouchMove: true,
    navigation: {
      nextEl: "#right-arrow-testimonial",
      prevEl: "#left-arrow-testimonial"
    },
  
    breakpoints: {
      0: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 0,
        slidesPerView: 2,
        slidesPerGroup: 2
      },
      480: {
        /* when window >=0px - webflow mobile landscape/portriat */
        spaceBetween: 20,
        slidesPerView: 3,
        slidesPerGroup: 3
      },
      767: {
        /* when window >= 767px - webflow tablet */
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20
      },
      992: {
        /* when window >= 988px - webflow desktop */
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 0
      }
    }
  });
  
  //detect if scrolled to top of screen for navbar
  $(window).scroll(function () {
    var div1Pos = $("#navbar").offset().top;
    var div2Pos = $("#homepage-hero").offset().top;
  
    if (div1Pos <= div2Pos) {
      $("#navbar").css("background-color", "transparent");
    }
  });
  
  // Add commas on the pricing for vehicles
  $(".vehicle-price-value").each(function () {
    // Retrieve the initial value from the text box
    var initialValue = $(this).text();
  
    // Format the initial value with commas
    var formattedValue = formatNumber(initialValue);
  
    // Update the text box value with the formatted number
    $(this).text(formattedValue);
  });
  
  function formatNumber(number) {
    // Split the number into integer and decimal parts
    var parts = number.split(".");
    var integerPart = parts[0];
    var decimalPart = parts[1] || "";
  
    // Remove any existing commas and non-digit characters from integer part
    var sanitizedIntegerPart = integerPart.replace(/[^0-9]/g, "");
  
    // Add commas every three digits from the right in the integer part
    var formattedIntegerPart = sanitizedIntegerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  
    // Combine the formatted integer part with the decimal part
    var formattedValue =
      formattedIntegerPart + (decimalPart !== "" ? "." + decimalPart : "");
  
    return formattedValue;
  }
  
  //Accordion function
  
  var accordion = (function () {
    var $accordion = $(".js-accordion");
    var $accordion_header = $accordion.find(".js-accordion-header");
    var $accordion_item = $(".js-accordion-item");
  
    // default settings
    var settings = {
      // animation speed
      speed: 400,
  
      // close all other accordion items if true
      oneOpen: false
    };
  
    return {
      // pass configurable object literal
      init: function ($settings) {
        $accordion_header.on("click", function () {
          accordion.toggle($(this));
        });
  
        $.extend(settings, $settings);
  
        // ensure only one accordion is active if oneOpen is true
        if (settings.oneOpen && $(".js-accordion-item.active").length > 1) {
          $(".js-accordion-item.active:not(:first)").removeClass("active");
        }
  
        // reveal the active accordion bodies
        $(".js-accordion-item.active").find("> .js-accordion-body").show();
      },
      toggle: function ($this) {
        if (
          settings.oneOpen &&
          $this[0] !=
            $this
              .closest(".js-accordion")
              .find("> .js-accordion-item.active > .js-accordion-header")[0]
        ) {
          $this
            .closest(".js-accordion")
            .find("> .js-accordion-item")
            .removeClass("active")
            .find(".js-accordion-body")
            .slideUp();
        }
  
        // show/hide the clicked accordion item
        $this.closest(".js-accordion-item").toggleClass("active");
        $this.next().stop().slideToggle(settings.speed);
      }
    };
  })();
  
  $(document).ready(function () {
    accordion.init({ speed: 300, oneOpen: true });
  });
  
  // Accordion highlighter function
  $(".accordion__item").hover(function () {
    $(this).find(".highlight-green").toggleClass("full-highlighter");
  });
  
  // Password Protect Funtion
  // When a key is released in the text field
  
  //make the password screen visible
  $(".password-wrapper").css("display", "flex");
  
  $("#password-protect").submit(function () {
    return false;
  });
  $("#submitButton").css("pointer-events", "none");
  $("#password-entry-2").keyup(function () {
    // Get the value entered by the user in the text field
    var userInput = $(this).val();
  
    // Check if the entered value is "password"
    if (userInput === "zeemsolutions") {
      // Enable the submit button
      $("#submitButton").css("pointer-events", "auto");
      $("#submitButton").removeClass("disable");
    } else {
      // Disable the submit button
      $("#submitButton").css("pointer-events", "none");
    }
  });
  
  $("#submitButton").click(function () {
    // Remove the #password-wrapper element from the DOM
    $("#password-wrapper").remove();
    Cookies.set("password", "Yes", { expires: 1 });
  });
  
  // Get a cookie
  Cookies.get("passwordYes");
  
  // Check a cookie
  if (Cookies.get("password") == "Yes") {
    $("#password-wrapper").remove();
  }
  
  // Delete a cookie
  Cookies.remove("cookieName");
  
  // if (Cookies.get("notificationBanner") == "Close Banner") {
  //   $(".notification-banner-wrapper").addClass("hide");
  // }
  
  // $(".close").on("click", function () {
  //   $(".notification-banner-wrapper").addClass("not-active");
  //   Cookies.set("notificationBanner", "Close Banner", { expires: 1 });
  // });
  