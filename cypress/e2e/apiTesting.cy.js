/// <reference types="Cypress"/>
import { homePage } from "../selectors/homePage";
import '@bahmutov/cy-api';

describe("Network Requests", () => {
    // beforeEach(() => {
  
    //   cy.visit(homePage.path);
    // });

it(" Get All Products List", () => {
    cy.request("GET", "https://automationexercise.com/api/productsList").then((response) => {
        const toCheck=JSON.parse(response.body);
        expect(toCheck.responseCode).to.eq(200)
    });
  });

  it(" POST To All Products List", () => {
    cy.request({
      method:'POST',
  url:'https://automationexercise.com/api/productsList',
body:{
  "userId":"12",
  "title":"Cypress Test Runner",
  "body":"Fast, easy and reliable testing for anything that runs in a browser."
}}).then((response) => {
          expect(response.body.responseCode).to.eq(405)
          expect(response.body.message).to.eq('This request method is not supported.')
      });
  });

  it("Get All Brands List", () => {
    const expectedJson='{"responseCode": 200, "brands": [{"id": 1, "brand": "Polo"}, {"id": 2, "brand": "H&M"}, {"id": 3, "brand": "Madame"}, {"id": 4, "brand": "Madame"}, {"id": 5, "brand": "Mast & Harbour"}, {"id": 6, "brand": "H&M"}, {"id": 7, "brand": "Madame"}, {"id": 8, "brand": "Polo"}, {"id": 11, "brand": "Babyhug"}, {"id": 12, "brand": "Babyhug"}, {"id": 13, "brand": "Allen Solly Junior"}, {"id": 14, "brand": "Kookie Kids"}, {"id": 15, "brand": "Babyhug"}, {"id": 16, "brand": "Babyhug"}, {"id": 18, "brand": "Kookie Kids"}, {"id": 19, "brand": "Allen Solly Junior"}, {"id": 20, "brand": "Kookie Kids"}, {"id": 21, "brand": "Biba"}, {"id": 22, "brand": "Biba"}, {"id": 23, "brand": "Biba"}, {"id": 24, "brand": "Allen Solly Junior"}, {"id": 28, "brand": "H&M"}, {"id": 29, "brand": "Polo"}, {"id": 30, "brand": "Polo"}, {"id": 31, "brand": "H&M"}, {"id": 33, "brand": "Polo"}, {"id": 35, "brand": "H&M"}, {"id": 37, "brand": "Polo"}, {"id": 38, "brand": "Madame"}, {"id": 39, "brand": "Biba"}, {"id": 40, "brand": "Biba"}, {"id": 41, "brand": "Madame"}, {"id": 42, "brand": "Mast & Harbour"}, {"id": 43, "brand": "Mast & Harbour"}]}'
    cy.request("GET", "https://automationexercise.com/api/brandsList").then((response) => {
        expect(JSON.parse(response.body).responseCode).to.eq(200)
        expect(response.body).to.eq(expectedJson)
    });
  });
  it.only("PUT To All Brands List", () => {

    cy.request({
      method:'PUT',
  url:'https://automationexercise.com/api/productsList',
body:{
  "userId":"12",
  "title":"Cypress Test Runner",
  "body":"Fast, easy and reliable testing for anything that runs in a browser."
}}).then((response) => {
          expect(JSON.parse(response.body).responseCode).to.eq(405)
          expect(response.body.message).to.eq('This request method is not supported.')
      });
  })

  it.only(" POST To All Products List", () => {
    cy.request({
      url: 'https://automationexercise.com/api/searchProduct',
      method: 'POST',
      qs:{
        "search_product":"blue top"
      }
    }).then((response) => {
               expect(response.body.responseCode).to.eq(200)
      
         });

})
})