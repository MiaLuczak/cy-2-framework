# <p align="center">GoIT HW 2 </br>Cypress Framework</p>

### <p align="center">Implementation</p>

I've created custom command `login` to use it in multiple tests, </br>
This command is avaiable in [commands.js](./cypress/support/commands.js) file in Cypress/support folder </br> and it presents as follows:

```
Cypress.Commands.add('login', (login, password) => {
cy.get('#user_email').type(login);
cy.get('#user_email').should('have.value', login);
cy.get('#user_password').type(password);
cy.get('#user_password').should('have.value', password);
cy.contains('Log in').click();
cy.get('#open-navigation-menu-mobile').click();
cy.contains('Log out').click();
});
```

### <p align="center">Test execution</p>

2 tests were run and each of these two was completed successfully,</br>

  <p align="center">Note:</p>

_Due to login credentials and security, valid login credentials in [goitLogin.cy.js](./cypress/e2e/goitLogin.cy.js) test were changed to as follows: 'login' and 'password'_ <br>

Screenshot from Cypress (executed tests with passed indication): </br>

![Test execution screenshot](./assets/chrome%20I%2002.07.2024%20I%2014.55.59%20I.png)
