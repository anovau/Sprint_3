// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var firstName = document.querySelector('.name');
var lastName = document.getElementById("lastName")
var email = document.getElementById("email")
var adress = document.getElementById("adress")


// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');
var errorLastName = document.getElementById('errorLastName');  
var errorPhone = document.getElementById('errorPhone');  
var errorEmail = document.getElementById('errorEmail'); 
var errorEmptyField = document.getElementById('errorEmptyField');  


// Exercise 6
function validate(e) {
    // Validate fields entered by the user: name, phone, password, and email


    const letterPattern = new RegExp(/^[A-Z]+$/i);
    const emailPattern = new RegExp(/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/);
    const passwordPattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,8}$/);
    const phonePattern = new RegExp(/([.0-9])/);

    if (!letterPattern.test(firstName.value) || firstName.value.length < 3){
        errorName.style.display = "block";
        firstName.classList.add("is-invalid")
    }else{
        firstName.classList.add("is-valid")
    }
    if(!emailPattern.test(email.value)){ 
        errorEmail.style.display = "block";
        email.classList.add("is-invalid")
    }else{
        email.classList.add("is-valid")
    }
    if(!letterPattern.test(lastName.value) || lastName.value.length < 3){
        errorLastName.style.display = "block";
        lastName.classList.add("is-invalid")
    }else{
        lastName.classList.add("is-valid")
    }
    if(!passwordPattern.test(password.value)){
       errorPassword.style.display = "block";
       password.classList.add("is-invalid")
    }else{
        password.classList.add("is-valid")
    }
    if(!phonePattern.test(phone.value) || phone.value.length < 3){ 
        errorPhone.style.display = "block";
        phone.classList.add("is-invalid")
    }else{
        phone.classList.add("is-valid")
    }
    if(adress.value.length < 3){
        adress.classList.add("is-invalid")
        errorEmptyField.style.display = "block";
    }else{
        adress.classList.add("is-valid")
    }
    

 e.preventDefault();

}
 