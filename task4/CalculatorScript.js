function erase(){
    document.getElementById("result").value=''
}

function disp(x){
    op = '/*-+.'
    res = document.getElementById("result").value
    if ((op.indexOf(x) != -1) && ((op.indexOf(res[res.length-1]) != -1) || (res == ''))) {
        alert('Typing error ! \nWrong character deleted !')
    }
    else {
        document.getElementById("result").value += x
    }
}

function equal(){
    document.getElementById("result").value=eval(document.getElementById("result").value);
}
