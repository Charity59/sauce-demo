///reference types="Cypress"/>
context('Add item to cart', () => {
    beforeEach('Login', () => {
        cy.visit('/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })

describe('Product Page', () => {
    it('User can click on a product name', () => {
        cy.contains('Sauce Labs Backpack').click()
        cy.url('include', '/inventory-item.html?id=4')

        cy.get('#back-to-products')
        .should('be.visible')
        .click()
        cy.url('eq', 'https://www.saucedemo.com/inventory.html')

    })
    it('User can click on product picture', () => {

        cy.get('#item_4_img_link')
        .click()
        cy.url('include', '/inventory-item.html?id=4')
        cy.get('#back-to-products')
        .should('be.visible')
        .click()
        cy.url('eq', 'https://www.saucedemo.com/inventory.html')

    })

    it('User can add item to cart from the product page', () => {
        cy.get('#add-to-cart-sauce-labs-backpack')
        .click()
        cy.get('#add-to-cart-sauce-labs-bike-light')
        .click()
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
        .click()
        cy.reload()
        cy.get('#remove-sauce-labs-backpack')
        .contains('Remove')
       
    
    })

    it('Remove item from the item page', () => {
        cy.get('#item_2_img_link')
        .click()
        cy.url('include', '/inventory-item.html?id=2')
        cy.get('#add-to-cart-sauce-labs-onesie')
        .click()
        cy.reload()
        cy.get('#remove-sauce-labs-onesie')
        .contains('Remove')
        .click()
        cy.get('#back-to-products') 
        .should('be.visible')
        .click()
        cy.url('eq', 'https://www.saucedemo.com/inventory.html')


    })

    
    })

})
