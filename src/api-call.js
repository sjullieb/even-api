import $ from 'jquery';

export function apiCall(){
  let settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.evenfinancial.com/leads/rateTables",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "Accept": "application/vnd.evenfinancial.v1+json",
      "Authorization": "Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2",
      "cache-control": "no-cache",
      "Postman-Token": "3da2c6f5-4d6d-40c4-b57a-98c809ff376d"
    },
    "processData": false,
    "data": "{\r\n  \"productTypes\": [\r\n    \"loan\", \r\n    \"savings\"\r\n  ], \r\n  \"personalInformation\": {\r\n    \"firstName\": \"Young\", \r\n    \"lastName\": \"Liu\"\r\n  }\r\n}"
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  });
}
