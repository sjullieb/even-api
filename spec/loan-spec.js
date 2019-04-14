import { Loan } from '../src/loan.js';

describe('Loan', function(){
    let originator = "New bank";
    let preQualified = true;
    let preApproved = true;
    let termLength = 60;
    let termUnit = "months";
    let newLoan;
    beforeEach(function(){
        newLoan = new Loan(originator, preQualified, preApproved, termLength, termUnit)
    });
    it("Loan should create", function(){
        expect(newLoan).toBeTruthy();
    });
    it("Constructor should assign originator", function(){
        expect(newLoan.originator).toEqual("New bank");
    })
    it("Constructor should assign preQualified", function(){
        expect(newLoan.preQualified).toEqual(true);
    });
    it("Constructor should assign preApproved", function(){
        expect(newLoan.preApproved).toEqual(true);
    });
    it("Constructor should assign termLength", function(){
        expect(termLength).toEqual(60);
    });
    it("Constructor should assign termUnit", function(){
        expect(newLoan.termUnit).toEqual("months");
    });
    it("termLength and termUnit should combine to a string", function(){
        expect(newLoan.termLength + " " + newLoan.termUnit).toEqual("60 months");
    });
    it("minAmount should default to 0", function(){
        expect(newLoan.minAmount).toEqual(0);
    });
    it("maxAmount should default to 0", function(){
        expect(newLoan.maxAmount).toEqual(0);
    });
    it("minApr should default to 0", function(){
        expect(newLoan.minApr).toEqual(0);
    });
    it("maxApr should default to 0", function(){
        expect(newLoan.maxApr).toEqual(0);
    });
    it("meanApr should default to 0", function(){
        expect(newLoan.meanApr).toEqual(0);
    });
    it("url should default to empty string", function(){
        expect(newLoan.url).toEqual("");
    });
});
