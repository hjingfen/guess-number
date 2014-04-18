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
        localStorage.setItem("count",1234);
    })

    afterEach(function () {
        document.getElementById('show').innerHTML = '';
        localStorage.clear();

    })

    it("should show 4A0B恭喜成功！游戏结束！at the first time", function () {
        show_result(1234,5);
        var show = document.getElementById('show').innerHTML;

        expect(show).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A0B at the first time and show 4A0B恭喜成功！游戏结束 at the second time", function () {
        show_result(1256,5);
        var show1 = document.getElementById('show').innerHTML;
        show_result(1234,4);
        var show2 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A0B");
        expect(show2).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 4A0B恭喜成功！游戏结束！at the sixth time when first guess success ", function () {
        show_result(1256,5);
        var show1 = document.getElementById('show').innerHTML;
        show_result(1356,4);
        var show2 = document.getElementById('show').innerHTML;
        show_result(1325,3);
        var show3 = document.getElementById('show').innerHTML;
        show_result(1258,2);
        var show4 = document.getElementById('show').innerHTML;
        show_result(1254,1);
        var show5 = document.getElementById('show').innerHTML;
        show_result(1234,0);
        var show6 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A0B");
        expect(show2).toBe("1A1B");
        expect(show3).toBe("1A2B");
        expect(show4).toBe("2A0B");
        expect(show5).toBe("3A0B");
        expect(show6).toBe("4A0B恭喜成功！游戏结束！");
    });

    it("should show 2A0B,1A1B,1A2B,2A0B,3A0B,2A2B游戏结束！when guess failed six times", function () {
        show_result(1256,5);
        var show1 = document.getElementById('show').innerHTML;
        show_result(1356,4);
        var show2 = document.getElementById('show').innerHTML;
        show_result(1325,3);
        var show3 = document.getElementById('show').innerHTML;
        show_result(1258,2);
        var show4 = document.getElementById('show').innerHTML;
        show_result(1254,1);
        var show5 = document.getElementById('show').innerHTML;
        show_result(1243,0);
        var show6 = document.getElementById('show').innerHTML;

        expect(show1).toBe("2A0B");
        expect(show2).toBe("1A1B");
        expect(show3).toBe("1A2B");
        expect(show4).toBe("2A0B");
        expect(show5).toBe("3A0B");
        expect(show6).toBe("2A2B游戏结束！");
    });


});