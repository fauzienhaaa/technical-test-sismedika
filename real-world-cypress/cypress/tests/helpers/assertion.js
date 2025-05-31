export function shouldBeVisible(selector) {
    cy.xpath(selector, {timeout: 10000}).should("be.visible");
}

export function shouldContainText(selector, value) {
    cy.xpath(selector, {timeout: 10000}).should("contain.text", value)
}

export function shouldBeDisabled(selector) {
    cy.xpath(selector, {timeout: 10000}).should("be.disabled");
}