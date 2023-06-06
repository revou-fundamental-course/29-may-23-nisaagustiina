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

function showResult() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    var capitalized = name.charAt(0).toUpperCase() + name.slice(1);

    var dobInput = document.getElementById("dob");
    var dob = "";
    if (dobInput.value !== "") {
        dob = moment(dobInput.value).format("MM/DD/YYYY");
    }

    var genderInput = document.querySelector('input[name="gender"]:checked');
    var gender = genderInput ? genderInput.value : "";

    var genderMale = document.getElementById("male");
    var genderFemale = document.getElementById("female");

    var msgInput = document.getElementById("msg");
    var msg = msgInput.value;

    var nameWarning = document.getElementById("warning-name");
    var dobWarning = document.getElementById("warning-dob");
    var genderWarning = document.getElementById("warning-gender");
    var msgWarning = document.getElementById("warning-msg");

    // Validate name
    if (name === "") {
        nameWarning.innerHTML = "Please fill out this field";
        nameInput.classList.add("invalid");
    } else {
        nameWarning.innerHTML = "";
        nameInput.classList.remove("invalid");
    }

    // Validate date of birth
    if (dob === "") {
        dobWarning.innerHTML = "Please fill out this field";
        dobInput.classList.add("invalid");
    } else {
        dobWarning.innerHTML = "";
        dobInput.classList.remove("invalid");
    }

    // Validate gender
    if (gender === "") {
        genderWarning.innerHTML = "Please select your gender";
        genderMale.classList.add("invalid");
        genderFemale.classList.add("invalid");
    } else {
        genderWarning.innerHTML = "";
        genderMale.classList.remove("invalid");
        genderFemale.classList.remove("invalid");
    }

    // Validate message
    if (msg === "") {
        msgWarning.innerHTML = "Please select your gender";
        msgInput.classList.add("invalid");
    } else {
        msgWarning.innerHTML = "";
        msgInput.classList.remove("invalid");
    }

    // Exit function if any validation fails
    if (name === "" || dob === "" || gender === "" || msg === "") {
        return;
    }

    document.getElementById("result-name").innerHTML = capitalized;
    document.getElementById("result-dob").innerHTML = dob;
    if (gender) {
        document.getElementById("result-gender").innerHTML = gender;
    }
    document.getElementById("result-msg").innerHTML = msg;

    console.log(dob);
}
