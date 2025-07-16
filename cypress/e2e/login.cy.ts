/// <reference types="cypress" />
describe('Login Flow', () => {
  it('should login and navigate to dashboard', () => {
    cy.visit('http://localhost:5173/');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');

    cy.contains('Welcome To Dashboard').should('be.visible');
  });
});
