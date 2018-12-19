var burger = {
    burgerInit: function() {
        var $burgerBtn = $('.burger-btn'),
            $menu = $('.menu'),
            $body = $('body'),
            topPosition;

        if (!$burgerBtn.length) {
            return;
        }

        $burgerBtn.on('click', function() {
            if(!$body.hasClass('home-page')){
                removeBodyScroll();
                console.log(111);
            }
            burgerHandler.call(this);
        });

        function burgerHandler(){
          $(this).toggleClass('active');
          $menu.toggleClass('active');
          $body.toggleClass('menu-active');
        }

        function removeBodyScroll() {
          var body = $('body');
          if (!body.hasClass('menu-active')) {
              topPosition = $(window).scrollTop();
              $('#wrapper').css('top', - topPosition);
          } else {
              setTimeout(function () {
                  $(window).scrollTop(topPosition);
                  $('#wrapper').removeAttr( 'style' );
              }, 0);
          }
        }

    }

};

export default burger;