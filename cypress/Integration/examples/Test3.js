

/// <reference types="Cypress" />

describe('Cypress automation practise',function(){


    it('Practise cypress command',function()     
    {
    
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#alertbtn").click();
        cy.get("[value='Confirm']").click();

        //Alert handle assertation
        cy.on('window:alert',(str) =>{
         expect(str).to.equal("Hello , share this practice page and share your knowledge");

        })

        cy.on('window:confirm',(str) =>{
            expect(str).to.equal("Hello , Are you sure you want to confirm?");
   
           })
          
       //switch new tab 
        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.url().should('include','qaclickacademy')

        cy.go('back')
    
    })
    
    
    
    
     })
    


