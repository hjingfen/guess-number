describe("create a random not repeatable four figures", function () {


    it("should be a number", function () {
        var number = Number.create();

        expect(isNaN(number)).toBe(false);
    });
    it("should be a random create number", function () {
        var numbers = [];
        for (var i = 0;i<1000;i++){
            var number = Number.create();
            numbers.push(number);
        }
        var count = _.filter(numbers,function(n){return n == numbers[0]});
        var p = (count.length)/1000;
        expect(p<=0.005 && p>=0.001).toBe(true);
    });
    it("shouldn't be repeatable", function () {
        var number = Number.create();
        var a = parseInt(number / 1000);
        var b = parseInt((number-a*1000) / 100);
        var c = parseInt((number-a*1000-b*100) / 10);
        var d = number % 10;

        expect(a != b && a != c && a != d && b != c && b != d && c != d).toBe(true);
    });
    it("should be a four figures", function () {
        var number = Number.create();

        expect(number > 999 && number < 10000).toBe(true);
    });
});