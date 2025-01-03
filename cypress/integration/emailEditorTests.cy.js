import 'cypress-iframe';
import { EmailEditorPage } from '../support/pageObjects/emailEditorPage';
import colorCodes from '../fixtures/colorCodes.json';
import { verifyConsoleLogs } from '../support/consoleLogVerifier';
import { EMAIL_EDITOR_URL, EXPORT_HTML_BUTTON_SELECTOR, IFRAME_SRC } from '../support/variables';

describe('Email Editor Tests', () => {
  let consoleLogStub;
  let emailEditorPage;

  beforeEach(() => {
    cy.visit(EMAIL_EDITOR_URL);
    emailEditorPage = new EmailEditorPage();
    cy.window().then((win) => { 
      consoleLogStub = cy.stub(win.console, "log"); 
    });
  });

  it('should click on Buy Text and enter background color code in color picker', () => {
    // Access the iframe where the email editor is loaded
    cy.get(`iframe[src="${IFRAME_SRC}"]`).then(($iframe) => {
      const iframeBody = $iframe.contents().find('body');
  
      // Wrap the iframe body for Cypress commands
      cy.wrap(iframeBody).within(() => {
        // Wait for the "Buy" button to be visible and clickable
        emailEditorPage.buyText.should('be.visible').and('not.be.disabled').click({ force: true }).then(() => {
          cy.task('log', 'Clicked the "Buy" button');
        });
  
        // Wait for the color picker to be visible
        cy.wait(1000);
  
        // Open the background color picker
        emailEditorPage.colorPicker.click({ force: true }).then(() => {
          cy.task('log', 'Opened the background color picker');
        });
  
        // Wait for the color picker to be fully visible
        emailEditorPage.colorPalette.should('be.visible', { timeout: 15000 }).then(($palette) => {
          cy.task('log', 'Color Picker HTML:', $palette.html());
  
          emailEditorPage.getColorInput().then(() => {
            cy.get('@colorInput').eq(0).invoke('val', '').then(() => {
              cy.get('@colorInput').eq(0).type(colorCodes.updatedColor).then(() => {
                cy.task('log', `Entered color code ${colorCodes.updatedColor}`);
                emailEditorPage.buyText.click();
              });
            });
          });
        });
      });
    });

    // Click the Export HTML button (OUTSIDE the iframe)
    cy.get(EXPORT_HTML_BUTTON_SELECTOR)
      .click()
      .then(() => {
        cy.task('log', 'Export HTML button clicked');
      });

    // Wait for 2 seconds to ensure console logs are generated
    cy.wait(2000);

    verifyConsoleLogs(consoleLogStub);
  });
});