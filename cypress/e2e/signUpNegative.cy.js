import { homePage } from "../selectors/homePage";
import { signup } from "../selectors/signupPage";

describe('signup negative',()=>{
    it('Register User with existing email',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.siginUpAndLoginBtn).click()
        cy.contains(signup.titel).should('be.visible')
        cy.get(signup.namkeInput).type(signup.detailesData.name)
        cy.get(signup.emailInput).type(signup.detailesData.email)
        cy.get(signup.signupBtn).click()
        cy.contains('Email Address already exist!').should('be.visible')
    })
})