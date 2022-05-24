const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const btn_submit = document.getElementById('btn')
const form = document.querySelector('.form')


//Show input success outline
function showSuccess(input) {
    control_form = input.parentElement
    control_form.className = 'form-control success'

}

//Show input error message
function shoowError(input, message) {
    control_form = input.parentElement
    control_form.className = 'form-control error'
    const small = control_form.querySelector('small')
    small.innerText = message
}

//Validate email
function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (!re.test(email.value.trim())) {
        shoowError(email, `${getFieledName(email.id)} is not valid`)
    } else {
        showSuccess(email)
    }


}
// Get field
function getFieledName(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

function checkRequired(arrayItens) {
    const itens_validate = arrayItens
    itens_validate.forEach(input => {
        if (input.value.trim() === '') {
            shoowError(input, `${getFieledName(input.id)} is required`)
        } else {
            showSuccess(input)
        }
    });
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        shoowError(input, `${getFieledName(input.id)} must be at least ${min} charecters`)
    } else if (input.value.length > max) {
        shoowError(input, `${getFieledName(input.id)} must be less than ${max} charecters`)
    } else {
        showSuccess(input)
    }


}
//Check password match
function passwordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        shoowError(input2, `Password do not match`)
    } else if(input2.value.length < 6 || input2.value.length > 25){
        shoowError(input2, 'Password2 is not valid')
    } else{
        showSuccess(password2)
    }
}


username.addEventListener('keyup', () =>{
    checkLenght(username, 3, 15)
})
email.addEventListener('keyup', ()=>{
    isValidEmail(email)
})
password.addEventListener('keyup', () =>{
    checkLenght(password, 6, 25)
})
password2.addEventListener('keyup', () =>{
    passwordMatch(password,password2)
    
})


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username,email, password, password2])
    checkLenght(username, 3, 15)
    checkLenght(password, 6, 25)
    checkLenght(password2, 6, 25)
    isValidEmail(email)
    
    
    

})





