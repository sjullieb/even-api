import $ from 'jquery';

var apiInterval;

export function apiCallPost(data, postError, getError){
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
    apiInterval = setInterval(apiCallGet, 1000, response.uuid, getError);
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

export function apiCallGet(uuid, getError){
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
