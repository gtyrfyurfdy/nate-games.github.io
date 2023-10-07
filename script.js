// Stackoverflow didnt work and earned the L
window.onload = function () {
  document.getElementsByTagName("a").target = "_blank";
};

// But this... it earned the W
window.onload = function () {
  var anchorElements = document.getElementsByTagName("a");
  for (var i = 0; i < anchorElements.length; i++) {
    anchorElements[i].target = "_blank";
  }
};

// Stackoverflow earned its W back with "don't show this message again"
function closeMessage() {
  var checkBox = document.getElementById("dontShowAgain");
  var messageDiv = document.getElementById("message");

  if (checkBox.checked) {
    localStorage.setItem("dontShowMessageAgain", "true");
  }

  messageDiv.style.display = "none";
}

window.onload = function () {
  var dontShowAgain = localStorage.getItem("dontShowMessageAgain");
  var messageDiv = document.getElementById("message");
  var checkBox = document.getElementById("dontShowAgain");
  checkBox.checked = false; // Keeps it unchecked on page load

  if (dontShowAgain === "true") {
    messageDiv.style.display = "none";
  }
  if (window.location.pathname === "/*") {
    window.location.href = "/";
  }
};

function getPath() {
  const path = document.getElementById("path");
  path.textContent = window.location.pathname;
}
