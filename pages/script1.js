var container = document.querySelector('.home_content');
var lastScrollTop = container.scrollTop;

container.addEventListener('scroll', function() {
  var currentScrollTop = container.scrollTop;
  var scrollDistance = Math.abs(currentScrollTop - lastScrollTop);
  if (scrollDistance < 10) {
    container.style.overflowAnchor = 'none';
  }
  lastScrollTop = currentScrollTop;
});
