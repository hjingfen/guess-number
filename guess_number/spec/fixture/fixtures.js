function init(){
    localStorage.setItem('count',6);
    document.getElementById('num').disabled = false;
    var number1 = 1234;
    localStorage.setItem('number',number1);;
}

function change(number1){
    var num = Judge.two_numbers(number1);
    num[4] = num[3];
    num[3] = num[2];
    num[2] = num[4];
    return num[0]*1000+num[1]*100+num[2]*10+num[3];
}