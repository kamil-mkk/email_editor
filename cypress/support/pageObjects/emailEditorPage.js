// support/pageobjects/emailEditorPage.js
export class EmailEditorPage {
    get buyText() {
      return cy.contains('Buy');
    }
  
    get colorPicker() {
      return cy.get('#color-picker-trigger > div').eq(0);
    }
  
    get colorPalette() {
      return cy.get('div[class*="circle-picker"]').eq(0);
    }
  
    getColorInput() {
        return cy.get('[id^="rc-editable-input-"]', { timeout: 10000 }).should('be.visible').as('colorInput').then(() => {
          cy.task('log', 'Color input field is visible');
        });
    }
  }