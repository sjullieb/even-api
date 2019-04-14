import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { apiCallPost } from "./api-call.js";
import { Lead } from "./lead.js"
import { Loan, Originator, Image } from './loan.js';

$(document).ready(function() {
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
    $("#splash").hide();
    $("#display").show();
    console.log(inputLead.returnJSON());
    apiCallPost(inputLead.returnJSON(), postError, getError, displayLoans);
  });
});

$('#ssn').keyup(function() {
  var val = this.value.replace(/\D/g, '');
  var newVal = '';
  if(val.length > 4) {
     this.value = val;
  }
  if((val.length > 3) && (val.length < 6)) {
     newVal += val.substr(0, 3) + '-';
     val = val.substr(3);
  }
  if (val.length > 5) {
     newVal += val.substr(0, 3) + '-';
     newVal += val.substr(3, 2) + '-';
     val = val.substr(5);
   }
   newVal += val;
   this.value = newVal.substring(0, 11);
});

function postError(errorText){
  console.log(errorText);
}

function getError(errorText){
  console.log(errorText);
}

function displayLoans(loans){
  let str = "<tr><th>Originator</th><th>Pre-Qualified</th><th>Pre-Approved</th><th>Term Length</th><th>Loan Amount</th><th>APR</th><th>Link</th></tr>";
  loans.forEach(function(loan){
    str+=`<tr><td>${loan.originator.name} <img class="logo" src=${loan.originator.images[0].url} alt=""></td><td>${loan.preQualified}</td><td>${loan.preApproved}</td><td>${loan.termLength} ${loan.termUnit}</td><td>$${loan.minAmount}-$${loan.maxAmount}</td><td>${loan.minApr}%-${loan.maxApr}%</td><td><a href=${loan.url}>Details</a></td>`;
  });
  $("#loanDisplay").html(str);
}
