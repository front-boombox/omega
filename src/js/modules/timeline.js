var timelineSlider = {
    timelineSliderInit: function() {
        var $timeLineWrap = $('.timeline-nav');

        if (!$timeLineWrap.length) {
            return;
        }

        $('.timeline-nav').slick({
            slidesToShow: 9,
            slidesToScroll: 1,
            asNavFor: '.timeline-slider',
            centerMode: false,
            focusOnSelect: true,
            mobileFirst: true,
            arrows: false,
            infinite:false,
            // prevArrow: $('.slick-prev'),
            // nextArrow: $('.slick-next'),
            responsive: [
                 {
                breakpoint: 768,
                settings: {
                  slidesToShow: 9,
                 }
                },
               {
                breakpoint: 0,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                }
              }
           ]
        });
        
         $('.timeline-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            asNavFor: '.timeline-nav',     
            centerMode: true,     
            infinite:false,
            centerPadding: '0px',
            cssEase: 'ease',
            edgeFriction: 0.5,
            mobileFirst: true,
            speed: 500,
            responsive: [
               {
                breakpoint: 0,
                settings: {
                    centerMode: false
                }
              },
                 {
                breakpoint: 768,
                settings: {
                    centerMode: true
                }
              }
           ]
        });
    }

};

export default timelineSlider;