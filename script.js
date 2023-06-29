function ValidityState() {
    var firstname = document.getElementById("input").value;
    var lastname = document.getElementById("input").value;
    var email = document.getElementById("input").value;
    var password = document.getElementById("emailInput").value;
  
    if (firstname == "" || lastname == "" || email == "" || password == "") {
      document.getElementById("error").innerHTML = "All fields are required";
    } else {
      document.getElementById("error").innerHTML = "";
    }
  };