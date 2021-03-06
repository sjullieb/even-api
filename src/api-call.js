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
    postError(error.responseText);
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
    getError(error.responseText);
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
          let imgUrl = loan.originator.images[j].url;
          if(imgUrl.indexOf("http") === -1){
            imgUrl = "http://" + imgUrl;
          }
          let newImage = new Image(loan.originator.images[j].sizeKey, imgUrl);
          newOriginator.images.push(newImage);
        }
      }
      if(loan.minApr === null)
        loan.minApr = 0;

      if(loan.minAmount === null)
        loan.minAmount = 0;

      let preQualified = "YES";
      if(loan.preQualified === false)
        preQualified = "NO";

      let preApproved = "YES";
      if(loan.preApproved === false)
        preApproved = "NO";

      let newLoan = new Loan(newOriginator, preQualified, preApproved, loan.termLength, loan.termUnit);

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
