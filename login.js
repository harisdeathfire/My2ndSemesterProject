function login() {
    var password = document.getElementById("password").value;

    if (password.length < 8 ) {
        alert("Please Enter at least 8 Characters Password.");
    } else if (password.length > 16) {
        alert("Please Enter no more than 16 Characters Password.");
    } else {
        alert("Thank you for your details!");
        document.getElementById("loginForm").submit();
    }
}
