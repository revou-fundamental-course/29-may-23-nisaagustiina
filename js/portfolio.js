function openMenu(x) {
    x.classList.toggle("change");
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
    if (!dropdownContent.classList.contains("show")) {
        document.dispatchEvent(new MouseEvent("click"));
    }
}

window.onclick = function (event) {
    if (
        !event.target.matches(".menu-btn") &&
        !event.target.matches(".dropdown-content")
    ) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var buttons = document.getElementsByClassName("menu-btn");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            var button = buttons[i];
            if (openDropdown.classList.contains("show")) {
                openDropdown.classList.remove("show");
                button.classList.remove("change");
            }
        }
    }
};
