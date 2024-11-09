function onClick() {
    var alertElement = document.getElementById("alert");
    var button = document.getElementById("button");

    if (alertElement.classList.contains("d-none")) {
        alertElement.classList.remove("d-none");

        button.classList.add("btn-danger");
        button.classList.remove("btn-success");

        button.textContent = "Disable"
    } else {
        button.classList.remove("btn-danger");
        button.classList.add("btn-success");

        alertElement.classList.add("d-none");
        button.textContent = "Enable"
    }
}