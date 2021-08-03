let code = 0;
document.getElementById('increment').onclick = function (e) {
  code++;
  let counterDisplayElem = document.querySelector('.counter-display');
  counterDisplayElem.style.display = "block";
  counterDisplayElem.innerHTML = "Lines of code " + code;
  if (code >= 10) {
    document.getElementById("autoincrement").style.display = "block";
  }
  };