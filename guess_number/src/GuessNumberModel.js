function GuessNumber(){

}

GuessNumber.result = function(){
    var number1 = Number.create();
    var number2 = document.getElementById('num').value;
    var result = Judge.judge_type(number1,number2);
    return result;
    }
