import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { apiCallPost } from "./api-call.js";
import { Lead } from "./lead.js"
import { Loan, Originator, Image } from './loan.js';

$(document).ready(function() {
  let testData = "{\r\n  \"productTypes\": [\r\n    \"loan\", \r\n    \"savings\"\r\n  ], \r\n  \"personalInformation\": {\r\n    \"firstName\": \"Young\", \r\n    \"lastName\": \"Liu\"\r\n  }\r\n}";
  apiCallPost(testData, postError, getError, displayLoans);
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
    str+=`<tr><td>${loan.originator.name} <img class="logo" src=${loan.originator.images[0].url}></td><td>${loan.preQualified}</td><td>${loan.preApproved}</td><td>${loan.termLength} ${loan.termUnit}</td><td>$${loan.minAmount}-$${loan.maxAmount}</td><td>${loan.minApr}%-${loan.maxApr}%</td><td><a href=${loan.url}>Details</a></td>`;
  });
  $("#loanDisplay").html(str);
}


// this.originator = originator;
//     this.preQualified = preQualified;
//     this.preApproved = preApproved;
//     this.termLength = termLength;
//     this.termUnit = termUnit;
//     this.maxAmount = 0;
//     this.minAmount = 0;
//     this.maxApr = 0;
//     this.minApr = 0;
//     this.meanApr = 0;
//     this.url = "";