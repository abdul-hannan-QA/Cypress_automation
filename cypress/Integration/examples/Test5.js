

/// <reference types="Cypress" />

describe('Cypress automation practise',function(){


    it('Practise cypress command',function()     
    {
    
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     //using jquery show methow to show hidden element 
     cy.get('.mouse-hover-content').invoke('show')
          //use cypress force method to catch hidden element
      //cy.contains("Top").click({force:true});
     cy.contains("Top").click();
     cy.url().should('include',"top");

        
    })
    

    })
