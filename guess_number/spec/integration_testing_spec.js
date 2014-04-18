describe("judge the type of the random not repeatable four figures and another four figures ", function () {


    var num1 = Number.create();
    var number2 = Judge.two_numbers(num1);
    var n = [];
    n[0] = number2[1];
    n[1] = number2[2];
    n[2] = number2[3];
    n[3] = number2[0];
    var num2 = n[0]*1000+n[1]*100+n[2]*10+n[3];
    it("the type of "+num1+" and "+num2+" should be 0A4B", function () {
        var type = Judge.judge_type(num1,num2);

        expect(type).toBe('0A4B');
    });

});