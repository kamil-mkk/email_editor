// Helper function to verify console logs
export function verifyConsoleLogs(consoleLogStub) {
  cy.window().then(() => {
    if (consoleLogStub) {
      const allCalls = consoleLogStub.getCalls();
      if (allCalls.length === 0) {
        cy.log('No console logs were generated.');
        expect(allCalls.length).to.be.greaterThan(0, 'Expected console logs to be generated');
        return;
      }
      const logs = allCalls.map((call) => call.args.join(' '));

      expect(logs.some(log => log.includes('background-color: #e03e2d'))).to.be.true;
      // If verification passes, print success message
      if (logs.some(log => log.includes('background-color: #e03e2d'))) {
        cy.log('Background color of the selected text changed to Red and verified successfully!');
      }
    } else {
      cy.log('consoleLogStub is not defined');
    }
  });
}