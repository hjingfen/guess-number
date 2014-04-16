describe("page", function () {


    beforeEach(function () {
        init_database();
    });

    afterEach(function () {
        localStorage.clear();
    })

    it("should have six opportunities every time and reduce one by click result", function () {
        var count1 = JSON.parse(localStorage.getItem('count'));
        click_result();
        var count2 = JSON.parse(localStorage.getItem('count'));

        expect(count1).toBe(6);
        expect(count1 - count2 == 1).toBe(true);
    });

});