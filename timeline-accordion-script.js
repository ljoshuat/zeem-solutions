// Accordion Settings
const accSettings = {
    speed: 300, // Animation speed
    oneOpen: true, // Close all other accordion items if true
    offsetAnchor: true, // Activate scroll to top for active item
    offsetFromTop: 180, // In pixels – Scroll to top at what distance
    scrollTopDelay: 400, // In Milliseconds – Delay before scroll to top
  
    classes: {
      accordionTl: "tl-accordion",
      header: "tl-accordion-header",
      item: "tl-accordion-item",
      body: "tl-accordion-body",
      icon: "js-accordion-icon",
      active: "active"
    }
  };
  
  const prefix = accSettings.classes;
  
  const accordionTl = (function () {
    const accordionElem = $(`.${prefix.accordionTl}`);
    const accordionHeader = accordionElem.find(`.${prefix.header}`);
    const accordionItem = $(`.${prefix.item}`);
    const accordionBody = $(`.${prefix.body}`);
    const accordionIcon = $(`.${prefix.icon}`);
    const activeClass = prefix.active;
  
    return {
      // pass configurable object literal
      init: function (settings) {
        accordionHeader.on("click", function () {
          accordionTl.toggle($(this));
          if (accSettings.offsetAnchor) {
            setTimeout(() => {
              $("html").animate(
                { scrollTop: $(this).offset().top - accSettings.offsetFromTop },
                accSettings.speed
              );
            }, accSettings.scrollTopDelay);
          }
        });
  
        $.extend(accSettings, settings);
  
        // ensure only one accordion is active if oneOpen is true
        if (settings.oneOpen && $(`.${prefix.item}.${activeClass}`).length > 1) {
          $(`.${prefix.item}.${activeClass}:not(:first)`)
            .removeClass(activeClass)
            .find(`.${prefix.header} > .${prefix.icon}`)
            .removeClass(activeClass);
        }
        // reveal the active accordion bodies
        $(`.${prefix.item}.${activeClass}`).find(`> .${prefix.body}`).show();
      },
  
      toggle: function ($this) {
        if (
          accSettings.oneOpen &&
          $this[0] !=
            $this
              .closest(accordionElem)
              .find(`> .${prefix.item}.${activeClass} > .${prefix.header}`)[0]
        ) {
          $this
            .closest(accordionElem)
            .find(`> .${prefix.item}`)
            .removeClass(activeClass)
            .find(accordionBody)
            .slideUp(accSettings.speed);
          $this
            .closest(accordionElem)
            .find(`> .${prefix.item}`)
            .find(`> .${prefix.header} > .${prefix.icon}`)
            .removeClass(activeClass);
        }
  
        // show/hide the clicked accordion item
        $this
          .closest(accordionItem)
          .toggleClass(`${activeClass}`)
          .find(`> .${prefix.header} > .${prefix.icon}`)
          .toggleClass(activeClass);
        $this.next().stop().slideToggle(accSettings.speed);
      }
    };
  })();
  
  $(document).ready(function () {
    accordionTl.init(accSettings);
  });
  
  $(".tl-accordion-header").on("click", function () {
    setTimeout(function () {
      // Your code to be executed after 2 seconds
      $(".tl-accordion-item").each(function () {
        var $activeClass = $(this).find(".active");
        var $circleMain = $(this).find(".circle-main");
  
        if ($activeClass.length > 0) {
          $circleMain.addClass("pulse");
        } else {
          $circleMain.removeClass("pulse");
        }
      });
    }, 1000);
  });
  
  $(".tl-accordion-header").on("click", function () {
    var $clickedHeader = $(this);
    var $clickedCircleMain = $clickedHeader
      .closest(".tl-accordion-item")
      .find(".circle-main");
  
    setTimeout(function () {
      // Your code to be executed after 2 seconds
      $(".circle-main").not($clickedCircleMain).removeClass("pulse");
  
      // Find the active class within the parent .tl-accordion-item
      var $activeClass = $clickedHeader
        .closest(".tl-accordion-item")
        .find(".active");
  
      // Add or remove 'pulse' class based on the presence of .active class
      if ($activeClass.length > 0) {
        $clickedCircleMain.addClass("pulse");
        $clickedHeader.addClass("active");
      } else {
        $clickedCircleMain.removeClass("pulse");
        $clickedHeader.removeClass("active");
      }
    }, 1000);
  });
  