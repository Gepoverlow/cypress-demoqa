
declare namespace Cypress {
    interface Chainable<Subject = any> {
        assertShouldHaveRedBorderColor(arrayOfSelectors: string[]): Chainable<any>;
        assertShouldHaveGreenBorderColor(arrayOfSelectors: string[]): Chainable<any>;
        assertShouldHaveRedColor(arrayOfSelectors: string[]): Chainable<any>;
        assertShouldHaveGreenColor(arrayOfSelectors: string[]): Chainable<any>;
        assertModalIsNotVisible(): Chainable<any>;
        assertElementsAreVisibleAndContentMatches(elementsToAssert: { selector: Cypress.Chainable<JQuery<HTMLElement>>; expected: string; }[]): Chainable<any>;

    }
}
