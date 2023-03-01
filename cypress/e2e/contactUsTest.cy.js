import { homePage } from "../selectors/homePage";
import { contactUs } from "../selectors/ContactUsPage";

describe('contact us',()=>{
    it('cotact',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.contactBtn).click()
        cy.contains(contactUs.titel).should('be.visible')
        cy.get(contactUs.nameInput).type('bjf')
        cy.get(contactUs.emailInput).type('bjf@1')
        cy.get(contactUs.subject).type('bjf')
        cy.get(contactUs.message).type('bjf')
        cy.get(contactUs.chooseFile).selectFile('C:/Users/DELL/Pictures/Screenshots/FORtESTING.png')
        cy.get(contactUs.submitBtn).click()
        cy.contains(contactUs.sucssesMsg).should('be.visible')
        cy.contains(contactUs.homeBtn).click()
        cy.contains(homePage.title).should('be.visible')
})
})