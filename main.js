$(document).ready(function () {
    $('.client-carousel').owlCarousel({
      loop: true,
      margin: 0,
      nav: false,
      dots: false,
      pagination: false,
      autoHeight: false,
      items: 1
    });
    $('.customNextBtn').click(function() {
        $('.client-carousel').trigger('next.owl.carousel');
    })
    $('.customPrevBtn').click(function() {
        $('.client-carousel').trigger('prev.owl.carousel', [300]);
    })
    $('.brands-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        items: 1
      });
    $('.right-brand').click(function() {
        $('.brands-carousel').trigger('next.owl.carousel');
    })
    $('.left-brand').click(function() {
        $('.brands-carousel').trigger('prev.owl.carousel', [300]);
    })
    $('#product_discovery').on('click', function (e) {
        $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");
        $('.services-tags').removeClass("border-blue").addClass("border-gray");
        $('.services-tags').removeClass("shadow-md");
        $('.services-tags > p').removeClass("text-blue");
        $('#product_discovery').removeClass("border-gray").addClass("border-blue shadow-md");
        $("#product_discovery > img").attr("src","./icons/lightbulb_blue.svg");
        $('#product_discovery > p').addClass("text-blue");
        $('.services').hide();
        $('.product_discovery').fadeIn();
        const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#pds").offset().top
          }, 500);
        }
        
    });
    $('#web_development').on('click', function (e) {
        $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");
        $('.services-tags').removeClass("border-blue").addClass("border-gray");
        $('.services-tags').removeClass("shadow-md");
        $('.services-tags > p').removeClass("text-blue");
        $('#web_development').removeClass("border-gray").addClass("border-blue shadow-md");
        $("#web_development > img").attr("src","./icons/code.svg");
        $('#web_development > p').addClass("text-blue");
        $('.services').hide();
        $('.web_development').fadeIn();
        const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#web").offset().top
          }, 500);
        }
    });
    $('#mobile_dev').on('click', function (e) {
      $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");  
      $('.services-tags').removeClass("border-blue").addClass("border-gray");
      $('.services-tags').removeClass("shadow-md");
      $('.services-tags > p').removeClass("text-blue");
      $('#mobile_dev').removeClass("border-gray").addClass("border-blue shadow-md");
      $("#mobile_dev > img").attr("src","./icons/mobile_blue.svg");
      $('#mobile_dev > p').addClass("text-blue");
      $('.services').hide();
      $('.mobile_dev').fadeIn();
      const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#md").offset().top
          }, 500);
        }
    });
    $('#mvp_dev').on('click', function (e) {
      $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");
      $('.services-tags').removeClass("border-blue").addClass("border-gray");
      $('.services-tags').removeClass("shadow-md");
      $('.services-tags > p').removeClass("text-blue");
      $('#mvp_dev').removeClass("border-gray").addClass("border-blue shadow-md");
      $("#mvp_dev > img").attr("src","./icons/mvp_blue.svg");
      $('#mvp_dev > p').addClass("text-blue");
      $('.services').hide();
      $('.mvp_dev').fadeIn();
      const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#mvpd").offset().top
          }, 500);
        }
    });
    $('#scrum').on('click', function (e) {
      $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");   
      $('.services-tags').removeClass("border-blue").addClass("border-gray");
      $('.services-tags').removeClass("shadow-md");
      $('.services-tags > p').removeClass("text-blue");
      $('#scrum').removeClass("border-gray").addClass("border-blue shadow-md");
      $("#scrum > img").attr("src","./icons/sportsblue.svg");
      $('#scrum > p').addClass("text-blue");
      $('.services').hide();
      $('.scrum').fadeIn();
      const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#sc").offset().top
          }, 500);
        }
    });
    $('#product_design').on('click', function (e) {
      $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");  
      $('.services-tags').removeClass("border-blue").addClass("border-gray");
      $('.services-tags').removeClass("shadow-md");
      $('.services-tags > p').removeClass("text-blue");
      $('#product_design').removeClass("border-gray").addClass("border-blue shadow-md");
      $("#product_design > img").attr("src","./icons/design_blue.svg");
      $('#product_design > p').addClass("text-blue");
      $('.services').hide();
      $('.product_design').fadeIn();
      const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#pd").offset().top
          }, 500);
        }
    });
    $('#user_testing').on('click', function (e) {
      $("#user_testing > img").attr("src","./icons/bug.svg"); $("#product_discovery > img").attr("src","./icons/light.svg"); $("#web_development > img").attr("src","./icons/code_black.svg"); $("#mobile_dev > img").attr("src","./icons/developermode.svg"); $("#mvp_dev > img").attr("src","./icons/military.svg"); $("#scrum > img").attr("src","./icons/sportsblack.svg"); $("#product_design > img").attr("src","./icons/designservice.svg");
      $('.services-tags').removeClass("border-blue").addClass("border-gray");
      $('.services-tags').removeClass("shadow-md");
      $('.services-tags > p').removeClass("text-blue");
      $('#user_testing').removeClass("border-gray").addClass("border-blue shadow-md");
      $("#user_testing > img").attr("src","./icons/bug_blue.svg");
      $('#user_testing > p').addClass("text-blue");
      $('.services').hide();
      $('.user_testing').fadeIn();
      const windowWidth = $(window).width();
        if (windowWidth < 900) {
          $('html, body').animate({
            scrollTop: $("#ut").offset().top
          }, 500);
        }
    });
    $('.mobile-nav').on('click', function (e) {
      e.stopImmediatePropagation();
      $('.nav-body').slideToggle();
      $("body").css("overflow", "hidden");
    });
    $('body').on('click', function () {
      $("body").css("overflow", "scroll");
      const windowWidth = $(window).width();
      if (windowWidth < 768) {
        $('.nav-body').slideUp();
      }
    });

    // changes
    $(window).scroll(function () { 
        const windowWidth = $(window).width();
        if (windowWidth > 900) {
            if ($(this).scrollTop() >= 300) {
                $('.nav-body').slideUp();
                $('.desktop-bars').slideDown();
            } 
            else if ($(this).scrollTop() < 300){
              $('.desktop-bars').slideUp();
              $('.nav-body').slideDown();
            } 
        } else{
            if ($(this).scrollTop() >= 80) {
                $(".sm-logo").hide();
                $(".mobile-header").addClass("justify-end");
                $(".mobile-header").removeClass("justify-between");
                $(".mobile-header").addClass("py-5");
                $(".mobile-header").removeClass("py-3");
            } 
            else if ($(this).scrollTop() < 80){
                $(".sm-logo").slideDown();
                $(".mobile-header").addClass("justify-between");
                $(".mobile-header").removeClass("justify-end");
                $(".mobile-header").removeClass("py-5");
                $(".mobile-header").addClass("py-3");

            } 

        }
    });

    $('.desktop-bars').on('click', function (e) {
      e.stopImmediatePropagation();
      $(this).slideUp();
      $('.nav-body').slideDown();
    });

    $('.startup, .Agile, .Corporate').on('click', function (e) {
      $('.project').removeClass("border-b-blue");
      $('.project').removeClass("border-b-mate");
      $('.project').addClass("border-b-mate");
      $(this).addClass('border-b-blue');
    });
    // ...

  });