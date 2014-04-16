function GuessNumber(){

}

GuessNumber.count = function(){
    return 6;
}
var count = GuessNumber.count();

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
    GuessNumber.click_result();
    if(result == "4A0B"){
        alert(result+"恭喜成功！");
        return;
    }
    alert(result);
}

GuessNumber.click_result = function(){
    document.getElementById('num').value = '';
    document.getElementById('num').disabled = true;
    if(count == 0){
        document.getElementById('start').disabled = 'disabled';
    }
}