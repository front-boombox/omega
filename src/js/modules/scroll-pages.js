var scrollPages = {
    scrollPagesInit: function() {
        var $fullSectionWrap = $('.full-section'),
            $secondSectionWrap = $('.second-section'),
            $body = $('body'),
            $scrollUpBtn = $('.scroll-up'),
            $scrollDownBtn = $('.scroll-down');

        if (!$fullSectionWrap.length) {
            return;
        }

        var lastScrollTop = 0;
        $(window).scroll(function(event){
            var st = $(this).scrollTop(),
                $secondSectionWrapTop = $secondSectionWrap.offset().top;
            if (st > lastScrollTop){
                // downscroll code
                if(st > 0){
                    $body.addClass('hide-section');
                    $fullSectionWrap.fadeOut(1000);
                }
            } else {
                // upscroll code
                if(st <= $secondSectionWrapTop){
                    $body.removeClass('hide-section');
                    $fullSectionWrap.fadeIn(1000);
                }
            }
            lastScrollTop = st;
        });

        $scrollUpBtn.on('click', function(){
            $body.removeClass('hide-section');
        });

        $scrollDownBtn.on('click', function(){
            $body.addClass('hide-section');
        });
    }

};

export default scrollPages;