// cypress.config.js

module.exports = {
    projectId: 'rrb4bd',
    e2e: {
      testFiles: '**/*.feature', // ou ajuste conforme sua necessidade
      chromeWebSecurity: false,
      retries: {
        runMode: 2, // número de tentativas no modo de execução
        openMode: 1, // número de tentativas no modo de abertura
      },
      reporter: 'junit', // Especificando o reporter
      reporterOptions: {
        mochaFile: 'cypress/reports/report-[hash].xml', // Caminho e formato do relatório
      },
      requestTimeout: 30000, // Timeout de requisição
      defaultCommandTimeout: 30000, // Timeout para comandos do Cypress
      pageLoadTimeout: 60000, // Timeout para carregamento de página
      watchForFileChanges: false, // Desabilitar a detecção de mudanças no arquivo
      videoUploadOnPasses: false, // Desabilitar upload de vídeo para passes
      videoCompression: 1, // Compressão de vídeo (0-1, sendo 1 mais compactado)
      env: {
        // Defina variáveis de ambiente aqui, caso necessário
      },
    },
  };
  