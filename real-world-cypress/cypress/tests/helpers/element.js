export function clickXpath(selector, ...args){
    return cy.xpath(selector).click(...args);
}

export function fillField(selector, value) {
    return cy.xpath(selector).type(value);
}

export function deleteValueField(selector){
    return cy.xpath(selector).clear();
}