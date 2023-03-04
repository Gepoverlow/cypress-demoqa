
declare namespace Cypress {
    interface Chainable<Subject = any> {
        assertShouldHaveRedBorderColor(arrayOfSelectors: Array<string>): Chainable<any>;
        assertShouldHaveGreenBorderColor(arrayOfSelectors: Array<string>): Chainable<any>;
        assertShouldHaveRedColor(arrayOfSelectors: Array<string>): Chainable<any>;
        assertShouldHaveGreenColor(arrayOfSelectors: Array<string>): Chainable<any>;

    }
}
