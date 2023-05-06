
const popuppWrapper = document.getElementById('popupWrapper');
const close = document.getElementById('close');
const pic = document.getElementsByTagName('img');
function setImg(path) {
    document.getElementById('popuppic').src = path;
    popuppWrapper.style.display = "block";
    pic.style.transform = "none";
}

close.addEventListener('click', function () {
    popuppWrapper.style.display = "none";
})