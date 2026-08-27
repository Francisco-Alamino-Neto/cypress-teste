describe("Formulario", () => {
  it("teste", () => {
    cy.login("4DM@gmail.com", "4DM");
    cy.contains("button", "Formulário").should("be.visible").click();

    cy.contains("h1", "Consultoria").should("be.visible");

    cy.get("#name").type("Teste teste");
    cy.get("#email").type("teste@gmail.com");
    cy.get("#phone").type("11999999999");
    cy.get("#consultancyType").select("In Company");

    cy.contains("label", "Pessoa Jurídica")
      .find("input[type=radio]")
      .click()
      .should("be.checked");
    cy.contains("label", "Pessoa Física")
      .find("input[type=radio]")
      .should("be.not.checked");

    // cy.contains('label', 'Udemy').find('input[type=checkbox]').click().should('be.checked')

    // para quinta que vem mostrar o for
    const sociais = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ];
    sociais.forEach((social) => {
      cy.contains("label", social)
        .find("input[type=checkbox]")
        .click()
        .should("be.checked");
    });

    cy.get('input[type="file"]')
    .selectFile("cypress/fixtures/images.jpg", {force: true});

    cy.get("#details").type("Esta é uma mensagem de teste.");

    const tech = [
      "Java",
      "Spring Boot",
      "React",
      "JavaScript",
      "MySQL",
      "Git",
      "GitHub",
    ];
    tech.forEach((tecnologia) => {
      cy.get("#technologies").type(tecnologia).type("{enter}");
    });

    cy.contains('label', 'Li e aceito os termos de uso')
    .find('input[type=checkbox]')
    .check()
    .should('be.checked')

    cy.contains("button", "Enviar formulário").click();

    cy.contains('.modal-header', 'Sucesso!');

    // cy.get('#message').type('Esta é uma mensagem de teste.')
  });
});
