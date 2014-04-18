function click_start(){
    localStorage.setItem('count',6);
    document.getElementById('num').disabled = false;
    var number1 = 1234;
    localStorage.setItem('number',number1);
}

function result_button_init(){
    click_start();
}

function click_result(){
    var count = JSON.parse(localStorage.getItem('count'));
    --count;
    localStorage.setItem('count',count);
    document.getElementById('num').value = '';

}

function six_times(){
    document.getElementById('num').disabled = 'disabled';
}

function success(){
    document.getElementById('num').disabled = 'disabled';
}

function init(){
    localStorage.setItem('number','1234');
}

function show_result(num2,count){
    var num1 = JSON.parse(localStorage.getItem('count'));
    var result = Judge.judge_type(num1,num2);
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