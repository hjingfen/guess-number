describe("page", function () {


    it("should have six opportunities", function () {
        var count = GuessNumber.count();

        expect(count).toBe(6);
    });

    it("should have a disabled input when step in",function(){
        var disabled = document.getElementById('num').disabled;

        expect(disabled).toBe(true);
    });

    it("should have a useful input when start",function(){
        var disabled = GuessNumber.start();

        expect(disabled).toBe(false);
    });

    it("should have a disabled input and show the result when click result",function(){
        var disabled = GuessNumber.click_result();
        var result = GuessNumber.get_result();
        var r = result;

        expect(disabled).toBe(true);
        expect(result).toBe(r);
    });

});