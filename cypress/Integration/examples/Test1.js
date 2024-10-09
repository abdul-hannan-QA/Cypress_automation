

/// <reference types="Cypress" />

describe('My First Test Suite',function(){


it('My First Testcse',function(){


cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
cy.get("input[type='search']").type("ca");
cy.wait(2000);
//cy.get(".products:visible").should("have.length",4);
cy.get('.product:visible').should('have.length',4)
//parent child chaning 
cy.get(".products").find(".product").should('have.length',4)
cy.get(".products").find(".product").eq(2).contains("ADD TO CART").click();

//out of each 4 product find number 4 product text 
     //each
cy.get(".products").find(".product").each(($el,index,$list) => {

const vegtext= $el.find("h4.product-name").text();
if(vegtext.includes("Cashews"))
cy.wrap($el).find("button").click();

})

//asertation logotext is correctly displayed or not
cy.get(".brand").should('have.text',"GREENKART")

//manually promised solved
cy.get('.brand').then(function(logoelement){

cy.log(logoelement.text());


})



})




})