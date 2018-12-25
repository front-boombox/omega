// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

import scrollPages from './modules/scroll-pages';
import muteVideo from './modules/mute-video';
import removeScroll from './modules/remove-scroll';
import burger from './modules/burger';
import timelineSlider from './modules/timeline';
import headerFixed from './modules/header-fixed';
import spareFancy from './modules/spare-fancy';
import customScroll from './modules/custom-scroll';
import countAnimate from './modules/count-animate';

( ($) => {
  'use strict';

  // When DOM is ready
  $(() => {
    scrollPages.scrollPagesInit();
    muteVideo.muteVideoInit();
    removeScroll.removeScrollInit();
    burger.burgerInit();
    timelineSlider.timelineSliderInit();
    headerFixed.headerFixedInit();
    spareFancy.spareFancyInit();
    customScroll.customScrollInit();
    countAnimate.countAnimateInit();
  });

})(jQuery);