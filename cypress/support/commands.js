Cypress.Commands.add('acessarHome', () => {
    cy.visit("/");
    //checkpoint
    cy.url().should('include', '/')
    cy.contains('h1', 'Faça seu login')
})

Cypress.Commands.add('preencherFormLogin', (email, password) => {
    //preencher o formulario
    cy.get("#email").type(email);
    cy.get("#password").type(password);
})

Cypress.Commands.add('submitBtn', (textoBtn) => {
    //clicar no botão de login
    cy.contains("button[type=submit]", textoBtn).click();
})

Cypress.Commands.add('verificarMsgToast', (msgEsperada) => {
    //verificar se o login foi realizado com sucesso
    cy.get(".Toastify__toast-body")
        .should("be.visible")
        .and("have.text", msgEsperada)
})

Cypress.Commands.add('verificarMsgErro', (msgEsperada) => {
    cy.get('[class^="home_errorText"]')
        .should("be.visible")
        .and("contain.text", msgEsperada)
        .and('have.css', 'color', 'rgb(230, 57, 70)');
})

Cypress.Commands.add('verificarPagina', (rota, titulooPagina) => {
    cy.url().should('include', `${rota}`)
    cy.contains('h1', titulooPagina)
})

Cypress.Commands.add('verificarUsuarioLogado', (name) => {
    const nomeUsuario = name.split(" ")[0]

    cy.get('[data-testid="user-greeting"]')
        .should("be.visible")
        .and("have.text", `Olá, ${nomeUsuario}!`)
})
