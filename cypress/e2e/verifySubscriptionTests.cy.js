import { homePage } from "../selectors/homePage";

describe(' Verify Subscription',()=>{
    it('Verify Subscription in home page',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.get('footer').scrollTo('center', { ensureScrollable: false })
        cy.get(homePage.susbcrition).should('be.visible')
        cy.get(homePage.emailSub).type('mottyhn13@gmail.com')
        cy.get(homePage.subBtn).click()
        cy.contains(homePage.subSuccesMsg).should('be.visible')
})
it(' Verify Subscription in Cart page',()=>{
    cy.visit(homePage.path)
    cy.contains(homePage.title).should('be.visible')
    cy.contains(homePage.navbarBtns.cartBtn).click()
    cy.get('footer').scrollTo('center', { ensureScrollable: false })
    cy.get(homePage.susbcrition).should('be.visible')
    cy.get(homePage.emailSub).type('mottyhn13@gmail.com')
    cy.get(homePage.subBtn).click()
    cy.contains(homePage.subSuccesMsg).should('be.visible')
})

})