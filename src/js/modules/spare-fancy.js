var spareFancy = {
    spareFancyInit: function() {
        var $spareModal = $('[data-spare-parts="spare"]');

        if (!$spareModal.length) {
            return;
        }

        $spareModal.fancybox({
            baseClass: "content-modal",
            touch: false,
        });
    }

};

export default spareFancy;