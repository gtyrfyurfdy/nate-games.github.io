// Stackoverflow didnt work and earned the L
window.onload = function() {
    document.getElementsByTagName("a").target = "_blank"; 
}


// But this... it earned the W
window.onload = function() {
    var anchorElements = document.getElementsByTagName("a");
    for (var i = 0; i < anchorElements.length; i++) {
        anchorElements[i].target = "_blank";
    }
}