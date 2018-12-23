var customScroll = {
    customScrollInit: function() {
        var $customScrollWrap = $(".custom-scroll");

        if (!$customScrollWrap.length) {
            return;
        }

        $(window).on("load",function(){
            $customScrollWrap.mCustomScrollbar();
        });
    }

};

export default customScroll;