export default class LoginComponent {

    getLoginLink  = ()   =>  cy.get('#login2');
    getLoginModal = ()   => cy.get('#logInModal form');
    getUserName   = ()   => cy.get('#loginusername');
    getPassword   = ()   => cy.get('#loginpassword');
    getLoginBtn   = ()   => cy.get('[onclick="logIn()"]');
    getNameOfUser = ()   => cy.get('#nameofuser');
    getLogInWindow = () => cy.get('#logInModal');
    getBtnClose = () =>     cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary');
}