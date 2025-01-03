// cypress/support/commands.js
import 'cypress-iframe';  // Importing the cypress-iframe package for iframe handling

// Custom command to get the body of the iframe
Cypress.Commands.add('getIframeBody', (iframeSelector) => {
  // Ensure the iframe is loaded using 'frameLoaded' method
  cy.frameLoaded(iframeSelector);

  // Access the iframe and get the content of the body
  return cy
    .iframe(iframeSelector)  // Use the iframe selector to access it
    .its('0.contentDocument.body')  // Get the body of the iframe
    .should('not.be.empty')  // Ensure that the body isn't empty
    .then(cy.wrap);  // Wrap it for further Cypress commands (this makes it chainable)
});
