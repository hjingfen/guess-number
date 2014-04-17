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