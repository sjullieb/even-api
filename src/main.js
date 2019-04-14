import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { apiCallPost } from "./api-call.js";
import { Loan, Originator, Image } from './loan.js';

$(document).ready(function() {
  let testData = "{\r\n  \"productTypes\": [\r\n    \"loan\", \r\n    \"savings\"\r\n  ], \r\n  \"personalInformation\": {\r\n    \"firstName\": \"Young\", \r\n    \"lastName\": \"Liu\"\r\n  }\r\n}";
  apiCallPost(testData, postError, getError, displayLoans);
  // apiCallGet("asdas");
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
