var countAnimate = {
    countAnimateInit: function() {
        var $spincrementWrap = $(".spincrement");

        if (!$spincrementWrap.length) {
            return;
        }

        $(window).on("load",function(){
            $spincrementWrap.spincrement({
                thousandSeparator: ' ',
                duration: 2000
            });
        });
    }

};

export default countAnimate;