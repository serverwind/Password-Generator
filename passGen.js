const passHTML = document.getElementById('your-pass');
const genButton = document.getElementById('generate');
const passLenHTML = document.getElementById('pass-len');
const lenNum = document.getElementById('len-num');
const basicSymbols = document.getElementById('basic-sym');

function chooseLen() {
  let choosedLen = passLenHTML.value;
  lenNum.innerHTML = choosedLen;
}

passLenHTML.addEventListener('click', chooseLen);

function generate() {
  let pass = [];
  let index = 0;

  if (basicSymbols.checked == true) {
    var symbols = '1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
  } else {
    symbols = '~!@#$%^*+-=:;.?/{}[]\()1234567890aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ';
  }

  for (i = 0; i < lenNum.innerHTML; i++) {
    index = symbols[Math.floor(Math.random() * symbols.length)];
    pass.push(index);
  }
  passHTML.innerHTML = pass.join('');
}

genButton.addEventListener('click', generate);

/* A custom script is used to activate popovers */

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})



