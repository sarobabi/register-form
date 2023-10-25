let form= document.querySelector("#form");
let username= document.querySelector("#username");
let email= document.querySelector("#email");
let password= document.querySelector("#password");
let cpassword= document.querySelector("#cpassword");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    validateInputs();
})
function validateInputs(){
    let usernameVal =username.value.trim();
    let emailVal=email.value.trim();
    let passwordVal=password.value.trim();
    let cpasswordVal=cpassword.value.trim();

    if(usernameVal===''){
        seterror(username,'username is required')  
    }
    else{
        setsuccrss(username)
    }
    if(emailVal===''){
        seterror(email,'email is required')
    }
    else{
        setsuccrss(email)
    }
    if(passwordVal===''){
        seterror(password,'password is required')
    }
    else if(passwordVal.length<8){
            seterror(password,'password must be atlest 8 characters long')
    }
    else{
        setsuccrss(password)
    }
    if(cpasswordVal ===''){
        seterror(cpassword,'cpassword is required')
    }
    else if(cpassword !==passwordVal){
        seterror(cpassword,'cpassword does not match')
    }
    else{
        setsuccrss(cpassword)
    }
}
function seterror(element,message){
    const inputGroup =element.parentElement;
    let errorElement=inputGroup.querySelector('.error');
    errorElement.innerText=message;
     
    inputGroup.classList.add('.error');
    inputGroup.classList.remove('.success')
}
function setsuccrss(element){
    const inputGroup =element.parentElement;
    let errorElement=inputGroup.querySelector('.error');
    errorElement.innerText='';
     
    inputGroup.classList.add('.success');
    inputGroup.classList.remove('.error')
}