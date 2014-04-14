describe("Number", function () {


    beforeEach(function () {

    });

    afterEach(function () {

    })

    it("should create a random not repeatable four figures", function () {
        var number = Number.create();
console.log(number,'n')
        var a = parseInt(number / 1000);
        var b = parseInt((number-a*1000) / 100);
        var c = parseInt((number-a*1000-b*100) / 10);
        var d = number % 10;

        expect(number > 999 && number < 10000).toBe(true);
        expect(a != b && a != c && a != d && b != c && b != d && c != d).toBe(true);

    });
});