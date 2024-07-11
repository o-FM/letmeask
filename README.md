
# Letmeask

Letmeask é uma aplicação de Q&A (perguntas e respostas) voltada para a interação em tempo real entre usuários e administradores. A plataforma permite que os usuários façam perguntas e os administradores respondam, oferecendo uma experiência dinâmica e interativa.


## Funcionalidades

- Criação de salas para perguntas e respostas
- Envio e gerenciamento de perguntas em tempo real
- Destacar perguntas mais votadas
- Interface amigável e responsiva
- Autenticação de usuários via Google


## Stack utilizada

**Front-end:** 
- React
- TypeScript
- SASS

**Back-end:** 
- Firebase Realtime Database
- Firebase Authentication


## Instalação

**Pré-requisitos**
- Node.js (versão 12 ou superior)
- Yarn ou npm

**Passos para Instalação**

1. Clone o repositório:
```bash
  git clone https://github.com/o-FM/letmeask.git
  cd letmeask
```

2. Instale as dependências:
```bash
  yarn install
```
ou
```bash
  npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo .env.local na raiz do projeto e adicione as seguintes variáveis:

```bash
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
```

4. Inicie a aplicação:

```bash
  yarn start
```
ou
```bash
  npm start
```
A aplicação estará disponível em http://localhost:3000.
## Contribuindo

- Faça um fork do projeto
- Crie uma branch para sua feature (git checkout -b feature/nome-da-feature)
- Commit suas mudanças (git commit -m 'Adiciona nova feature')
- Faça o push para a branch (git push origin feature/nome-da-feature)
- Abra um Pull Request


## Licença

[MIT](https://choosealicense.com/licenses/mit/)

