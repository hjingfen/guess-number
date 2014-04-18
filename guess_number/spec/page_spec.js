describe("start button", function () {

    beforeEach(function () {
        document.getElementById('num').disabled = 'disabled';
    });

    afterEach(function () {
        document.getElementById('num').disabled = 'disabled';
        localStorage.clear();
    })

    it("should have six opportunities when click the start button", function () {
        click_start();
        var count = JSON.parse(localStorage.getItem('count'));

        expect(count).toBe(6);
    });

    it("should turn to an useful input when click the start button", function () {
        click_start();
        var status = document.getElementById('num').disabled;

        expect(status).toBe(false);
    });

    it("should create and store a random not repeatable four figures when click the start button", function () {
        click_start();
        var number = JSON.parse(localStorage.getItem('number'));

        expect(number).toBe(1234);
    });

});

describe("result button", function () {

    beforeEach(function () {
        result_button_init();
        document.getElementById('num').disabled = false;
    });

    afterEach(function () {
        document.getElementById('num').disabled = true;
        localStorage.clear();
    })

    it("should reduce one opportunity when click the result button", function () {
        var count1 = JSON.parse(localStorage.getItem('count'));
        click_result();
        var count2 = JSON.parse(localStorage.getItem('count'));

        expect(count1-count2).toBe(1);
    });

    it("should clear the input when click the result button", function () {
        click_result();
        var value = document.getElementById('num').value;

        expect(value).toBe('');
    });

    it("should be a disabled input if the count is 0 when click the result button", function () {
        six_times();
        var status = document.getElementById('num').disabled;

        expect(status).toBe(true);
    });

    it("should be a disabled input if success when click the result button", function () {
        success();
        var status = document.getElementById('num').disabled;

        expect(status).toBe(true);
    });

});

describe("result", function () {

    beforeEach(function(){
        click_start();
    })

    afterEach(function () {
        document.getElementById('show').innerHTML = '';
        localStorage.clear();

    })

    it("should show 4A0B恭喜成功！游戏结束！at the first time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = number1;
        GuessNumber.result();

        var show = document.getElementById('show').innerHTML;

        expect(show).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B at the first time and show 4A0B恭喜成功！游戏结束 at the second time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = change(number1);
        GuessNumber.result();
        var show1 = document.getElementById('show').innerHTML;
        document.getElementById('num').value = number1;
        GuessNumber.result();
        var show2 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A2B");
        expect(show2).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B at the first time and show 4A0B恭喜成功！游戏结束 at the sixth time", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        document.getElementById('num').value = change(number1);
        GuessNumber.result();
        var show1 = document.getElementById('show').innerHTML;
        GuessNumber.result();
        GuessNumber.result();
        GuessNumber.result();
        GuessNumber.result();
        document.getElementById('num').value = number1;
        GuessNumber.result();
        var show2 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A2B");
        expect(show2).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A2B游戏结束！when guess failed six times", function () {
        var number1 = JSON.parse(localStorage.getItem('number'));
        GuessNumber.result();
        GuessNumber.result();
        GuessNumber.result();
        GuessNumber.result();
        GuessNumber.result();
        document.getElementById('num').value = change(number1);
        GuessNumber.result();
        var show = document.getElementById('show').innerHTML;

        expect(show).toBe("2A2B游戏结束！");
    });


});