const inputsNodeList = document.querySelectorAll('input');
const inputs = [...inputsNodeList];
const submitBtn = document.getElementById('submit__btn');
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirm = document.getElementById('password-confirm');
let errorMsgNodeList = document.querySelectorAll('.error-text');
let errorMsg = [...errorMsgNodeList];

function emptyInputs() {
    let validations = 0;

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i].value;
        if (input.length === 0) {
            errorMsg[i].textContent = 'This field is required';
            inputs[i].style.border = '1px solid #f00';
        } else {
            validations++;
            inputs[i].style.border = '1px solid #0003';
            errorMsg[i].textContent = '';
        }
    }

    if (validations !== 6) return false;
    else if (validations === 6) return true;
}

function validateEmail() {
    let atIndex = email.value.indexOf('@');
    let lastDot = email.value.lastIndexOf('.');

    if (atIndex <= 0 || atIndex === email.value.length - 1) {
        errorMsg[2].textContent = 'Invalid Email Address';
        email.style.border = '1px solid #f00';
        return false;
    } else if (lastDot <= atIndex + 1 || lastDot === email.value.length - 1) {
        errorMsg[2].textContent = 'Invalid Email Address';
        email.style.border = '1px solid #f00';
        return false;
    } else {
        errorMsg[2].textContent = '';
        email.style.border = '1px solid #0003';
        return true;
    }
}

function validatePassword() {
    let passwords = [password, passwordConfirm];

    for (let i = 0; i < passwords.length; i++) {
        let pass = passwords[i];

        if (pass.value.length < 6 || pass.value.length > 12) {
            errorMsg[4].textContent = 'Password must be between 6 and 12 characters';
            password.style.border = '1px solid #f00';
            passwordConfirm.style.border = '1px solid #f00';
            return false;
        }
    }

    if (password.value !== passwordConfirm.value) {
        errorMsg[4].textContent = 'Passwords do not match';
        password.style.border = '1px solid #f00';
        passwordConfirm.style.border = '1px solid #f00';
        return false;
    }

    errorMsg[4].textContent = '';
    password.style.border = '1px solid #0003';
    passwordConfirm.style.border = '1px solid #0003';
    return true;
}


function validateForm() {
    const validateEmptyInputs = emptyInputs();

    if (validateEmptyInputs) {
        const validateEmailInput = validateEmail();

        if (validateEmailInput) {
            const validatePasswords = validatePassword();
            if (validatePasswords) {
                form.submit();
            }
        }
    }
}

submitBtn.addEventListener('click', validateForm);