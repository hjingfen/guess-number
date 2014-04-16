describe("page", function () {


    it("should have six opportunities", function () {
        var count = GuessNumber.count();

        expect(count).toBe(6);
    });

});