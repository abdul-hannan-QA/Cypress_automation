

/// <reference types="Cypress" />

describe('Cypress automation practise',function(){


    it('Practise cypress command',function()     
    {
    
    
    cy.get("tr td:nth-child(2)").each(($el,index,$list) => {
            
    const text=$el.text();
    if(text.includes(python))
    {
        Cypress.get("tr td:nth-child(2)").eq(index).next().then(function(price){


            const pricetext= price.text();
            expect(pricetext).to.equal('25');
        })
    }

    
     })

    })
    

    })
