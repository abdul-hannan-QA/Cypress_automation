describe("API request manipulation", function () {

  it("mocks http request", function () {

    cy.visit("https://rahulshettyacademy.com/angularAppdemo/");
    // Intercept the GET request to modify the request URL
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {

      // Modify the request URL before it is sent
      req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";

      // Continue the request and check the response
      req.continue((res) => {
        // Expecting the response status code to be 403 (Forbidden)
        //expect(res.statusCode).to.equal(403);
      });
    }).as("dummyurl"); // Alias for the intercepted request

    // Simulate the button click to trigger the API request
    cy.get("button[class='btn btn-primary']").click()
    // Wait for the intercepted request to complete
    cy.wait("@dummyurl");
  });
});
