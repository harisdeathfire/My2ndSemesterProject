function pay() {
    var payment = document.getElementById("CNIC").value;
    if(payment.length>13)
        {
            alert("Please Enter Only 13 Digits!" );
        }
    else 
    {
        alert("Thank You! ");
    }
}
