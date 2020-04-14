// require('es6-promise').polyfill();
"use strict";
require('nodelist-foreach-polyfill');
require('formdata-polyfill')

import tabs from '../functions/tabs.js';
import timer from '../functions/timer.js';
import modal from '../functions/modal.js';
import form from '../functions/form.js';
import slider from '../functions/slider.js';
import culc from '../functions/culc.js';

tabs();
timer();
modal();
form();
slider();
culc();

// if ('NodeList' in window && !NodeList.prototype.forEach) {
//    console.info('polyfill for IE11');
//    NodeList.prototype.forEach = function (callback, thisArg) {
//       thisArg = thisArg || window;
//       for (var i = 0; i < this.length; i++) {
//          callback.call(thisArg, this[i], i, this);
//       }
//    };
// }
