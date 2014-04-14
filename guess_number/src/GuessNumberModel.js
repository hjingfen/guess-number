function Number(){
}
Number.create = function(){
    var a = parseInt(Math.random()*9 + 1);
    var b = Number.create_0_9();
    var c = Number.create_0_9();
    var d = Number.create_0_9();
    var not_repeat = Number.is_not_repeat(a,b,c,d)
    if(not_repeat){
        return a*1000+b*100+c*10+d;
    }
    return Number.create();
}
Number.create_0_9 = function(){
    return parseInt(Math.random()*10);
}
Number.is_not_repeat = function(a,b,c,d){
    return a != b && a != c && a != d && b != c && b != d && c != d;
}