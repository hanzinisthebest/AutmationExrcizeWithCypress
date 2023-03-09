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

  
  it("PUT To All Brands List", () => {

    cy.request({
      method:'PUT',
  url:'https://automationexercise.com/api/productsList',
body:{
  "userId":"12",
  "title":"Cypress Test Runner",
  "body":"Fast, easy and reliable testing for anything that runs in a browser."
}}).then((response) => {
          expect(response.body.responseCode).to.eq(405)
          expect(response.body.message).to.eq('This request method is not supported.')
      });
  })

  it(" POST To Search Product", () => {
    cy.request( {method:'POST',
    url: 'https://automationexercise.com/api/searchProduct',
    form:true,
     body:{search_product:'blue top' },  
    }).then((response) => {
      expect(JSON.parse(response.body).responseCode).to.eq(200)
      
         });

})

it("POST To Search Product without search_product parameter ",  () => {
  cy.request( {method:'POST',
  url: 'https://automationexercise.com/api/searchProduct',
  form:true,
   body:{},  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(400)
    expect(JSON.parse(response.body).message).to.eq("Bad request, search_product parameter is missing in POST request.")    
       });

})

it("POST To Verify Login with valid details", ()=>{
  cy.request({method:'POST',
  url: 'https://automationexercise.com/api/verifyLogin',
  form:true,
   body:{
    email:'mottyhn34@gmail.com',
    password:'mottyIsTheBest'
   },  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(200)
    expect(JSON.parse(response.body).message).to.eq("User exists!")    
       })
})

it("POST To Verify Login without email parameter", ()=>{
  cy.request({method:'POST',
  url: 'https://automationexercise.com/api/verifyLogin',
  form:true,
   body:{
    password:'mottyIsTheBest'
   },  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(400)
    expect(JSON.parse(response.body).message).to.eq("Bad request, email or password parameter is missing in POST request.")    
       })
})

it("DELETE To Verify Login", ()=>{
  cy.request({method:'DELETE',
  url: 'https://automationexercise.com/api/verifyLogin',
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(405)
    expect(JSON.parse(response.body).message).to.eq("This request method is not supported.")    
       })
})

it("POST To Verify Login with invalid details", ()=>{
  cy.request({method:'POST',
  url: 'https://automationexercise.com/api/verifyLogin',
  form:true,
   body:{
    email:'mottyhn34gmail.com',
    password:'mottyIsTheBest'
   },  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(404)
    expect(JSON.parse(response.body).message).to.eq("User not found!")    
       })
})

it("POST To Create/Register User Account", ()=>{
  cy.request({method:'POST',
  url: 'https://automationexercise.com/api/createAccount',
  form:true,
   body:{
    email:'mottyhn1999@gmail.com',
    password:'mottyIsTheBest',
    name:'motty',
    firstname:'mordi',
    lastname:'hanzin',
    title:'Mr',
    birth_month:'04',
    birth_year:'1999',
    birth_date:'06',
    company:'vcijhdbvh',
    address1:'ndhbc',
    address2:'dciuhdcudhyb',
    country:'isreal',
    zipcode:'123',
    state:'place',
    city:'divjnbfd',
    mobile_number:'0545610067'
   },  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(201)
    expect(JSON.parse(response.body).message).to.eq("User created!")    
       })
})
it("DELETE METHOD To Delete User Account", ()=>{
  cy.request({method:'DELETE',
  url: 'https://automationexercise.com/api/deleteAccount',
  form:true,
   body:{
    email:'mottyhn1999@gmail.com',
    password:'mottyIsTheBest'
   },
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(200)
    expect(JSON.parse(response.body).message).to.eq("Account deleted!")    
       })
})
it.only("PUT METHOD To Update User Account", ()=>{
  cy.request({method:'PUT',
  url: 'https://automationexercise.com/api/updateAccount',
  form:true,
   body:{
    email:'mottyhn99@gmail.com',
    password:'mottyIsTheBest',
    name:'motty',
    firstname:'mordi',
    lastname:'hanzin',
    title:'Mr',
    birth_month:'04',
    birth_year:'1999',
    birth_date:'06',
    company:'vcijhdbvh',
    address1:'ndhbc',
    address2:'dciuhdcudhyb',
    country:'isreal',
    zipcode:'123',
    state:'place',
    city:'divjnbfd',
    mobile_number:'0545610067'
   },  
  }).then((response) => {
    expect(JSON.parse(response.body).responseCode).to.eq(200)
    expect(JSON.parse(response.body).message).to.eq("User updated!")    
       })
       
})


it.only("GET user account detail by email", () => {
  cy.request({method:'GET',url: "https://automationexercise.com/api/getUserDetailByEmail",qs:{
    email:'mottyhn99@gmail.com'}}).then((response) => {
      expect(JSON.parse(response.body).responseCode).to.eq(200)
  });
});
})