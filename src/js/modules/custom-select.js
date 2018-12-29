var customSelect = {
    customSelectInit: function() {
        var $customSelectWrap = $('.simple-select');

        if (!$customSelectWrap.length) {
            return;
        }

        jcf.setOptions('Select', {
            wrapNative: false,
            wrapNativeOnMobile: false,
            fakeDropInBody: false
        });

        jcf.replaceAll();

    }

};

export default customSelect;