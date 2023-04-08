let btn = document.querySelector(".menu_btn");
let sidebar = document.querySelector(".sidebar");


btn.onclick= function(){
    sidebar.classList.toggle("active");
}



function toggleTab(tabId) {
var tab = document.getElementById(tabId);
var content = document.getElementById("content" + tabId.slice(3));

// ---------tab closing problem---------

// tab.forEach(function (t) {
//     if (t.id !== tabId) {
//       t.classList.remove("active");
//     }
//   });
//   content.forEach(function (c) {
//     if (c.id !== "content" + tabId.slice(3)) {
//       c.classList.remove("active");
//     }
//   });


tab.classList.toggle("active");
content.classList.toggle("active");
}

