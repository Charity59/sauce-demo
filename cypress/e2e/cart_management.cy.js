///reference types="Cypress"/>

const Login = () => {
    cy.visit('/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()

}
describe('Cart Management', () => {

beforeEach(() => {
Login()
})

it('Add item to cart', () => {
    //Add item to cart
    cy.get('#add-to-cart-sauce-labs-backpack')
    .click()
    cy.get('#add-to-cart-sauce-labs-bike-light')
    .click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
    .click()

    //Navigate to cart
    cy.get('#shopping_cart_container')
    .click()
    cy.url('include', '/cart.html')
    cy.title('eq', 'Your Cart')

    //Remove an item from the cart
    cy.get('#remove-sauce-labs-bolt-t-shirt')
    .click()
    cy.reload()

    //Continue shopping i.e, go back to the product page
    cy.get('#continue-shopping')
    .click()
    cy.url('include', '/inventory.html')

    //Return to the cart
    cy.get('#shopping_cart_container')
    .click()
    cy.url('include', '/cart.html')
    cy.title('eq', 'Your Cart')

    // Checkout
    /*This test also checks that the user cannot 
    checkout without providing infomation*/
    
    cy.get('#checkout')
    .click()
    cy.get('#continue')
    .click()
    cy.get('[data-test="error"]')
    .should('have.text', "Error: First Name is required")
    cy.get('#first-name')
    .type('Charity')
    cy.get('#continue')
    .click()
    cy.get('[data-test="error"]')
    .should('have.text', "Error: Last Name is required")
    cy.get('#last-name')
    .type('Odoh')
    cy.get('#continue')
    .click()
    cy.get('[data-test="error"]')
    .should('have.text', "Error: Postal Code is required")
    cy.get('#postal-code')
    .type('S8 888')
    cy.get('#continue')
    .click()
    cy.title('eq', 'Checkout: Overview')
    cy.get('#finish')
    .click()
    cy.url('include', '/checkout-complete.html')



})

    
})

