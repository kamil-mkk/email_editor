# Email Editor End-to-End Tests

**This project contains end-to-end tests for the Email Editor application using Cypress.**

## Approach

The test is written using Cypress with javascript. The automation approach involves:

* Using a page object model to encapsulate the interactions with the Email Editor application
* Writing test to cover the given scenarios of editing data in app and verifying changes in developer console 
* Using Cypress's built-in commands and assertions to verify the behaviour of the application

## Getting Started

Follow the below steps for running the automated test:

* Clone the repository: git clone https://github.com/kamil-mkk/email_editor.git
* Install Node.js - v14 or above
* Install the dependencies: npm install
* Install the required Cypress plugins for capturing iframe: npm install --save-dev cypress-iframe
* Open the Email Editor application at: https://react-email-editor-demo.netlify.app/
* Run the tests: npx cypress run

## Project Structure

* cypress-email-editor: Root folder of the project under which we have cypress as it sub-folder
* package.json: Project configuration file, listing dependencies and scripts
* cypress.config.js: Configuration file for Cypress, defining settings for end-to-end testing
* cypress/integration/emailEditorTests.cy.js: Main test file containing E2E tests for the Email Editor application
* cypress/support/variables.js: File containing variables used in the tests
* cypress/support/consoleLogVerifier.js: Function defined to verify console logs
* cypress/support/commands.js: Defines custom Cypress commands, including getIframeBody for handling iframes
* cypress/fixtures/colorCodes.json: JSON file containing color codes used in the tests
* cypress/support/pageObjects/emailEditorPage.js: Page object model definitions for the Email Editor application

## Test Scenarios

The tests cover the following scenarios:

* Opening the Email Editor app link
* Selecting any given text from the given email body. *I picked 'Buy' text* to be clicked
* Changed the backgrund-color of the Buy text from Blue to Red using their hex code, through the color-picker
* Clicked on the Export HTML button
* Verified the background-color changed in the dev console and printed in cypress command logs

## Future Work

* Add more test scenarios to cover additional user flows through the app
* Verifying API responses of the changes made in the app
* Enhancing page object model with wait mechanisms and enhanced error handling for better reliability and robustness
