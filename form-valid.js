var form = document.getElementById('form1'); 
var username = document.getElementById('username'); 
var email = document.getElementById('email'); 
var password = document.getElementById('password'); 
var password2 = document.getElementById('password2'); 

//show error
function showError(input, message) {
  var formControl = input.parentElement;
  formControl.className = 'form-control1 error';
  var small = formControl.querySelector('small');
  small.innerText = message;  
}

//show success

function showSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control1 success'; 
}

// email  

function validEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (re.test(input.value.trim())) {
    showSuccess(input);
   }else{
    showError(input, "Email is not valid"); 
   }
}

// check required
function checkRequired(inputArr) {
    inputArr.forEach(function(input){
       if(input.value.trim()==='') {
           showError(input, `${getFieldName(input)} is required`);
       }
       else{
        showSuccess(input);
       }
    });
}

//get fieldname 
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()  + input.id.slice(1);
}

//check length
function checkLength(input, min ,max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }

    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }
    
    else{
        showSuccess(input); 
    }
}

//password matching
function passwordMatch(input1, input2) {
    if (input1.value!==input2.value) {
        showError(input2, "Password do not match");
    }
}


//event listenner

form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username, 3, 15);
    checkLength(email, 6, 25);
    
    validEmail(email);
    passwordMatch(password, password2);
    /*if(username.value === ''){
        showError(username, 'Username is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    }
    else if(!validEmail(email.value)){
        showError(email, 'Email is not valid'); 
    }
    else{
        showSuccess(email);
    }

    if(password.value === ''){
        showError(password, 'Password is required');
    }else{
        showSuccess(password);
    }

    if(password2.value === ''){
        showError(password2, 'Confirmation of password is required');
    }else{
        showSuccess(password2);
    }*/
})

var orderForm = document.getElementById('form2'); 
var noc = document.getElementById('noc'); 
var ccnum = document.getElementById('ccnum'); 
var expmonth = document.getElementById('expmonth'); 
var expyear = document.getElementById('expyear');
var cvv = document.getElementById('cvv'); 
var fun = document.getElementById('fun'); 
var email1 = document.getElementById('email1'); 
var adr = document.getElementById('adr'); 
var city = document.getElementById('city'); 
var zip = document.getElementById('zip');

function validEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
//show error
function showErrorNew(input, message1) {
    orderControl = input.parentElement;
   orderControl.className = "form-control2 error";
   var orderSmall = orderControl.querySelector('span');
   orderSmall.innerText = message1;
}

//show Success
function showSuccessNew(input) {
    orderControl = input.parentElement;
    orderControl.className = "form-control2 success"; 
}
/*
//order required
function orderRequired(inputArr) {
    inputArr.forEach(function (input) {
        if(input.value.trim() === ''){
            showErrorNew(input, `${getFieldName(input)} is required`);
        }
        else{
            showSuccessnew(input);
        }
    });
}*/
orderForm.addEventListener('submit', function (e) {
    e.preventDefault();
    //orderRequired([noc,ccnum,expmonth,expyear,cvv]);
    if(noc.value === ''){
        showErrorNew(noc, 'Name is required');
    }else{
        showSuccessNew(noc);
    }

    if(ccnum.value === ''){
        showErrorNew(ccnum, 'Name on card is required');
    }else{
        showSuccessNew(ccnum);
    }

    if(expmonth.value === ''){
        showErrorNew(expmonth, 'Exp Month is required');
    }else{
        showSuccessNew(expmonth);
    }
    if(expyear.value === ''){
        showErrorNew(expyear, 'Exp Year is required');
    }else{
        showSuccessNew(expyear);
    }
    if(cvv.value === ''){
        showErrorNew(cvv, 'CVV is required');
    }else{
        showSuccessNew(cvv);
    }
    //billing adress
    if(fun.value === ''){
        showErrorNew(fun, 'Full name is required');
    }else{
        showSuccessNew(fun);
    }

    if(email1.value === ''){
        showErrorNew(email1, 'Email is required');
    }
   else if(!validEmail(email1.value)){
        showErrorNew(email1, 'Email is not valid'); 
    }
    else{
        showSuccessNew(email1);
    }
    if(adr.value === ''){
        showErrorNew(adr, 'Adress is required');
    }else{
        showSuccessNew(adr);
    }
    if(city.value === ''){
        showErrorNew(city, 'City name is required');
    }else{
        showSuccessNew(city);
    }
    if(zip.value === ''){
        showErrorNew(zip, 'Zip-code is required');
    }else{
        showSuccessNew(zip);
    }
})































