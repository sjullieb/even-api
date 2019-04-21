## Even API Loan Pair App
An app to pair users with the loans they need.
#### By Dave Sarbora, Yulia Shidlovskaya, and Young Liu

## Description
This web app uses the Even Fintech API to pair users with loan providers. It takes data entered by the user in the form on the front page and passes it through to the Even API in the form of a JSON object. It then takes each loan that comes back from the API and converts it into an object, forms an array of these objects, and displays the properties of each loan to the user.

This project was created with Webpack and Node Package Manager.

## Specifications

|Behavior|Input|Output|
|------:|:----:|:-----|
|User must provide first and last name|No input, submit|Form won't submit|
|User may submit form|User submits information|API is called             |
|Loans show on page  |User submits information|List of loans appears     |
|User can access loan page if available|User clicks loan link|Redirect to loan page|

## Setup/Installation Requirements

* Download and install Node Package Manager.
* Clone this repository.
* Navigate to the project in your command line.
* Run the command $npm install.
* Run the command $npm run build.
* Run the command $npm run start.
* The project should open in browser momentarily.

## API-KEY
#### Without an API key, the project will run but to no effect.
* Create an account at <https://developers.evenfinancial.com/> and aquire a bearer token.
* Create a file in the project's root directory named ".env"
* Store the token in the .env file using this format: 
* token = YOUR-TOKEN-GOES-HERE
* _The access token to use for testing the Even API: 
e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2_

## Contact Information

Contact the authors:
* Dave Sarbora at <dsarbora@gmail.com>
* Yulia Shidlovskaya at <sjullieb@gmail.com>
* Young Liu at <youngliu92@gmail.com>

## Known Bugs
There are no known bugs at this time.

## Technologies Used
* Atom
* VSCode
* JavaScript
* HTML
* CSS
* Node.js
* Node Package Manager
* Webpack
* UglifyJs
* ESLint
* DotEnv

#### License

*MIT

Copyright (c) 2019 by *_Dave Sarbora, Yulia Shidlovskaya, and Young Liu_*

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
