

/// <reference types="Cypress" />

import 'cypress-iframe';

describe('Cypress automation practise',function(){


    it('Practise cypress command iframe',function()     
    {
    
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

     //iframe 

    cy.frameLoaded('#courses-iframe');
    //switch to iframe mode 
    cy.iframe().find("a[href*='mentorship']").eq(1);
    //find inside two package available or no
    cy.iframe().find("a[href*='mentorship']").should("have.length",2);

    })
    

    })
