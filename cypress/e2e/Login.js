import LoginComponent from "../tests_base/LoginComponent";

describe('Test Login Function',() => {
     
    const LOGIN_INFORMATION = {
        username: 'nqt123',
        password: 'admin'
    }
    let loginComp;

    beforeEach(() => {
        cy.visit('/');
        loginComp = new LoginComponent
    })

    it('Verify that User can click on Log in', () => {
        loginComp.getLoginLink().click();
        loginComp.getLogInWindow().should('be.visible')
    })

    it('Verify that User can close Log in window', () => {
        loginComp.getLoginLink().click();
        loginComp.getLogInWindow().should('be.visible').contains('button', 'Close');
        loginComp.getBtnClose().click(cy.wait(2000));
        loginComp.getLogInWindow().should('not.be.visible');
    })

    const login = (username, password) => {
        loginComp.getLoginLink().click({force: true});
        loginComp.getLoginModal().should('be.visible');
        loginComp.getUserName().type(`${username}`, {force: true, waitForAnimations: true});
        loginComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        loginComp.getLoginBtn().click({force: true});
    }
    
    it('Verify that User can login with correct username and password', () => {

        const {username, password} = LOGIN_INFORMATION;
        login(username, password);

        loginComp.getNameOfUser().should('be.visible');
        cy.wait(2000);
        loginComp.getNameOfUser().should('contain.text',`Welcome ${LOGIN_INFORMATION.username}`);
    })

    it('Verify that User can not login with wrong username', () => {

        const {username, password} = LOGIN_INFORMATION;
        login(username + "_WRONG", password);

        cy.wait(1000);
        cy.on('window:alert',alert => {
            expect(alert).to.contains('User does not exist.');
        })
    })

    it('Verify that User can login with wrong password', () => {

        const {username, password} = LOGIN_INFORMATION;
        login(username, password + "_WRONG");
        
        cy.wait(1000);
        cy.on('window:alert',alert => {
            expect(alert).to.contains('Wrong password.');
        })
    })

})

