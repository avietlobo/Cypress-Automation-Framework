export class HomePage
{  

get name(){
return cy.get('input.form-control[name="name"]')
}

get email(){
return cy.get('input.form-control[name="email"]')
}

get shopLink(){
    return cy.get('a.nav-link[href*="shop"]')
    }

get submit(){
return cy.get('.btn.btn-success')
}

get alert(){
    return cy.get('div.alert-success')
}

}