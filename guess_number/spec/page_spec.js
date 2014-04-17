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