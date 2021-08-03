let code = 0;
document.getElementById('increment').onclick = function (e) {
        code++;
        if (e.preventDefault) {
            e.preventDefault();
        }
        e.returnValue = false;
       
    };
    console.log(code);