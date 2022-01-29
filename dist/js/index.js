const emailText = document.getElementById('email');
const emailText_2 = document.getElementById('email-2');
const emailBtn = document.getElementById('validateEmail');
const emailBtn_2 = document.getElementById('validateEmail-2');

emailBtn.addEventListener('click', checkEmail);
emailBtn_2.addEventListener('click', checkEmail2);

function checkEmail(e) {
    const validRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailText.value !== '') {
        if(emailText.value.match(validRegx)) {
            e.target.previousElementSibling.children[1].innerHTML = ' ';
            e.target.previousElementSibling.children[0].removeAttribute('style');
        } else {
            e.target.previousElementSibling.children[1].innerHTML = 'Please check your email..';
            e.target.previousElementSibling.children[0].style.border = '1px solid #d10b0b';
        }
    }
     else{
        e.target.previousElementSibling.children[1].innerHTML = 'Please fill your email textbox!!';
        e.target.previousElementSibling.children[0].style.border = '1px solid #d10b0b';
    }
}

function checkEmail2(e) {

    const validRegx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(emailText_2.value !== '') {
        if(emailText_2.value.match(validRegx)) {
            e.target.previousElementSibling.innerHTML = ' ';
            emailText_2.removeAttribute('style');
        } else {
            e.target.previousElementSibling.innerHTML = 'Please check your email..';
            emailText_2.style.border = '1px solid #d10b0b';
        }
    }
     else{
        e.target.previousElementSibling.innerHTML = 'Please fill your email textbox!!';
        emailText_2.style.border = '1px solid #d10b0b';
    }
}