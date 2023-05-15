describe('ammend cart', ()=> {
    it('add to cart, cart should prevail after hard reload', () => {
        const product = require('../../src/helpers/product.json').find(p => p.productCode === 'samshilla-to-1');
        //add to cart
        cy.visit(`/product/${product.productCode}`);
        const qtyField = cy.get("[class*=Layout-module--main]").find("[class*=pdp-module--content] [class*=AdjustItem-module--inputContainer] input");
        //get input value, not text https://filiphric.com/cypress-basics-check-attributes-value-and-text
        qtyField.should('exist').type('4');
        qtyField.should('have.value', 14);
        // qtyField.dblclick();
        // qtyField.type('3')
        // qtyField.should('have.value', 3);
        cy.get("[class*=Layout-module--main]").find("[class*=pdp-module--content] [class*=pdp-module--addToButtonContainer] button").should('exist').click();

        //asset notification
        cy.get("[class*=AddNotification-module--root]").should('be.visible');
        cy.get("[class*=AddNotification-module--root]").should(($notifContainer) => {
            // not sure why it's not visible inside should: expect($notifContainer).to.be.visible;
            expect($notifContainer.find("[class*=AddNotification-module--actionContainer] button[class*=Button-module--secondary]")).to.have.text('Xem giỏ hàng (1)');
            expect($notifContainer.find("[class*=AddNotification-module--newItemContainer] [class*=AddNotification-module--name]")).to.have.text(product.name);
        })
        
        //assert minicart
        cy.get("[class*=Header-module--header] [class*=Header-module--bagIconContainer] > div > span").should('have.text', 1);
        cy.get("[class*=Header-module--header] button[aria-label*=Cart] ").should('exist').click();
        cy.get("[class*=MiniCart-module--root]").should('be.visible');
        cy.get("[class*=MiniCart-module--root]").should(($minicartContainer) => {
            expect($minicartContainer.find("[class*=MiniCartItem-module--name]+span")).to.have.text('Số lượng: 14');
            expect($minicartContainer.find("[class*=MiniCart-module--summaryContainer] [class*=MiniCart-module--totalContainer]")).to.have.text('Tổng tiền₫12.586.000 ');
        })
        cy.get("[class*=MiniCart-module--root] [class*=Button-module--primary]").should('exist').click();

        //assert cart
        cy.location("pathname").should("eq", "/cart/");
        cy.get("[class*=cart-module--summaryContainer]").should(($cartContainer) => {
            expect($cartContainer.find("[class*=CartItem-module--name]+span")).to.have.text('Số lượng: 14');
            expect($cartContainer.find("[class*=CartItem-module--priceContainer]")).to.have.text('₫12.586.000 ');
        })

        //hard reload
        cy.reload(true)
        cy.location("pathname").should("eq", "/cart/");
        cy.get("[class*=cart-module--summaryContainer]").should(($cartContainer) => {
            expect($cartContainer.find("[class*=CartItem-module--name]+span")).to.have.text('Số lượng: 14');
            //trim txt space https://github.com/cypress-io/cypress/issues/3887
            expect($cartContainer.find("[class*=CartItem-module--priceContainer]").text().trim()).to.equal('₫12.586.000');
        })
    });
})