function Judge(){

}

Judge.judge_type = function(){
//    var number1 = Number.create();
//    var number2 = Number.create();
    var number1 = 1234;
    var number2 = 1243;
    var num1 = Judge.two_numbers(number1);
    var num2 = Judge.two_numbers(number2)
    if(number1 == number2){
        return "4A0B";
    }
    if(Judge.is_3A0B(num1,num2)){
        return "3A0B";
    }
    if(Judge.is_2A2B(num1,num2)){
        return "2A2B";
    }
    if(Judge.is_2A0B(num1,num2)){
        return "2A0B";
    }
    if(Judge.is_1AOB(num1,num2)){
        return "1A0B";
    }
    if(Judge.is_0A0B(num1,num2)){
        return "0A0B";
    }
    else{return "0A0B"}
}

Judge.two_numbers = function(number){
    var num = [];
    num.push(parseInt(number / 1000));
    num.push(parseInt((number-num[0]*1000) / 100));
    num.push(parseInt((number-num[0]*1000-num[1]*100) / 10));
    num.push(number % 10);
    return num;
}

Judge.is_3A0B = function(num1,num2){
    return (num1[0] == num2[0] && num1[1] == num2[1] && num1[2] == num2[2] && num1[3] != num2[3]) ||
    (num1[0] == num2[0] && num1[1] == num2[1] && num1[2] != num2[2] && num1[3] == num2[3]) ||
    (num1[0] == num2[0] && num1[1] != num2[1] && num1[2] == num2[2] && num1[3] == num2[3]) ||
    (num1[0] != num2[0] && num1[1] == num2[1] && num1[2] == num2[2] && num1[3] == num2[3]);
}

Judge.is_2A2B = function(num1,num2){
    return num1[0] == num2[0] && num1[1] == num2[1] && num1[2] == num2[3] && num1[3] == num2[2] ||
    num1[0] == num2[0] && num1[2] == num2[2] && num1[1] == num2[3] && num1[3] == num2[1] ||
    num1[0] == num2[0] && num1[3] == num2[3] && num1[1] == num2[2] && num1[2] == num2[1] ||
    num1[1] == num2[1] && num1[2] == num2[2] && num1[0] == num2[3] && num1[3] == num2[0] ||
    num1[1] == num2[1] && num1[3] == num2[3] && num1[0] == num2[2] && num1[2] == num2[0] ||
    num1[2] == num2[2] && num1[3] == num2[3] && num1[0] == num2[1] && num1[1] == num2[0];
}

Judge.is_2A0B = function(num1,num2){
    return (num1[0] == num2[0] && num1[1] == num2[1] && Judge.un_repeat_num2(num2,num1[2]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[0] == num2[0] && num1[2] == num2[2] && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[0] == num2[0] && num1[3] == num2[3] && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[2])) ||
        (num1[1] == num2[1] && num1[2] == num2[2] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[1] == num2[1] && num1[3] == num2[3] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[2])) ||
        (num1[2] == num2[2] && num1[3] == num2[3] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[1]));
}

Judge.is_1AOB = function(num1,num2){
    return (num1[0] == num2[0] && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[2]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[1] == num2[1] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[2]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[2] == num2[2] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[3])) ||
        (num1[3] == num2[3] && Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[2]));
}

Judge.is_0A0B =function(num1,num2){
    return (Judge.un_repeat_num2(num2,num1[0]) && Judge.un_repeat_num2(num2,num1[1]) && Judge.un_repeat_num2(num2,num1[2]) && Judge.un_repeat_num2(num2,num1[3]));
}

Judge.un_repeat_num2 = function(num2,number){
    return _.find(num2,function(n){return n == number}) == undefined;
}
