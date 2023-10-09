// Stackoverflow didnt work and earned the L
window.onload = function () {
  var dontShowAgain = localStorage.getItem("dontShowMessageAgain");
  var messageDiv = document.getElementById("message");
  var checkBox = document.getElementById("dontShowAgain");
  checkBox.checked = false; // Keeps it unchecked on page load
  document.getElementsByTagName("a").target = "_blank";

  if (dontShowAgain === "true") {
    messageDiv.style.display = "none";
  }
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

function getPath() {
  const path = document.getElementById("path");
  path.textContent = window.location.pathname;
}

// Redirect to root if 404
const currentUrl = new URL(window.location.href);
const isRedirected = !!currentUrl.searchParams.get("r");

if (!isRedirected) {
  fetch(window.location.href, {
    method: "HEAD",
  }).then((response) => {
    if (response.status !== 404) return;

    window.location.href = "/"; // https://www.davidangulo.xyz/posts/redirect-404-pages-in-javascript/
  });
}
