var removeScroll = {
    removeScrollInit: function() {
        var $fullSectionWrap = $('.full-section');

        if (!$fullSectionWrap.length) {
            return;
        }

        $(window).on('DOMMouseScroll mousewheel', function (e) {
            if (true) {
                if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                    var $fullSectionWrap = $('.full-section');
                    $secondSectionWrap = $('.second-section');
                    $body = $('body');
                    if (!$body.hasClass("hide-section")) {
                        $body.addClass('hide-section');
                        $fullSectionWrap.fadeOut(1000);
                        $body.css({'overflow-y':'scroll'});
                    }
                    
                } 
            }
            return true;
        });
        $(document).bind('touchstart', function (e){
           ts = e.originalEvent.touches[0].clientY;
        });
        
        $(document).bind('touchend', function (e){
           var te = e.originalEvent.changedTouches[0].clientY;
           if(ts > te+10){
              var $fullSectionWrap = $('.full-section');
                    $secondSectionWrap = $('.second-section');
                    $body = $('body');
                    if (!$body.hasClass("hide-section")) {
                        $body.addClass('hide-section');
                        $fullSectionWrap.fadeOut(1000);
                        $body.css({'overflow-y':'scroll'});
                    }
           }
        });
    }

};

export default removeScroll;