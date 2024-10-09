

/// <reference types="Cypress" />

describe('My First Test Suite',function(){


    it('Practise cypress command',function()     
    {
    
    
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        //Checkbox 
        cy.get("#checkBoxOption1").check().should("be.checked").and("have.value","option1");
        cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
        //mu;tiple checkbox selected
        cy.get('input[type="checkbox"]').check(["option2","option3"]);
    
        //Static Dropdown 
        cy.get("select").select("option3").should("have.value","option3");
    
        //Dynamic Dropdown 
        //each
        cy.get("#autocomplete").type("Ban");
        cy.get(".ui-menu-item div").each(($el,index,$list) => {
    
        if($el.text()=="Bangladesh")
        {
           cy.wrap($el).click();
         
        }
    
        })
        cy.get("#autocomplete").should("have.value","Bangladesh");
    
    //visible and invisible 
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    
    
    //radio buttton
    cy.get("[value='radio2']").check().should("be.checked");
    
    })
    
    
    
    
     })
    


