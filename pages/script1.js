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


// ---------------------hierarchy---------------------



const appear = document.querySelector('.appear'); 
const cb = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
    }else{
      entry.target.classList.remove('inview');
    }
  });
}
const io = new IntersectionObserver(cb);
io.observe(appear);




const items = document.querySelectorAll('.appear2');

const active = function(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
        entry.target.classList.add('inview2'); 
        }else{
            entry.target.classList.remove('inview2'); 
        }
    });
}
const io2 = new IntersectionObserver(active);
 for(let i=0; i < items.length; i++){
    io2.observe(items[i]);
 }


const appear3 = document.querySelector('.appear3'); 
const cb3 = function(entries){
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('inview');
      entry.unobserve(entry.target)
    }
  });
}
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);

// View Compiled


