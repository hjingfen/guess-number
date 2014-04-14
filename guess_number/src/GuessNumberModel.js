function Number(){
}
Number.create = function(){
    var a = parseInt(Math.random()*9 + 1);
    var b = parseInt(Math.random()*9);
    var c = parseInt(Math.random()*9);
    var d = parseInt(Math.random()*9);
    return a*1000+b*100+c*10+d;
}
