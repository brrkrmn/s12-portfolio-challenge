Cypress.Commands.add("switchTheme", () => {
  cy.get('[data-testid="theme-switch"]').click();
});

Cypress.Commands.add("switchLanguage", () => {
  cy.get('[data-testid="lang-switch"]').click();
});