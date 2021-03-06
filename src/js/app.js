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
import fancyModal from './modules/fancy-modal';
import customScroll from './modules/custom-scroll';
import countAnimate from './modules/count-animate';
import customSelect from './modules/custom-select';
import mapHandler from './modules/map';
import paginationHandler from './modules/pagination';

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
    fancyModal.fancyModalInit();
    customScroll.customScrollInit();
    countAnimate.countAnimateInit();
    customSelect.customSelectInit();
    mapHandler.mapHandlerInit();
    paginationHandler.paginationHandlerInit();
  });

})(jQuery);