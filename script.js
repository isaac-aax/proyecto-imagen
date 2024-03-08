function checkPassword() {
    var password = document.getElementById("password").value;
    if (password === "12345") {
        showImage();
    } else {
        alert("Contraseña incorrecta. Intenta de nuevo.");
    }
}

function showImage() {
    document.getElementById("imageContainer").style.display = "block";
}