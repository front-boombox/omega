var fancyModal = {
    fancyModalInit: function() {
        var $spareModal = $('[data-spare-parts="spare"]'),
            $actionsModal = $('.actions-modal-link');

        if ($spareModal.length || $actionsModal.length) {
            $spareModal.fancybox({
                baseClass: "content-modal",
                touch: false,
            });
    
            $actionsModal.fancybox({
                baseClass: "content-modal",
                touch: false,
            });
        } else {
            return;
        }
    }

};

export default fancyModal;