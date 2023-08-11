// Responsive Navigation Bar 
var side_menu = document.getElementById("side-menu")
    var fa_bars = document.querySelector(".fa-bars")

function openmenu(){
    side_menu.style.right = "0";
    fa_bars.style.display = "none";
}
function closemenu(){
    side_menu.style.right = "-240px";
    fa_bars.style.display = "block";
}