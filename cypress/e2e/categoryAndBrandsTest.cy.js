/// <reference types="Cypress" />
import { homePage } from "../selectors/homePage";
import { products } from "../selectors/productsPage";
import "cypress-real-events/support";

describe("category and brand tests",()=>{
    it("View Category Products",()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.get(products.leftSidebar).scrollIntoView()
        cy.get(products.category.categoryList).should('be.visible')
        cy.get(products.category.categoryOpenSubList).eq(0).click()
        cy.get(products.category.categorySubList).eq(0).should('be.visible')
        cy.get(products.category.categorySubListOptions).eq(0).click()
        cy.url().should('include', '/category_products')
        cy.contains(products.category.confirmTextTitel).should('have.text','Women - Dress Products')
        cy.get(products.category.categoryOpenSubList).eq(1).click()
        cy.get(products.category.categorySubList).eq(1).should('be.visible')
        cy.get(products.category.categorySubListOptions).eq(3).click()
        cy.url().should('include', '/category_products')
    })

    it('View & Cart Brand Products',()=>{
        cy.visit(homePage.path)
        cy.contains(homePage.title).should('be.visible')
        cy.contains(homePage.navbarBtns.productsBtn).click()
        cy.url().should('include', '/products')
        cy.contains(products.brands.titel).should('be.visible')
        cy.get(products.brands.brandsList).eq(0).then((brand)=>{
            cy.get(brand).click()
            cy.url().should('include', brand.text().substring(4))
            cy.contains('Brand - '+brand.text().substring(4)+' Products').should('be.visible')
        })
        cy.get(products.brands.brandsList).eq(1).then((brand)=>{
            cy.get(brand).click()
            cy.url().should('include', brand.text().substring(4))
            cy.contains('Brand - '+brand.text().substring(4)+' Products').should('be.visible')
        })
})



})