describe("API response manipulation", function () {
    it("mocks http response", function () {
      // Intercepting the API request with the correct URL
      cy.intercept({
        method: "GET",
        url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty" // Exact path of the API request
      },
      {
        statusCode: 200,
        body: [
          {
            "book_name": "Learn Appium Automation with Java",
            "isbn": "RS183",
            "aisle": "12390"
          }
        ]
      }).as('bookRetrielvals')
  
      // Visit the main site
      cy.visit("https://rahulshettyacademy.com/angularAppdemo")
      
      // Trigger the API request by clicking the button
      cy.get(".btn.btn-primary").click()
  
      // Wait for the intercepted request 
      //length of the response array = rows of the table 

      cy.wait('@bookRetrielvals').then(({request,response})=>
      {
            
        cy.get("tr").should("have.length",response.body.length+1)


      })
  
      cy.get('p').should('have.text','Oops only 1 Book available')

      


    })
  })
  