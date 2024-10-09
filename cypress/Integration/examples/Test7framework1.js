

/// <reference types="Cypress" />


import cypress from "Cypress";
import HomePage from "../PageObjectModel/HomePage";
import ProductsPage from "../PageObjectModel/ProductsPage";



describe('Cypress hooks',function(){

    
    before(function () {
        cy.fixture('example').then((data) => {
          this.data = data;  // Save fixture data in test context
        });
      });


    it('Practise data driven testing with fixure and make custom cypress commands ',function()     
    {
     
      const homePage=new HomePage
     cy.visit(cypress.env('url')+"/angularpractice/");
     homePage.getNameField().type(this.data.name)
     homePage.getGender().select(this.data.gender);
    //showing name showing in another fild 
    homePage.getTwoWayDataBinding().should("have.value",this.data.name)
     //validate  name file mimimum value take at least 2 chracter
     homePage.getNameField().should('have.attr','minlength','2')

    // Another way to validate the 'minlength' attribute
   // cy.get(':nth-child(1) > .form-control').then(function (el) {
     // const minlength = el.prop('minlength'); // Get the 'minlength' property
     // expect(minlength).to.equal(2); // Validate the minlength is 2
     

   //  })

   homePage.getEntrepreneaur().should('be.disabled')


   homePage.getShopTab().click();
  //custom cypress command
   //cy.SelectProduct('Blackberry');

   
   this.data.ProductName
   this.data.ProductName.forEach(function(element){
    cy.SelectProduct(element);

   });

     const productsPage=new ProductsPage

     productsPage.checkOutButton().click();

      var sum=0;
     //Verify all product sum is showing correctly
     productsPage.ProductsAmount().each(($el,index,$list) => {

      const actualamount = $el.text();  // E.g., ₹ 65000
      var amount = actualamount.replace(/[^0-9]/g, '');  // Remove non-numeric characters, leaving only digits (e.g., "65000")
  
      cy.log("Extracted Amount: " + amount);  // Log the extracted amount for debugging
      
      sum = Number(sum) + Number(amount);  // Accumulate the sum with the extracted number
  

          // cy.wrap($el).invoke('text').then((actualamount) => {
        
          //   // Split the text based on spaces
          //   var amount = actualamount.trim().split(" ");  // e.g., ₹ 65000
            
          //   // Log the extracted values
          //   cy.log("Currency: " + amount[0]);  // ₹
          //   cy.log("Amount: " + amount[1]);    // 65000




          }).then(function(){

            cy.log("Total Sum: " + sum);  // Log the final sum
          });

        //Validate sum is equal to totalsum
         productsPage.totalSum().then(function(element){

        const totalamount=element.text()        // E.g., ₹ 165000

        var amount = totalamount.replace(/[^0-9]/g, '');  
        expect(sum).to.equal(Number(amount));



         })
    

  


     productsPage.checkOutButtonSuccess().click();
     
     productsPage.countrySearch().type("Bangladesh");
     //cy.wait(5000)

     cypress.config('defaultCommandTimeout',6000);
     productsPage.selectCountry().click();
     productsPage.termsAndCondition().click({force:true});
     productsPage.purchase().click();

     //productsPage.productsSuccessAlert().should("have.text",'Success! Thank you! Your order will be delivered in next few weeks :-).')
     productsPage.productsSuccessAlert().then(function(element)
     {

        const aletText= element.text()
        expect(aletText.includes('Thank you')).to.be.true

    
     })

     



   })

    
  })

    


   
