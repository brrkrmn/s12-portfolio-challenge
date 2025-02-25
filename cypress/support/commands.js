Cypress.Commands.add("switchTheme", () => {
  cy.get('[data-testid="theme-switch"]').click();
});