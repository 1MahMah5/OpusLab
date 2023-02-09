function erase(){
    document.getElementById("result").value="";
}

function disp(x){
   document.getElementById("result").value+=x;
}

function equal(){
    document.getElementById("result").value=eval(document.getElementById("result").value);
}