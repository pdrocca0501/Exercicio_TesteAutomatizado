/// <reference types="cypress"/>

context('Funcionalidade Login', () =>{

  beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
      cy.screenshot()
  });

  it('Deve fazer login com sucesso', () => {      
    var login = 'aluno_ebac@teste.com'
    var senha = 'teste@teste.com'
    
      cy.get('#username').type(login)
      cy.get('#password').type(senha)
      cy.get('.woocommerce-form > .button').click()

      cy.get('.page-title').should('contain' , 'Minha conta')
  })

  it('Deve exibir uma mensagem de erro ao inserir usuario inválidos', () => {
      cy.get('#username').type('ebac@teste.com')
      cy.get('#password').type('teste@teste')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
  })

  it('Deve exibir uma mensagem de erro ao inserir senha inválidas', () => {
      cy.get('#username').type('aluno_ebac@teste.com')
      cy.get('#password').type('teste@teste')
      cy.get('.woocommerce-form > .button').click()

      cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail')
  })
} )