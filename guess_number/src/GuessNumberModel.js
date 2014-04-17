function GuessNumber(){

}

GuessNumber.start = function(){
    var number1 = Number.create();
    localStorage.setItem('number',number1);
    localStorage.setItem('count',6);
    document.getElementById('num').disabled = false;
}

GuessNumber.result = function(){
    var count = GuessNumber.click_result();
    var result = GuessNumber.get_result();
    document.getElementById('num').value = '';
    if(result == "4A0B"){
        document.getElementById('show').innerHTML = result+"恭喜成功！游戏结束！";
        document.getElementById('num').disabled = true;
        return;
    }
    document.getElementById('show').innerHTML = result;
    if(count == 0){
        document.getElementById('num').disabled = true;
        document.getElementById('show').innerHTML = result+"游戏结束！";
        return;
    }

}

GuessNumber.get_result = function(){
    var number1 = JSON.parse(localStorage.getItem('number'));
    var number2 = document.getElementById('num').value;
    console.log(number1,'number1');
    console.log(number2,'number2');
    return Judge.judge_type(number1,number2);
}

GuessNumber.click_result = function(){
    var count = JSON.parse(localStorage.getItem('count'));
    --count;
    localStorage.setItem('count',count);
    return count;
}