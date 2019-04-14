import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { apiCallPost } from "./api-call.js";
import { Lead } from "./lead.js"
import { Loan, Originator, Image } from './loan.js';

$(document).ready(function() {
  // let testData = "{\r\n  \"productTypes\": [\r\n    \"loan\", \r\n    \"savings\"\r\n  ], \r\n  \"personalInformation\": {\r\n    \"firstName\": \"Young\", \r\n    \"lastName\": \"Liu\"\r\n  }\r\n}";
  $("#inForm").submit(function(event){
    event.preventDefault();
    let myFirstName = $("#firstName").val();
    let myLastName = $("#lastName").val();
    let myEmail = $("#email").val();
    let myCity = $("#city").val();
    let myState = $("#state").val();
    let myPrimaryPhone = $("#primaryPhone").val();
    let myWorkPhone = $("#workPhone").val();
    let myAddress1 = $("#address1").val();
    let myAddress2 = $("#address2").val();
    let mySsn = $("#ssn").val();
    let myPurpose = $("#loanPurpose").val();
    let myLoanAmount = $("#loanAmount").val();
    let myEducationLevel = $("#education").val();
    let myProvidedCreditRating = $("#creditScore").val();
    let myEmploymentStatus = $("#employment").val();
    let myAnnualIncome = $("#annualSalary").val();
    let myPayFrequency = $("#paymentFrequency").val();
    let inputLead = new Lead(myFirstName, myLastName, myEmail, myCity, myState, myPrimaryPhone, myWorkPhone, myAddress1, myAddress2, mySsn, myPurpose, myLoanAmount, myEducationLevel, myProvidedCreditRating, myEmploymentStatus, myAnnualIncome, myPayFrequency);
    console.log(inputLead.returnJSON());
    apiCallPost(inputLead.returnJSON(), postError, getError);
  });
});

function postError(errorText){
  console.log(errorText);
}

function getError(errorText){
  console.log(errorText);
}

function displayLoans(loans){
  console.log(loans);
}
