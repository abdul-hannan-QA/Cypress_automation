class ProductsPage{


checkOutButton()
{

    return cy.get("a[class$='nav-link btn btn-primary']")
}

checkOutButtonSuccess()
{
    return cy.get("button[class^='btn btn-success']")
}

countrySearch()
{

    return cy.get("input[id$='country']")
}

selectCountry()
{

    return cy.get('.suggestions > ul > li > a');
}

termsAndCondition()
{

    return cy.get('.checkbox > label')
}
purchase(){

    return cy.get('.ng-untouched > .btn')
}

productsSuccessAlert()
{
    return cy.get('.alert');
}

ProductsAmount()
{
    return cy.get('tr td:nth-child(4) strong');
}

totalSum()
{

    return cy.get("h3 strong")
}




}


export default ProductsPage;