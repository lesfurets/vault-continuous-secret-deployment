// Trims white space for code elements
$('.prettyprint').each(function () {
  $(this).html($(this).html().trim());
});
$('.prettyprint .code').each(function () {
  $(this).html($(this).html().trim());
});

// Adds syntax highlight for more keywords
const keywords = ['vault']
const addKeywordsToSyntax = function (args) {
  // Add operator CSS classes
  $('.prettyprinted .pln').each(function () {
    if (keywords.includes($(this).text().trim())) {
      $(this).addClass('keyword');
    }
  });
}
// Callback after the code is pretty printed
window.exports = { 'prettyCallback': addKeywordsToSyntax };

// Add "hide" css class to footer when not fist or last slide
const setFooterVisibility = function() {
  const footer = document.getElementById('footer');
  setTimeout(function() {
    if (footer) {
      if (Reveal.isFirstSlide()) {
        footer.className = footer.className.replace('hide', 'show');
      } else {
        footer.className = footer.className.replace('show', 'hide');
      }
    }
  }, 500);
}
setFooterVisibility();
Reveal.addEventListener('slidechanged', function(event) { setFooterVisibility(); });

// Add "fullScreen" css class to body when reveal slide has light background
// (add data-background-color="#f3f3f3" to slide to activate fullscreen mode)
const setFullScreenMode = function() {
  setTimeout(function() {
    const body = document.getElementsByTagName('body')[0];
    const reveal = document.getElementById('reveal');
    if (body && reveal) {
      const isFullScreen = reveal.className.indexOf('has-light-background') !== -1;
      if (isFullScreen) {
        body.className = body.className.replace('noFullScreen', 'fullScreen');
      } else {
        body.className = body.className.replace('fullScreen', 'noFullScreen');
      }
    }
  }, 500);
}
setFullScreenMode();
Reveal.addEventListener('slidechanged', function(event) { setFullScreenMode(); });

