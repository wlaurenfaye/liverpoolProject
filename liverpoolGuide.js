

function validateForm(){

  var AGE = document.forms["dobForm"]["ageInput"].value;

  if (AGE ==="")
  //if age is not input:
  {
    window.alert("Age must be checked.");
    return false;



  }

 else if (AGE > 19 && AGE <41)
 // if age is older than 19 but younger than 41 display message
  {

    window.location.replace = ("activityPicker.html");

  }
 else {

   window.alert("This site is not suitable for your age");
   //if age is not between 20 and 40



}


}
