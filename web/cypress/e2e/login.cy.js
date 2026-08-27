describe('Login', () => {
  it('Login inválido', () => {
    cy.viewport(1920, 1080)
    cy.visit('localhost:3000')
    cy.get('#email').type('email@email.com')
    cy.get('#password').type('password')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })
  it('Login válido', () => {
    cy.viewport(1920, 1080)
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('4DM')
    cy.contains('button', 'Entrar').click()
    cy.contains('Dashboard').should('be.visible')
  })

  it.only('Login inválido, email em branco', () => {
    cy.viewport(1920, 1080)
    cy.visit('localhost:3000')
    cy.get('#password').type('4DM')
    cy.contains('button', 'Entrar').click()
    cy.contains('Ei, não esqueça de digitar seu email!')
    .should('be.visible').and('have.css', 'color', 'rgb(248, 113, 113)')
  })
  it.only('Login inválido, senha em branco', () => {
    cy.viewport(1920, 1080)
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.contains('button', 'Entrar').click()
    cy.contains('Você precisa de uma senha para entrar! 🔒').should('be.visible')
  })

  it.only('Login inválido, senha incorreta', () => {
    cy.viewport(1920, 1080)
    cy.visit('localhost:3000')
    cy.get('#email').type('4DM@gmail.com')
    cy.get('#password').type('password')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  })
})