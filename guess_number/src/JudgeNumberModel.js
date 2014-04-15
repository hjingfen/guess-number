describe(" should judge the type of two four figures ", function () {


    it("the type of 1234 and 5678 should be 0A0B", function () {
        var type = Judge.judge_type(1234,5678);

        expect(type).toBe('0A0B');
    });

    it("the type of 1234 and 5671 should be 0A1B", function () {
        var type = Judge.judge_type(1234,5671);

        expect(type).toBe('0A1B');
    });

    it("the type of 1234 and 1567 should be 1A0B", function () {
        var type = Judge.judge_type(1234,1567);

        expect(type).toBe('1A0B');
    });

    it("the type of 1234 and 1562 should be 1A1B", function () {
        var type = Judge.judge_type(1234,1562);

        expect(type).toBe('1A1B');
    });

    it("the type of 1234 and 1236 should be 3A0B", function () {
        var type = Judge.judge_type(1234,1236);

        expect(type).toBe('3A0B');
    });

    it("the type of 1234 and 1342 should be 1A3B", function () {
        var type = Judge.judge_type(1234,1342);

        expect(type).toBe('1A3B');
    });

    it("the type of 1234 and 1234 should be 4A0B", function () {
        var type = Judge.judge_type(1234,1234);

        expect(type).toBe('4A0B');
    });

    it("the type of 1234 and 2341 should be 0A4B", function () {
        var type = Judge.judge_type(1234,2341);

        expect(type).toBe('0A4B');
    });

});