///reference types="Cypress"/>


context('Login', () => {
    beforeEach(() => {
      cy.visit('/')
    })
  
    describe('Page', () => {
      it('has user name input', () => {
          cy.get('#user-name')
          .should('have.value', '')
          .and('have.attr', 'placeholder', 'Username')
          .and('be.visible')
          
      })
      it('has password input', () => {
          cy.get('#password')
          .should('have.value', '')
          .and('have.attr', 'placeholder', 'Password')
          .and('be.visible')   
          
          //Login button
  
      })
      it('has login button', () => {
          cy.get('#login-button')
          .should('have.value', 'Login')
          .and('be.visible')
  
      })
    })
    describe('User', () => {
      it('can login with standard user', () => {
          cy.get('#user-name')
          .type('standard_user')
          .should('have.value', 'standard_user')
  
          cy.get('#password')
          .type('secret_sauce')
          .should('have.value', 'secret_sauce')
          cy.get('#login-button').click()
          cy.url().should('include', '/inventory.html')
  
      })
      it('cannot login with wrong password', () => {
          cy.get('#user-name')
          .type('standard_user')
          .should('have.value', 'standard_user')
  
          cy.get('#password')
          .type('secret_sasas')
          .should('have.value', 'secret_sasas')
          
          cy.get('#login-button').click()
  
          cy.get('[data-test="error"]')
          .should('have.text', "Epic sadface: Username and password do not match any user in this service")
      })
  
      it('password is case sensitive', () => {
          cy.get('#user-name')
          .type('standard_user')
          .should('have.value', 'standard_user')
  
          cy.get('#password')
          .type('SECRET_SAUCE')
          .should('have.value', 'SECRET_SAUCE')
  
          cy.get('#login-button').click()
          
          cy.get('[data-test="error"]')
          .should('have.text', "Epic sadface: Username and password do not match any user in this service")
          cy.url().should('eq', 'https://www.saucedemo.com/')
          
  
      })
      it.only('can logout', () => {
          cy.get('#user-name')
          .type('standard_user')
          .should('have.value', 'standard_user')

          
  
          cy.get('#password')
          .type('secret_sauce')
          .should('have.value', 'secret_sauce')
          cy.get('#login-button').click()
          cy.url().should('include', '/inventory.html')
  
          cy.get('#react-burger-menu-btn')
          .click()
          cy.get('#logout_sidebar_link')
          .click()
          cy.url().should('eq', 'https://www.saucedemo.com/')
      
  
      })
     
    })
  
  })
  
  