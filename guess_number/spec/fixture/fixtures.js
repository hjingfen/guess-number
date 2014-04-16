function init_database(){
    localStorage.setItem('count',6);
}
click_result = function(){
    var count = JSON.parse(localStorage.getItem('count'));
    count--;
    localStorage.setItem('count',count);
}