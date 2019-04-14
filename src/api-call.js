import $ from 'jquery';
import { Loan, Originator, Image } from './loan.js';

var apiInterval;
var loans = [];

export function apiCallPost(data, postError, getError, displayLoans){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.evenfinancial.com/leads/rateTables",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/vnd.evenfinancial.v1+json",
      "Authorization": `Bearer ${process.env.token}`
    },
    "processData": false,
    "data": data
  }

  $.ajax(settings).done(function (response) {
    apiInterval = setInterval(apiCallGet, 1000, response.uuid, getError, displayLoans);
  }).fail(function(error){
    let text = error.responseText;
    let quotes = 0;
    let strMessage = "";
    for(let i = 0; i < text.length; i++){
      if(text[i] === '"'){
        quotes++;
      }
      else if(quotes === 3){
        strMessage += text[i];
      }
    }
    postError(strMessage);
  });
}

export function apiCallGet(uuid, getError, displayLoans){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": `https://api.evenfinancial.com/originator/rateTables/${uuid}`,
    "method": "GET",
    "headers": {
      "Accept": "application/vnd.evenfinancial.v1+json",
      "Authorization": `Bearer ${process.env.token}`
    }
  }

  $.ajax(settings).done(function (response) {
    fillLoansArray(response);
    displayLoans(loans);
    if(response.pendingResponses.length === 0){
      clearInterval(apiInterval);
    }
    console.log(response);
  }).fail(function(error){
    let text = error.responseText;
    let quotes = 0;
    let strMessage = "";
    for(let i = 0; i < text.length; i++){
      if(text[i] === '"'){
        quotes++;
      }
      else if(quotes === 3){
        strMessage += text[i];
      }
    }
    getError(strMessage);
  });
}

function fillLoansArray(response){
  loans = [];
  console.log(response);
  if (response.loanOffers.length > 0){
    for(let i = 0; i < response.loanOffers.length; i++){
      let loan = response.loanOffers[i];
      let newOriginator = new Originator(loan.originator.name);

      if (loan.originator.hasOwnProperty('description')){
        newOriginator.description = loan.originator.description;
      }

      if (loan.originator.hasOwnProperty('disclaimer')){
        newOriginator.disclaimer = loan.disclaimer;
      }

      if(loan.originator.hasOwnProperty('images')){
        for(let j = 0; j < loan.originator.images.length; j++){
            let newImage = new Image(loan.originator.images[j].sizeKey, loan.originator.images[j].url);
            newOriginator.images.push(newImage);
        }
      }

      let newLoan = new Loan(newOriginator, loan.preQualified, loan.preApproved, loan.termLength, loan.termUnit);

      if(loan.hasOwnProperty('maxAmount')){
          newLoan.maxAmount = loan.maxAmount;
      }
      if(loan.hasOwnProperty('minAmount')){
          newLoan.minAmount = loan.minAmount;
      }
      if(loan.hasOwnProperty('maxApr')){
          newLoan.maxApr = loan.maxApr;
      }
      if(loan.hasOwnProperty('minApr')){
          newLoan.minApr = loan.minApr;
      }
      if(loan.hasOwnProperty('meanApr')){
          newLoan.meanApr = loan.meanApr;
      }
      if(loan.hasOwnProperty('url')){
          newLoan.url = loan.url;
      }

      loans.push(newLoan);
    }
  }
  //console.log(loans);
}
