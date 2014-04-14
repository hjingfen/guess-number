describe("Number", function () {


    beforeEach(function () {

    });

    afterEach(function () {

    })

    it("should create a random four figures", function () {
        var number = Number.create()

        expect(999<number<10000).toBe(true);
    });

});