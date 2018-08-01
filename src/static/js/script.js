// --------------------------------------------------------------------------------
// page script collection 
// --------------------------------------------------------------------------------

// menu section event 
var closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', handleNav);

var nav = document.getElementById('nav');
function handleNav () {
  nav.classList.toggle('show');
}

// internal link
var menuButtonList = document.querySelectorAll('.--menu');
menuButtonList = Array.from ? Array.from(menuButtonList) : Array.prototype.slice.call(menuButtonList);
menuButtonList.forEach((item, index) => {
  item.addEventListener('click', handleNav);
});


// GNB interactrion
(function () {
  // 시작지점은
  var target = document.getElementById('header');

  var startPosition = (function () {
    var element = document.querySelector('header.hero');
    return parseInt(element.offsetHeight || element.scrollHeight) 
  })();

  window.addEventListener('scroll',function () {
    var scrollPosition = window.pageYOffset;
    scrollPosition > startPosition ? target.classList.add('pykl--stick') : target.classList.remove('pykl--stick')
  });
  
})();
