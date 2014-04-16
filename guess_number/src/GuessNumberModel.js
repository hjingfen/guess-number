function GuessNumber(){

}

//GuessNumber.refresh = function(){
//    localStorage.count = localStorage.count || '6';
//    if(localStorage.count != '6'){
//        document.getElementById('num').disabled = false;
//        return;
//    }
//    document.getElementById('num').disabled = true;
//}
//GuessNumber.refresh();

GuessNumber.start = function(){
    var number1 = Number.create();
    localStorage.setItem('number',number1);
    localStorage.setItem('count',6);
    document.getElementById('num').disabled = false;
}

GuessNumber.result = function(){
    var count = JSON.parse(localStorage.getItem('count'));
    count--;
    localStorage.setItem('count',count);
    var result = GuessNumber.get_result();
    GuessNumber.click_result();
    if(result == "4A0B"){
        document.getElementById('show').innerHTML = result+"恭喜成功！";
        return;
    }
    document.getElementById('show').innerHTML = result;
}

GuessNumber.get_result = function(){
    var number1 = JSON.parse(localStorage.getItem('number'));
    var number2 = document.getElementById('num').value;
    return Judge.judge_type(number1,number2);
}

GuessNumber.click_result = function(){
    var count = JSON.parse(localStorage.getItem('count'));
    if(count == 0){
        document.getElementById('num').disabled = true;
    }
    document.getElementById('num').value = '';
}