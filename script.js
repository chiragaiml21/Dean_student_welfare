let btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");


btn.onclick= function(){
    sidebar.classList.toggle("active");
}



function toggleTab(tabId) {
var tab = document.getElementById(tabId);
var content = document.getElementById("content" + tabId.slice(3));

tab.classList.toggle("active");
content.classList.toggle("active");
}

