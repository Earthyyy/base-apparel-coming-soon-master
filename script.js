const errorIcon = document.querySelector('.error-icon');
const email = document.querySelector('.email-input');
const flashMessage = document.querySelector('.flash-message');








function ValidateEmail() {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if (email.value.match(validRegex)) {

        email.classList.remove('invalid');
        if (!errorIcon.classList.contains('hidden')) errorIcon.classList.add('hidden')
        if (!flashMessage.classList.contains('hidden')) flashMessage.classList.add('hidden');

    } 
    else {
        if (!email.classList.contains('invalid')) email.classList.add('invalid');
        flashMessage.classList.remove('hidden');
        errorIcon.classList.remove('hidden');

    }

}