var scrollPages = {
    scrollPagesInit: function() {
        var $fullSectionWrap = $('.full-section');

        if (!$fullSectionWrap.length) {
            return;
        }

        var delay = 1000;
        var timeoutId;
        var animationIsFinished = false;

        $.scrollify({
            section: ".full-section",
            sectionName: "section-name",
            easing: "easeOutExpo",
            scrollSpeed: 500,
            updateHash: false,
            overflowScroll: true,
            before: function(index) {
                let items = $('.full-section');
                let item = $($('.full-section').get(index));
                items.removeClass('selected');
                item.addClass('selected');

                clearTimeout(timeoutId);
                timeoutId = setTimeout(function(){
                    animationIsFinished = true;
                    if(index === 1){
                        $.scrollify.move("#second");
                        $('.header').addClass('header-dark');
                    } else if(index === 0){
                        $.scrollify.move("#first");
                        $('.header').removeClass('header-dark');
                    }
                }, delay);
                return animationIsFinished;
            },
        });

    }

};

export default scrollPages;