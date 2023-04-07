let btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");
let searchBtn = document.querySelector("#search");

btn.onclick= function(){
    sidebar.classList.toggle("active");
}
searchBtn.onclick= function(){
    sidebar.classList.toggle("active");
}


function toggleTab(tabId) {
var tab = document.getElementById(tabId);
var content = document.getElementById("content" + tabId.slice(3));

tab.classList.toggle("active");
content.classList.toggle("active");
}

