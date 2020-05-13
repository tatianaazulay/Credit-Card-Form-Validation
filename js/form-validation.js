$(function() {
    $("form[name='creditCardForm']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        address: "required",
        city: "required",
        state: "required",
        zip: {
            required: true,
            digits: true,
            rangelength: [5, 5]
        },
        CCname: "required",
        CCnumber: {
            required: true,
           // digits: true,
            rangelength: [16, 19]
        },
        CCexpiration: "required",
        CCcvv: {
            required: true,
            digits: true,
            rangelength: [3, 4]
        },
       email: {
          required: false,
          email: true
        },
      },
      // Specify validation error messages
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        email: "Please enter valid email",
        zip: "Please enter valid zip code",
        CCnumber: "Please enter valid card number",
        CCcvv: "Please enter valid cvv",
        address: "This field is required",
        city: "This field is required",
        state: "This field is required",
        CCname: "This field is required",
        CCexpiration: "This field is required",

    //    email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        alert('All entries are validated successfully!');
      //  form.submit();
      }
    });
  });


  function myKeyPress(event){
    var cardNum = document.getElementById('CCnumber').value;
    console.log(cardNum);
    var keyPressed="";
    if(window.event && event.keyCode>=48 && event.keyCode<=57) { 
      keyPressed = event.keyCode;
    } else if(event.which  && event.keyCode>=48 && event.keyCode<=57){ 
      keyPressed = event.which;
    }

if (keyPressed !==""){
  var num = String.fromCharCode(keyPressed);
  var maskedNum;
  maskedNum = maskNum(cardNum);
  console.log("Key Pressed = " + keyPressed);
  console.log("  Formatted = " + maskedNum);
  if(cardNum.length >= 19){
    return false
}
document.getElementById('CCnumber').value = maskedNum;
}else
return false;

  };  
  function maskNum(value){
    if(value.length == 4 || value.length == 9 || value.length == 14 )
      value = value + ' ';
    return value;
  };
