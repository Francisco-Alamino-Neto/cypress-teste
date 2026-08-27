Cypress.Commands.add("login", (email, password) => {
  cy.viewport(1920, 1080);
  cy.visit("localhost:3000");
  cy.get("#email").type(email);
  cy.get("#password").type(password);
  cy.contains("button", "Entrar").click();
  cy.contains("Dashboard").should("be.visible");
});
