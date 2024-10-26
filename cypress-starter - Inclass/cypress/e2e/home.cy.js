describe('home test', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
        cy.viewport(1200, 1200);
    })
    it('home', () => {
        cy.login()
        cy.get('[data-test="inputHeader"]').should('be.visible').contains('Recipe')
        cy.get('[data-test="loginName"]').should('be.visible').type('Anthony')
        cy.get('[data-test="loginPassword"]').should('be.visible').type('Clarusway')
        cy.get('[data-test="loginSbmt"]').should('be.visible').click()
        cy.url().should('include', '/home')
    })
    
  })