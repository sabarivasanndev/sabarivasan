function run() {
    let pass = document.getElementById("pass").value;
    let trya = document.getElementById("trya");
    if (pass === "12345") {
        window.location.href = "home.html"
    }
    else {
        trya.textContent = "Sorry try again."
    }

}