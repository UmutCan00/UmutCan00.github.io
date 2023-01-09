let i = 0;
i = Number(i);

document.getElementById("decbutton").onclick = function(){

    i--;
    document.getElementById("no").innerHTML = "" + i;

}

document.getElementById("incbutton").onclick = function(){
 
    i++;
    document.getElementById("no").innerHTML = "" + i;

}