/// <reference types="cypress"/>

describe('Teste de login no Moodle UFSC', () => {

  beforeEach(()=>{
    cy.visit('https://grupos.moodle.ufsc.br/my/')
  })
  
  it('Acessando área de login', () => {

    cy.contains('Acessar').click()

    cy.get('#username') //seleciona a entrada de matrícula
      .type('matrícula do fulano') //digita a matrícula
      .should('have.value', 'matrícula do fulano') //faz um assert com a matrícula digitada
      .get('#password') //seleciona o campo senha
      .type('senhaDoFulano') //digita a senha

    cy.contains('Entrar').click() //clica em Entrar
    
    cy.wait(4000) //aguarda 4 segundos, até habilitar o botão de opções
    cy.get('.caret').click() //clica no botão de opções

    cy.contains('Perfil').click() //clica na opção Perfil
    cy.get('h1').should('have.text', 'Fulano da Silva') //seleciona o título da page e faz um assert para ver se esse perfil é realmente do Fulano da Silva
  })
})

