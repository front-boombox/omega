var scrollPages = {
    scrollPagesInit: function() {
        var $fullSectionWrap = $('.full-section');

        if (!$fullSectionWrap.length) {
            return;
        }

        var delay = 2000;
        var timeoutId;
        var animationIsFinished = false;

        $.scrollify({
            section: ".full-section",
            sectionName: "section-name",
            easing: "easeOutExpo",
            scrollSpeed: 500,
            scrollbars: false,
            updateHash: false,
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
                    } else if(index === 2){
                        $.scrollify.move("#first");
                    }
                }, delay);
                return animationIsFinished;
            },
        });

    }

};

export default scrollPages;