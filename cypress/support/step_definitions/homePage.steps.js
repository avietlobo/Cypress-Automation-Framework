/// <reference types="cypress" />
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import { before } from "mocha";
import { HomePage } from '../pages/HomePage'
import { ShopPage } from '../pages/ShopPage'
let homePage
let shopPage
before(() => {
    homePage = new HomePage()
    shopPage = new ShopPage()
})

Given('I am on the home page', () => {
    cy.visit(Cypress.env('url'))
})


When('I navigate to the shop page', function () {
    homePage.shopLink.click()
})


Then('the shop is displayed successfully', function () {
    cy.url().should('include', 'shop')

})

When('I fill the user form', function () {
    homePage.name.type(this.data.name)
    homePage.submit.click()
})


Then('I see the form got submitted successfully', function () {
    homePage.alert.then(function ($el) {
        const text = $el.text()
        expect(text).to.include('Success')
    })



})







