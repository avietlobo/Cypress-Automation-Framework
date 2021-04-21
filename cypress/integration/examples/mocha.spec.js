/// <reference types ="cypress" />
import {HomePage } from '../../support/pages/HomePage'
import {ShopPage } from '../../support/pages/ShopPage'
let homePage
let shopPage

describe('Test Suite',function(){

before(()=>{
     homePage=new HomePage()
     shopPage=new ShopPage()
     cy.fixture('example').then(function(data){
        this.data=data

     })

})


it('Test case',function(){
cy.visit(Cypress.env("url"))
homePage.Name.type(this.data.name)
homePage.shopLink.click()
shopPage.checkout.click()
})




})