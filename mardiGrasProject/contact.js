const btn2 = document.getElementById('btn2');
const popuppWrapper = document.getElementById('popupWrapper');
const close = document.getElementById('close');

btn2.addEventListener('click', function () {
    const Fname = document.getElementById('Fname');
    const email = document.getElementById('email');
    const tArea = document.getElementById('tArea');
    const error = document.getElementById('error');
    const error2 = document.getElementById('error2');
    const error3 = document.getElementById('error3');
    if (Fname.value == '') {
        error.innerHTML = 'Please Enter Name!';
        error.style.color = 'red';
        Fname.focus();
    }
    else if (email.value == '' || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        error2.innerHTML = 'Please Enter Email!';
        error2.style.color = 'red';
        email.focus();
    } else if (tArea.value == '') {
        error3.innerHTML = 'Please Enter Name!';
        error3.style.color = 'red';
        tArea.focus();
    }
    else {
        popuppWrapper.style.display = "block";
        error.style.display = "none";
        error2.style.display = "none";
        error3.style.display = "none";
    }
});

close.addEventListener('click', function () {
    popuppWrapper.style.display = "none";
})