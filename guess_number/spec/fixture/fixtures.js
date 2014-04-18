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

function change(number1){
    var num = Judge.two_numbers(number1);
    num[4] = num[3];
    num[3] = num[2];
    num[2] = num[4];
    return num[0]*1000+num[1]*100+num[2]*10+num[3];
}