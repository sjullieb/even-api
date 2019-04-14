//A loan offer is guaranteed to have the following fields:
// originator, preQualified, preApproved, termLength, termUnit, uuid

export class Loan
{
  // "feeRate": null,
  // "maxFeeRate": null,
  // "minFeeRate": null,
  // "feeFixed": null,
  // "maxFeeFixed": null,
  // "minFeeFixed": null,
  // "allowPrepayment": true,
  // "prepaymentFee": 0,
  // "monthlyPayment": 156.69,
  // "maxMonthlyPayment": 198.8,
  // "minMonthlyPayment": 156.69,
  // "meanMonthlyPayment": 177.03,
  // "maxTotalPayment": 7157,
  // "minTotalPayment": 5641,
  // "meanTotalPayment": 6374,
  // "terms": null,
  // "url": "https://offers.evenfinancial.com/ref/b27c8c1c-b9e9-4860-b6a8-8a8b152fd0b1",
  // "secured": false,
  // "sponsored": false,
  // "recommendationScore": 0,
  // "productType": "loan",
  // "productSubType": "personal_loan"

  constructor(originator, preQualified, preApproved, termLength, termUnit){
    this.originator = originator;
    this.preQualified = preQualified;
    this.preApproved = preApproved;
    this.termLength = termLength;
    this.termUnit = termUnit;
    this.maxAmount = 0;
    this.minAmount = 0;
    this.maxApr = 0;
    this.minApr = 0;
    this.meanApr = 0;
    this.url = "";
  }
}

// An originator is guaranteed to have the following fields:
// key, name.

export class Originator{
  // "key": "payoff",
  // "description": "<span> <ul> <li>With a Payoff Loan, you, like other Payoff Members, could raise your credit score by 40 points*.</li> <li>You can consolidate all your credit card payments down to one monthly, affordable, fixed-rate payment between 8%¬ and 25% APR.</li> <li>You WON’T pay any prepayment penalties, application fees, late fees or hidden fees. Because no one wants to do that.</li> <li>Loans for refinancing credit card debt from $5,000 to $35,000</li> </ul> </span>",
  // "images": [
  //     {
  //         "sizeKey": "120x40",
  //         "url": "aff-tag.evenfinancial.com/images/payoff/payoff_120.png"
  //     }
  // ],
  // "disclaimer": "This does not constitute an actual commitment to lend or an offer to  extend credit.",
  // "companyUuid": "f3ddaa43-baa5-4bbb-bb35-806cd33b6625"

  constructor(name){
    this.name = name;
    this.images = [];
  }
}

export class Image{
  constructor(sizeKey, url){
    this.sizeKey = sizeKey;
    this.url = url;
  }
}


// example of json isobject:

// "uuid": "a3dd7f4e-6794-42de-ac5f-3034e0ac29d0",
//             "originator": {
//                 "key": "payoff",
//                 "name": "Payoff",
//                 "description": "<span> <ul> <li>With a Payoff Loan, you, like other Payoff Members, could raise your credit score by 40 points*.</li> <li>You can consolidate all your credit card payments down to one monthly, affordable, fixed-rate payment between 8%¬ and 25% APR.</li> <li>You WON’T pay any prepayment penalties, application fees, late fees or hidden fees. Because no one wants to do that.</li> <li>Loans for refinancing credit card debt from $5,000 to $35,000</li> </ul> </span>",
//                 "images": [
//                     {
//                         "sizeKey": "120x40",
//                         "url": "aff-tag.evenfinancial.com/images/payoff/payoff_120.png"
//                     }
//                 ],
//                 "disclaimer": "This does not constitute an actual commitment to lend or an offer to  extend credit.",
//                 "companyUuid": "f3ddaa43-baa5-4bbb-bb35-806cd33b6625"
//             },
//             "originatorId": null,
//             "termLength": 36,
//             "termUnit": "month",
//             "maxAmount": 35000,
//             "minAmount": 5000,
//             "maxApr": 25,
//             "minApr": 8,
//             "meanApr": 16.5,
//             "feeRate": null,
//             "maxFeeRate": null,
//             "minFeeRate": null,
//             "feeFixed": null,
//             "maxFeeFixed": null,
//             "minFeeFixed": null,
//             "allowPrepayment": true,
//             "prepaymentFee": 0,
//             "monthlyPayment": 156.69,
//             "maxMonthlyPayment": 198.8,
//             "minMonthlyPayment": 156.69,
//             "meanMonthlyPayment": 177.03,
//             "maxTotalPayment": 7157,
//             "minTotalPayment": 5641,
//             "meanTotalPayment": 6374,
//             "terms": null,
//             "url": "https://offers.evenfinancial.com/ref/b27c8c1c-b9e9-4860-b6a8-8a8b152fd0b1",
//             "preQualified": false,
//             "preApproved": false,
//             "secured": false,
//             "sponsored": false,
//             "recommendationScore": 0,
//             "productType": "loan",
//             "productSubType": "personal_loan"
