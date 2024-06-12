function Validation(values) {
    // Declare an empty object to store validation errors
    let error = {}
    
   /* Define a regular expression pattern to validate email and password format...on pasword it requires at least
      8 characters, including at least one uppercase letter, one lowercase and one digit*/
   const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
   const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}4/

   //Validation name field
   if(values.name ==="") {
    error.name = "Nmae should not be empty"
   }
   else{
    error.name = ""
   }

   //Validate Email field
   if(values.email === "") {
       error.email = "Email should not be empty"
   }
   else if(!email_pattern.test(values.email)) {
       error.email = "Email didn't match"
   }else {
       error.email = ""
   }

   //Validate Password field
   if(values.password === ""){
       error.password ="Password should not be empty"
   }
   else if(!password_pattern.test(values.password)) {
       error.password = "Password didn't match"
   }else {
       error.password = ""
   }
   return error;
}

export default Validation;