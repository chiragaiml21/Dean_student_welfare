function view(){
    if(document.getElementById("add_form").style.display=="none"){
        document.getElementById("add_form").style.display="block";
        document.getElementById("add_form").style.transition="0.2s";
    
    }
    else{
        document.getElementById("add_form").style.display="none";
    }
}


let btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");


btn.onclick= function(){
    sidebar.classList.toggle("active");
}

let currentImageIndex = 0;
  const carouselImages = document.querySelectorAll('#image-carousel img');
  setInterval(() => {
    carouselImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % carouselImages.length;
    carouselImages[currentImageIndex].classList.add('active');
  }, 4000);

