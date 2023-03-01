/// <reference types="Cypress" />
import { homePage } from "../selectors/homePage";
import { signup } from "../selectors/signupPage";
import { products } from "../selectors/productsPage";
import "cypress-real-events/support";
describe("scrolling tests",()=>{
    it("Verify Scroll Up using 'Arrow' button and Scroll Down functionality",()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.scrollTo("bottom")
        cy.contains('Subscription').should('be.visible')
        cy.get(homePage.arrowUpBtn).click()
        cy.contains(homePage.title).should('be.visible')
    })
    it("Verify Scroll Up without 'Arrow' button and Scroll Down functionality",()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.scrollTo("bottom")
        cy.contains('Subscription').should('be.visible')
        cy.scrollTo("top")
        cy.contains(homePage.title).should('be.visible')
    })
})