describe("Number", function () {


    beforeEach(function () {
        init_number_database();
    });

    afterEach(function () {
        localStorage.clear();
    })

    it("should create a four figures which have no repeatable number", function () {
        var number = new Number();
        console.log(number,'num')
        number.create();


        var activity_json = JSON.parse(localStorage.numbers);
        expect(activity_json.length).toBe(1);
        expect(localStorage.current_number).toBe(JSON.stringify(number.number));
    });

});