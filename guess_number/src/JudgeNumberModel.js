describe(" should judge the type of two four figures ", function () {


    it("should be one type", function () {
        var type = Judge.judge_type();
        console.log(type,'type');

        expect(type=="4A0B" || type=="3A0B" || type=="2A0B" || type=="2A1B" ||type=="2A2B" ||type=="1A0B" || type=="1A1B" || type=="1A2B" || type=="1A3B" || type=="0A0B" || type=="0A1B" || type=="0A2B" ||type=="0A3B" || type=="0A4B").toBe(true);
    });



});