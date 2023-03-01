import { homePage } from "../selectors/homePage";

describe('test cases page',()=>{
    it('verfiy page',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.testCasesBtn).click()
        cy.url().should('include', '/test_cases')
})
})