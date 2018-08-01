(function () {
  "use strict";
  var cssHrefNormal = '../static/css/webfont.css';

  function on(el, ev, callback) {
    if (el.addEventListener) {
      el.addEventListener(ev, callback, false);
  } else if (el.attachEvent) {
      el.attachEvent("on" + ev, callback);
    }
  }

  if ((window.localStorage && localStorage.font_css_cache) || document.cookie.indexOf('font_css_cache') > -1) injectFontsStylesheet();
  else on(window, "load", injectFontsStylesheet);

  function injectFontsStylesheet() {
    var stylesheet = document.createElement('link');
    stylesheet.href = cssHrefNormal;
    stylesheet.rel = 'stylesheet';
    stylesheet.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(stylesheet);
    document.cookie = "font_css_cache";
  }

}());