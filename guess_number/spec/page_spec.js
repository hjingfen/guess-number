describe("start button", function () {

    beforeEach(function () {
        document.getElementById('num').disabled = 'disabled';
    });

    afterEach(function () {
        document.getElementById('num').disabled = 'disabled';
        localStorage.clear();
    });

    it("should turn to an useful input when click the start button", function () {
        document.getElementById('start').click();
        var status = document.getElementById('num').disabled;

        expect(status).toBe(false);
    });

    it("should store a random not repeatable four figures when click the start button", function () {
        document.getElementById('start').click();
        var number = JSON.parse(localStorage.getItem('number'));

        expect(isNaN(number)).toBe(false);
    });

});

describe("result button and show result", function () {

    beforeEach(function(){
        init();
    });

    afterEach(function () {
        document.getElementById('show').innerHTML = '';
        localStorage.clear();

    });

    it("should have six opportunities when click the start button", function () {
        document.getElementById('start').click();
        var count = JSON.parse(localStorage.getItem('count'));

        expect(count).toBe(6);
    });

    it("should reduce one opportunity when click the result button", function () {
        var count1 = JSON.parse(localStorage.getItem('count'));
        document.getElementById('result').click();
        var count2 = JSON.parse(localStorage.getItem('count'));

        expect(count1-count2).toBe(1);
    });

    it("should clear the input when click the result button", function () {
        document.getElementById('result').click();
        var value = document.getElementById('num').value;

        expect(value).toBe('');
    });

    it("should show 4A0B恭喜成功！游戏结束！at the first time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = number1;
        document.getElementById('result').click();

        var show = document.getElementById('show').innerHTML;

        expect(show).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B at the first time and show 4A0B恭喜成功！游戏结束 at the second time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        var show1 = document.getElementById('show').innerHTML;
        document.getElementById('num').value = number1;
        document.getElementById('result').click();
        var show2 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A2B");
        expect(show2).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B at the first time and show 4A0B恭喜成功！游戏结束 at the sixth time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        var show1 = document.getElementById('show').innerHTML;
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = number1;
        document.getElementById('result').click();
        var show2 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A2B");
        expect(show2).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B游戏结束！and the input turn to disabled when guess failed six times", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        document.getElementById('num').value = change(number1);
        document.getElementById('result').click();
        var show = document.getElementById('show').innerHTML;
        var status = document.getElementById('num').disabled;

        expect(status).toBe(true);
        expect(show).toBe("2A2B游戏结束！");
    });


});