describe('GoIT Login', () => {
  it('Login with gmail domain', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    // Due to pushing to Git Repository, login credentials are hidden/deleted
    cy.login('login', 'password');
    cy.url().should('equal', 'https://www.edu.goit.global/account/login');
  });
  it('Login with qa domain', () => {
    cy.visit('https://www.edu.goit.global/account/login');
    // Due to pushing to Git Repository, login credentials are hidden/deleted
    cy.login('login', 'password');
    cy.url().should('equal', 'https://www.edu.goit.global/account/login');
  });
});
