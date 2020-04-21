window.onload = function() {
  btnSubmit.addEventListener("click", () => {
    validateForm();
  });

function validateForm(){

    var AGE = document.forms["dobForm"]["ageInput"].value;
    var formContainer = document.getElementById('formContainer');

    if (AGE ==="")
    //if age is not input:
    {
      window.alert("Age must be checked.");
    }

   else
   { if (AGE > 19 && AGE <41)
   // if age is older than 19 but younger than 41 close form
    {
    console.log(formContainer);
    formContainer.style.display = "none";
  }

    else {
      window.alert("This site is not suitable for your age");
     //if age is not between 20 and 40
  }
  }
  }
}
