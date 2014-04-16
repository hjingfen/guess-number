function GuessNumber(){

}

GuessNumber.count = function(){
    return 6;
}

var count = GuessNumber.count();

GuessNumber.start = function(){
    count--;
    return document.getElementById('num').disabled = false;
}

GuessNumber.result = function(){
    var result = GuessNumber.get_result();
    GuessNumber.click_result();
    if(result == "4A0B"){
        document.getElementById('show').innerHTML = result+"恭喜成功！";
        return;
    }
    document.getElementById('show').innerHTML = result;
    return document.getElementById('show').innerHTML;
}

GuessNumber.get_result = function(){
    var number1 = Number.create();
    var number2 = document.getElementById('num').value;
    return Judge.judge_type(number1,number2);
}

GuessNumber.click_result = function(){
    if(count == 0){
        document.getElementById('start').disabled = 'disabled';
    }
    document.getElementById('num').value = '';
    return document.getElementById('num').disabled = true;
}