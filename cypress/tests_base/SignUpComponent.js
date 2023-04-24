export default class SignUpComponent {
    getSignUpLink  = ()   =>  cy.get('#signin2');
    getSignUpModal = ()   => cy.get('.modal-dialog form');
    getUserName   = ()   => cy.get('#sign-username');
    getPassword   = ()   => cy.get('#sign-password');
    getSignUpBtn   = ()   => cy.get('[onclick="register()"]');
    getBtnClose = () => cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')
}
