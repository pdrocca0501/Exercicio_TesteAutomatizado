/// <reference types ="cypress" />

import produtosPage from "../support/page-objects/produtos.page";

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Abominable Hoodie')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });
    
    
    it('Deve buscar um produto com sucesso', () => {
        let produto='Aether Gym Pant'
        produtosPage.buscarProduto('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });

    it('Deve visitar a página de um produto', () => {
        produtosPage.visitarProduto('Zeppelin-Yoga-Pant')
    });

    it('Deve adicionar um produto ao carrinho', () => {
        produtosPage.buscarProduto('Helena Hooded Fleece')
        produtosPage.addProdutoCarrinho('S', 'Yellow', 1)
        cy.get('.woocommerce-message').should('contain', '“Helena Hooded Fleece” foi adicionado no seu carrinho.')
    });

    it.only('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].quantidade)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
            
        })
        
    });

});