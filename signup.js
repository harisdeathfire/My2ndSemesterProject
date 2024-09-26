function signup() {
    var password = document.getElementById("password").value;
    var checkbox = document.getElementById("checkbox").checked;

    if (password.length < 8 ) {
        alert("Please Enter at least 8 Characters Password.");
    } else if (password.length > 16) {
        alert("Please Enter no more than 16 Characters Password.");
    } else if (!checkbox) {
        alert("You must agree to the conditions.");
    } else {
        alert("Thank you for your details!");
        document.getElementById("signupForm").submit();
    }
}
