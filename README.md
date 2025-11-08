# Projeto PWA

Este é um projeto de aplicação web progressiva (PWA) com estrutura de monorepo. Inclui testes unitários, testes end-to-end e integração contínua.

## Tecnologias

- Vite
- React
- Vitest
- Playwright
- GitHub Actions

## Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar o app
cd apps/web
npm run dev

# Testes Unitários
bash
cd apps/web
npx vitest run

# CI
Este projeto usa GitHub Actions para rodar testes automaticamente a cada push ou pull request.

# Estrutura Código
monorepo-pwa/
├── apps/web/       
├── e2e/            
├── .github/       

# Licença
MIT
