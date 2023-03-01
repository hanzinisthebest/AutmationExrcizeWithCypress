import { homePage } from "../selectors/homePage";
import { loginPage } from "../selectors/loginPage";

describe('login',()=>{
    it('login and delete',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.siginUpAndLoginBtn).click()
        cy.contains(loginPage.title).should('be.visible')
        cy.get(loginPage.emailInput).type(loginPage.detailesData.email)
        cy.get(loginPage.passwordInput).type(loginPage.detailesData.password)
        cy.get(loginPage.loginBtn).click()
        cy.contains(loginPage.logedAs).should('be.visible')
        cy.contains(loginPage.deleteBtn).click()
        cy.contains(loginPage.verfDelete)
        cy.get(loginPage.continueDeleteBtn).click()
    })
    it('login Negative test',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.siginUpAndLoginBtn).click()
        cy.contains(loginPage.title).should('be.visible')
        cy.get(loginPage.emailInput).type(loginPage.detailesData.email)
        cy.get(loginPage.passwordInput).type(loginPage.detailesData.password)
        cy.get(loginPage.loginBtn).click()
        cy.contains(loginPage.errorMassage).should('be.visible')

    })

    it('logOut',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.siginUpAndLoginBtn).click()
        cy.contains(loginPage.title).should('be.visible')
        cy.get(loginPage.emailInput).type(loginPage.detailesData.email)
        cy.get(loginPage.passwordInput).type(loginPage.detailesData.password)
        cy.get(loginPage.loginBtn).click()
        cy.contains(loginPage.logedAs).should('be.visible')
        cy.contains(' Logout').click()
        cy.contains(loginPage.title).should('be.visible')
    })

})