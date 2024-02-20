function darkMode() {
    var element = document.body;
    var darkModeCheckbox = document.getElementById("darkMode");
    var isDarkMode = darkModeCheckbox.checked;

    if (isDarkMode) {
        element.classList.add("dark-mode");
    } else {
        element.classList.remove("dark-mode");
    }
    localStorage.setItem("darkMode", isDarkMode);
}

function checkDarkModePreference() {
    var darkModeCheckbox = document.getElementById("darkMode");
    var isDarkMode = localStorage.getItem("darkMode");

    darkModeCheckbox.checked = isDarkMode === "true";

    if (isDarkMode === "true") {
        document.body.classList.add("dark-mode");
    }
}

window.onload = checkDarkModePreference;

document.getElementById("darkMode").addEventListener("change", darkMode);
  
