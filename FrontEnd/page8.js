document.getElementById("countbutton").onclick = function(){

    let count = 0;
    let n = document.getElementById("ntextbox").value;
    n = Number(n);

    const myTimer = setInterval(countUp, 1000, n);

    function countUp(n){
        count+=1;
        if(count >= n)
        clearInterval(myTimer);
       document.getElementById("alabel").innerHTML = " Answer: " + count;
    }
}

document.getElementById("resetbutton").onclick = function(){
    let count = 0;
    let n = document.getElementById("ntextbox").value = "";
    let a = document.getElementById("alabel").innerHTML = " Answer: " + "";
}