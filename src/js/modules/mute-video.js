var muteVideo = {
    muteVideoInit: function() {
        var $videoWrap = $('.video-bg'),
            $soundBtn = $('.sound-btn');

        if (!$soundBtn.length) {
            return;
        }

        $soundBtn.on('click', switchMuteVideo);

        function switchMuteVideo(){
            if($videoWrap.prop('muted') === true){
                $videoWrap.prop('muted', false);
                $soundBtn.removeClass('muted');
            } else {
                $videoWrap.prop('muted', true);
                $soundBtn.addClass('muted');
            }
        }
    }

};

export default muteVideo;