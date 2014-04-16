function GuessNumber(){

}
var count = 6;

GuessNumber.start = function(){
    if(count != 0){
        document.getElementById('num').disabled = false;
        count--;
    }
}

GuessNumber.result = function(){
    var number1 = Number.create();
    var number2 = document.getElementById('num').value;
    var result = Judge.judge_type(number1,number2);
    document.getElementById('num').value = '';
    document.getElementById('num').disabled = true;
    if(count == 0){
        document.getElementById('start').disabled = 'disabled';
    }
    return result;
}
