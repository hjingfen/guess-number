function Judge(){

}

Judge.judge_type = function(){
    var number1 = Number.create();
    var number2 = Number.create();
    var num1 = Judge.two_numbers(number1);
    var num2 = Judge.two_numbers(number2);
    var same = 0;
    var like = 0;
    for(var i = 0;i<4;i++){
        if(num1[i] == num2[i]){
            same++;
        }
        if(Judge.num1_in_num2(num2,num1[i])){
            like++;
        }
    }
    return same+'A'+(like-same)+'B';
}

Judge.two_numbers = function(number){
    var num = [];
    num.push(parseInt(number / 1000));
    num.push(parseInt((number-num[0]*1000) / 100));
    num.push(parseInt((number-num[0]*1000-num[1]*100) / 10));
    num.push(number % 10);
    return num;
}

Judge.num1_in_num2 = function(num2,number){
    return _.find(num2,function(n){return n == number}) != undefined;
}
