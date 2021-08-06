const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggle-btn');
const circleBtn = document.getElementById('circle-btn');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

one.onclick = function () {
    circleBtn.style.marginLeft = '0px';
    body.classList.add('blue-theme');
    body.classList.remove('purple-theme', 'light-theme');
}

two.onclick = function () {
    circleBtn.style.marginLeft = '20px';
    body.classList.add('light-theme');
    body.classList.remove('purple-theme', 'blue-theme');
}

three.onclick = function () {
    circleBtn.style.marginLeft = '36px';
    body.classList.add('purple-theme');
    body.classList.remove('blue-theme', 'light-theme');
}

backSpace = function ()
{
    var str= $("#value_input").val();
    var position = document.getElementById('value_input').selectionStart-1;

    str = str.substr(0, position) + '' + str.substr(position + 1);
    $("#value_input").val(str);
}