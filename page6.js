let a;
let b;
let c;
let d;
let e;

document.getElementById("plus").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=a+b;

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("minus").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=a-b;

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("inmultire").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=a*b;

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}
document.getElementById("impartire").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=a/b;

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("modulo").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=a%b;

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("max").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=Math.max(a,b);

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("min").onclick = function(){

    a = document.getElementById("atextbox").value;
    a=Number(a);

    b = document.getElementById("btextbox").value;
    b = Number(b);

    c=Math.min(a,b);

    document.getElementById("clabel").innerHTML = "Side C: " + c;
}

document.getElementById("round").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.round(d);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("floor").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.floor(d);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("ceil").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.ceil(d);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("pow").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.pow(d, 2);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("sqrt").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.sqrt(d);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("abs").onclick = function(){

    d = document.getElementById("dtextbox").value;
    d = Number(d);

    e = Math.abs(d);

    document.getElementById("elabel").innerHTML = "Side E: " + e;
}

document.getElementById("pitagora").onclick = function(){

    a = document.getElementById("actextbox").value;
    a=Number(a);

    b = document.getElementById("bctextbox").value;
    b = Number(b);

    c=Math.sqrt(Math.pow(a,2)+ Math.pow(b,2));

    document.getElementById("cilabel").innerHTML = "Side c: " + c;
}

let count = 0;

document.getElementById("decreasebtn").onclick = function(){
    count-=1;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("resetbtn").onclick = function(){
    count=0;
    document.getElementById("countlabel").innerHTML = count;
}

document.getElementById("increasebtn").onclick = function(){
    count+=1;
    document.getElementById("countlabel").innerHTML = count;
}