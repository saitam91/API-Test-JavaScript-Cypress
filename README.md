# API Test / JavaScript - Cypress

## Resume:
* This is an example of API Automation Testing with Cypress.

-----------------------  

To achieve this test framework, a test case with REST Countries API was created:

* Send a GET request to the API for three differents regions (continents), returning the countries that belong to that region.

* Validate that the returned countries belong to a given sub-region.
 
 
-----------------------  

* In order to automate the test case, the following classes and files were created:

  ***1. cy.js class***  where the test cases are implemented.

  ***2. .json file (fixture)***   where to save test data that will be used as parameter for the GET request and for validations.
  
  
  
------------------------
  
  ## Technologies used:

   - Language: JavaScript

* Enviroment Configuration:

  - Download and install Node.js

  - Run ```npm init```
  
  - Run ```npm install cypress --save-dev```
  
  - Run ```npm install -D cypress-xpath```

* Mochawesome Reports:

  - Run ```npm install --save-dev mochawesome ```
  
