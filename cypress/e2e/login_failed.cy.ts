/// <reference types="cypress" />
describe('LoginForm - Failed Login', () => {
  it('should display error snackbar when login fail', () => {
    cy.visit('http://localhost:5173');

    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('admin123');

    cy.get('button[type="submit"]').click();

    cy.contains('Username atau password salah.').should('be.visible');

    cy.url().should('include', '/');

    cy.wait(4500);
    cy.contains('Username atau password salah.').should('not.exist');
  });
});
