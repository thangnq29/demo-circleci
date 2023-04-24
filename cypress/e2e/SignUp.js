import SignUpComponent from "../tests_base/SignUpComponent";

const generateRandomUser = usernameLength => {
    const NUMBER = "0123456789";
    const NUMBER_LENGTH = NUMBER.length;
    let randomUsername = "nqt";
    for(let i = 0; i < usernameLength; i++){
        randomUsername +=NUMBER.charAt(Math.floor(Math.random() *NUMBER_LENGTH));
    }
    return randomUsername;
}

const generateRandomPassword = passwordLength => {
    const DATA = "abcdefghijklmnop0123456789";
    const DATA_LENGTH = DATA.length;
    let randomPassword = "";
    for(let i = 0; i < passwordLength; i++){
        randomPassword +=DATA.charAt(Math.floor(Math.random() *DATA_LENGTH));
    }
    return randomPassword;
}

describe('Test Sign Up Function',() => {
     
    const SIGNUP_INFORMATION = {
        username: generateRandomUser(4),
        password: generateRandomPassword(8)
    }

    let signUpComp;

    beforeEach(() => {
        cy.visit('/');
        signUpComp = new SignUpComponent
    })

    it('Verify that User can click on Sign up', () => {
        signUpComp.getSignUpLink().click({force: true});;
        signUpComp.getSignUpModal().should('be.visible');
    })

    it('Verify that User can close Sign Up window', () => {
        signUpComp.getSignUpLink().click({force: true});
        signUpComp.getSignUpModal().should('be.visible');
        signUpComp.getBtnClose().click(cy.wait(2000));
        signUpComp.getSignUpModal().should('not.be.visible');
    })
    
    const singUp = (username, password) => {
        signUpComp.getSignUpLink().click({force: true});
        signUpComp.getSignUpModal().should('be.visible');
        signUpComp.getUserName().type(`${username}`, {force: true, waitForAnimations: true});
        signUpComp.getPassword().type(`${password}`, {force: true, waitForAnimations: true});
        signUpComp.getSignUpBtn().click({force: true});
    }

    it('Verify that user can register new account', () => {

        const {username, password} = SIGNUP_INFORMATION;
        singUp(username, password);
        cy.wait(1000);
        cy.on('window:alert',alert => {
            expect(alert).to.contains('Sign up successful.');
        })
    })
    
    it('Verify that user can not register new account if it already exits  ', () => {
        
        const {password} = SIGNUP_INFORMATION;
        singUp("nqt123", password);
        cy.wait(1000);
        cy.on('window:alert',alert => {
            expect(alert).to.contains('This user already exist.');
        })
    }) 
})