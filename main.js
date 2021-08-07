const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggle-btn');
const circleBtn = document.getElementById('circle-btn');

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

one.onclick = function () {
    circleBtn.style.left = "0";
    // circleBtn.style.marginLeft = '0';
    circleBtn.style.transform = 'translateX(0)'
    body.classList.add('blue-theme');
    body.classList.remove('purple-theme', 'light-theme');
}

two.onclick = function () {
    circleBtn.style.left = "50%";
    // circleBtn.style.left = "calc(50% - 12px)";
    // circleBtn.style.marginLeft = '20px';
    circleBtn.style.transform = 'translateX(-50%)'
    body.classList.add('light-theme');
    body.classList.remove('purple-theme', 'blue-theme');
}

three.onclick = function () {
    circleBtn.style.left = "100%";
    // circleBtn.style.left = "calc(100% - 24px)";
    // circleBtn.style.marginLeft = '36px';
    circleBtn.style.transform = 'translateX(-100%)'
    body.classList.add('purple-theme');
    body.classList.remove('blue-theme', 'light-theme');
}

// backSpace = function ()
// {
//     var str= $("#value_input").val();
//     var position = document.getElementById('value_input').selectionStart-1;

//     str = str.substr(0, position) + '' + str.substr(position + 1);
//     $("#value_input").val(str);
// }

backSpace = function ()
{
    const input = document.getElementById('value_input');
    let str= input.value;
    const position = input.selectionStart-1;

    str = str.substr(0, position) + '' + str.substr(position + 1);
    input.value = str;
}

