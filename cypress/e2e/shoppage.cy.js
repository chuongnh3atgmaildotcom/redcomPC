describe('show all products at shop page', ()=> {

    it('show all products', () => {
        const products = require('../../src/helpers/product.json');
        cy.visit('/');
        cy.get("[class*=Container-module--container]").find("[class*=shop-module--itemCount]").contains((products.length || 0) + ' sản phẩm');
        cy.get("[class*=Container-module--container]").find("[class*=ProductCardGrid-module--cardGrid]>[class*=ProductCard-module--root]").should('have.length', products.length || 0);
    })
})