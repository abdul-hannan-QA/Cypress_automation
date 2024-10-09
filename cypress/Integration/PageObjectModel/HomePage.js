class HomePage{

getNameField()
{
    return cy.get(':nth-child(1) > .form-control');
}

getTwoWayDataBinding()
{
 return cy.get("input[name='name']:nth-child(1)")

}
getGender(){

return  cy.get("select")
}

getEntrepreneaur()
{
  return  cy.get('#inlineRadio3');
}

getShopTab()
{
  return cy.get(':nth-child(2) > .nav-link')

}




}
export default HomePage
