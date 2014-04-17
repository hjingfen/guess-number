function click_start(){
    localStorage.setItem('count',6);
    document.getElementById('num').disabled = false;
    var number1 = 1234;
    localStorage.setItem('number',number1);
}
function click_result(){
    var count = JSON.parse(localStorage.getItem('count'));
    --count;
    localStorage.setItem('count',count);
}