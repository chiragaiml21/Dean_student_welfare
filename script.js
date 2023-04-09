let btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");


btn.onclick= function(){
    sidebar.classList.toggle("active");
}



function toggleTab(tabId) {
    var tab = document.getElementById(tabId);
    var content = document.getElementById("content" + tabId.slice(3));
    
    // Get references to all the tabs and contents
    var allTabs = document.querySelectorAll(".tab");
    var allContents = document.querySelectorAll(".content");
    
    // Add a click event listener to the document
    document.addEventListener("click", function(event) {
      // Check if the target element is the current tab or its content
      if (event.target !== tab && event.target !== content) {
        // If it's not, hide the currently active tab and its content
        for (var i = 0; i < allTabs.length; i++) {
          if (allTabs[i].classList.contains("active")) {
            allTabs[i].classList.remove("active");
            allContents[i].classList.remove("active");
          }
        }
      }
    });
    
    // Toggle the current tab and its content
    tab.classList.toggle("active");
    content.classList.toggle("active");
    view();
  }
  



const divToHide = document.getElementById("d_content");

// add an event listener to the window object
window.addEventListener("click", function(event) {
  // check if the clicked element is inside the div to hide
  if (!divToHide.contains(event.target)) {
    // if clicked outside, hide the div
    divToHide.style.display = "none";
  }
});



// -----------------------dropdown------------------------

function view(){
    if(document.getElementById("d_cont").style.display==="block"){
        document.getElementById("d_cont").style.display="none";
        
    }

    else{
        document.getElementById("d_cont").style.display="block";

    }
}
