import {
  enterpriseHeader,
  enterpriseLayoyt,
  homepageDiv,
  homePageSignin,
  signinpageAlert,
  signinpageForm,
  signinpageLoginField,
  signinpagePassReq,
  signinpagePasswordField,
  signinpageRembermeField,
  signinpageSubmitButton,
  signinpageUserReq
} from '../../support/commands';

describe('Auth Workflow', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  beforeEach(() => {
    cy.intercept('GET', '/assets/**').as('authenticate');
  });

  it('Default URL should navigate to home page', () => {
    cy.url().should('include', '/home');
    cy.get(homepageDiv);
    cy.get(homePageSignin);
  });

  it('Home Page Signin link should navigate to sign-in page with default values', () => {
    cy.get(homePageSignin).click();

    // TODO - Need to find a way to intercept routers
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(500);
    cy.url().should('include', '/sign-in');
    cy.get(signinpageForm);
    cy.get(signinpageLoginField).should('have.value', '');
    cy.get(signinpagePasswordField).should('have.value', '');
    cy.get(signinpageRembermeField).should('not.be.checked');
  });

  it('Sign-in page should not submit with empty user & pass ', () => {
    cy.get(homePageSignin).click();

    cy.get(signinpageSubmitButton).click();
    cy.get(signinpageUserReq).should('be.visible');
    cy.get(signinpagePassReq).should('be.visible');
  });

  it('Sign-in page should not submit with empty user', () => {
    cy.get(homePageSignin).click();

    cy.get(signinpageLoginField).type('user');
    cy.get(signinpageSubmitButton).click();
    cy.get(signinpageUserReq).should('not.exist');
    cy.get(signinpagePassReq).should('be.visible');
  });
  it('Sign-in page should not submit with empty pass', () => {
    cy.get(homePageSignin).click();

    cy.get(signinpagePasswordField).type('pass');
    cy.get(signinpageSubmitButton).click();
    cy.get(signinpageUserReq).should('be.visible');
    cy.get(signinpagePassReq).should('not.exist');
  });
  it('Sign-in fails with wrong user or pass', () => {
    cy.get(homePageSignin).click();

    cy.get(signinpageAlert).should('not.exist');
    cy.get(signinpageLoginField).type('user');
    cy.get(signinpagePasswordField).type('pass');
    cy.get(signinpageSubmitButton).click();
    cy.get(signinpageAlert).should('be.visible');
  });
  it('Successful sign-in with correct credentials', () => {
    cy.get(homePageSignin).click();

    cy.get(signinpageAlert).should('not.exist');
    cy.get(signinpageLoginField).type('admin');
    cy.get(signinpagePasswordField).type('admin');
    cy.get(signinpageSubmitButton).click();

    // Default enterprise layout
    // TODO - need a better way to dynamically get this layout selector
    cy.wait('@authenticate').get(enterpriseHeader);
  });
});
