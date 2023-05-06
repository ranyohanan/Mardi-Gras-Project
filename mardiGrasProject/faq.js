const btn = document.getElementById('btn2');
const popuppWrapper = document.getElementById('popupWrapper');
const close = document.getElementById('close');

btn.addEventListener('click', function () {
    popuppWrapper.style.display = "block";
});

close.addEventListener('click', function () {
    popuppWrapper.style.display = "none";
})

let counter = 0;
function correct1() {
    counter += 10;
    document.getElementById('lab1').innerHTML = 'correct!';
    document.getElementById('lab1').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form').style.display = 'none';
}
function wrong1() {
    document.getElementById('lab1').innerHTML = 'Wrong!';
    document.getElementById('lab1').style.color = 'red';
    document.getElementById('form').style.display = 'none';
}
function correct2() {
    counter += 10;
    document.getElementById('lab2').innerHTML = 'correct!';
    document.getElementById('lab2').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form2').style.display = 'none';
}
function wrong2() {
    document.getElementById('lab2').innerHTML = 'Wrong!';
    document.getElementById('lab2').style.color = 'red';
    document.getElementById('form2').style.display = 'none';
}
function correct3() {
    counter += 10;
    document.getElementById('lab3').innerHTML = 'correct!';
    document.getElementById('lab3').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form3').style.display = 'none';
}
function wrong3() {
    document.getElementById('lab3').innerHTML = 'Wrong!';
    document.getElementById('lab3').style.color = 'red';
    document.getElementById('form3').style.display = 'none';
}
function correct4() {
    counter += 10;
    document.getElementById('lab4').innerHTML = 'correct!';
    document.getElementById('lab4').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form4').style.display = 'none';
}
function wrong4() {
    document.getElementById('lab4').innerHTML = 'Wrong!';
    document.getElementById('lab4').style.color = 'red';
    document.getElementById('form4').style.display = 'none';
}
function correct5() {
    counter += 10;
    document.getElementById('lab5').innerHTML = 'correct!';
    document.getElementById('lab5').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form5').style.display = 'none';
}
function wrong5() {
    document.getElementById('lab5').innerHTML = 'Wrong!';
    document.getElementById('lab5').style.color = 'red';
    document.getElementById('form5').style.display = 'none';
}
function correct6() {
    counter += 10;
    document.getElementById('lab6').innerHTML = 'correct!';
    document.getElementById('lab6').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form6').style.display = 'none';
}
function wrong6() {
    document.getElementById('lab6').innerHTML = 'Wrong!';
    document.getElementById('lab6').style.color = 'red';
    document.getElementById('form6').style.display = 'none';
}
function correct7() {
    counter += 10;
    document.getElementById('lab7').innerHTML = 'correct!';
    document.getElementById('lab7').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form7').style.display = 'none';
}
function wrong7() {
    document.getElementById('lab7').innerHTML = 'Wrong!';
    document.getElementById('lab7').style.color = 'red';
    document.getElementById('form7').style.display = 'none';
}
function correct8() {
    counter += 10;
    document.getElementById('lab8').innerHTML = 'correct!';
    document.getElementById('lab8').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form8').style.display = 'none';
}
function wrong8() {
    document.getElementById('lab8').innerHTML = 'Wrong!';
    document.getElementById('lab8').style.color = 'red';
    document.getElementById('form8').style.display = 'none';
}
function correct9() {
    counter += 10;
    document.getElementById('lab9').innerHTML = 'correct!';
    document.getElementById('lab9').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form9').style.display = 'none';
}
function wrong9() {
    document.getElementById('lab9').innerHTML = 'Wrong!';
    document.getElementById('lab9').style.color = 'red';
    document.getElementById('form9').style.display = 'none';
}
function correct10() {
    counter += 10;
    document.getElementById('lab10').innerHTML = 'correct!';
    document.getElementById('lab10').style.color = 'green';
    document.getElementById('score').innerHTML = `your score: ${counter}`;
    document.getElementById('form10').style.display = 'none';
}
function wrong10() {
    document.getElementById('lab10').innerHTML = 'Wrong!';
    document.getElementById('lab10').style.color = 'red';
    document.getElementById('form10').style.display = 'none';
}
