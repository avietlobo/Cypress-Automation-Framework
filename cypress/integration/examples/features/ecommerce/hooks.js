beforeEach(()=>
{
    cy.fixture('example').then(function(data)
    {
this.data=data
    })
    cy.log('Before Hook')
});