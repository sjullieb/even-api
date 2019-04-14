import { Lead } from '../src/lead.js';

describe('Lead', function(){
    let firstName = "John";
    let lastName = "Smith";
    let email="jsmith@fakebook.com";
    let city = "Seattle";
    let state = "WA";
    let primaryPhone = "425-488-7395";
    let workPhone = "422-222-2234";
    let address1 = "11223 71st Ave";
    let address2 = "Apartment C";
    let ssn = "524-22-2521";
    let purpose = "business"
    let loanAmount = 5000;
    let education = "bachelors";
    let creditRating = "good";
    let employmentStatus = "employed";
    let annualIncome = 100000;
    let payFrequency = "twice_monthly";
    let newLead;
    beforeEach(function(){
        newLead = new Lead(firstName, lastName, email, city, state, primaryPhone, workPhone, address1, address2, ssn, purpose, loanAmount, education, creditRating, employmentStatus, annualIncome, payFrequency);
    });
    it('Constructor assigns name', function(){
        expect(newLead.personalInformation.firstName).toEqual("John");
        expect(newLead.personalInformation.lastName).toEqual("Smith");
    })
    it("Constructor assigns email", function(){
        expect(newLead.personalInformation.email).toEqual("jsmith@fakebook.com");
    });
    it("Constructor assigns address", function(){
        expect(newLead.personalInformation.address1).toEqual("11223 71st Ave");
        expect(newLead.personalInformation.address2).toEqual("Apartment C");
        expect(newLead.personalInformation.city).toEqual("Seattle");
        expect(newLead.personalInformation.state).toEqual("WA");
    });
    it("Constructor assigns phone numbers", function(){
        expect(newLead.personalInformation.primaryPhone).toEqual("425-488-7395");
        expect(newLead.personalInformation.workPhone).toEqual("422-222-2234");
    });
    it("Constructor assigns SSN", function(){
        expect(newLead.personalInformation.ssn).toEqual("524-22-2521");
    });
})