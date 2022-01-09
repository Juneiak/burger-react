describe('service is available', () => {
  before(() => {
    cy.visit('http://localhost:3000');
  });

  it('should open constructors page by default', () => {
    cy.contains('Соберите бургер');
  });

  it('should add ingredient to constructor', () => {
    cy.get('[class^=ingredient_ingredientsMenuItem__]').contains('Соус фирменный Space Sauce').trigger('dragstart').trigger('dragleave');

    cy.get('[class^=burger_burger__]')
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get('[class^=burger_ingredients__]').contains('Соус фирменный Space Sauce');
  });

  it('should add bun to bun position', () => {
    cy.get('[class^=ingredient_ingredientsMenuItem__]').contains('Краторная булка N-200i').trigger('dragstart').trigger('dragleave');

    cy.get('[class^=burger_burger__]')
      .trigger('dragenter')
      .trigger('dragover')
      .trigger('drop')
      .trigger('dragend');

    cy.get('[class^=burger_bun__]').contains('Краторная булка N-200i');
  });
});
