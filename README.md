# 📋 Sistema de Cadastro de Clientes

Um sistema completo para gerenciamento de clientes desenvolvido com Node.js, Express, MySQL e Sequelize.

## ✨ Funcionalidades Principais

- **Cadastro de clientes** com nome, cidade, estado, CEP e telefone
- **Listagem completa** de todos os clientes cadastrados
- **Busca inteligente** por nome, cidade ou telefone
- **Edição** e **exclusão** de registros
- Interface responsiva e moderna

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express
- **Banco de Dados**: MySQL (com Laragon)
- **ORM**: Sequelize
- **Template Engine**: EJS
- **Frontend**: CSS moderno com variáveis e design responsivo

## 🚀 Como Executar

1. **Pré-requisitos**:
   - Node.js (v18+)
   - MySQL (via Laragon)
   - Git (opcional)

2. **Instalação**:
   ```bash
   git clone https://github.com/seu-usuario/cadastro-clientes.git
   cd cadastro-clientes
   npm install
   npm install dotenv
   ```

3. **Configuração**:
   - Crie um arquivo `.env` (Opcional) 
   - Configure as credenciais do seu banco MySQL

4. **Execução**:
   ```bash
   node app.js
   ```
   Acesse: [http://localhost:3000](http://localhost:3000)

## 📦 Estrutura do Projeto

```
cadastro-clientes/
├── config/       # Configurações do banco de dados
├── controllers/  # Lógica das rotas
├── models/       # Modelos do Sequelize
├── public/       # Arquivos estáticos (CSS, JS)
├── routes/       # Definição de rotas
├── views/        # Templates EJS
├── app.js        # Aplicação principal
└── package.json  # Dependências
```

## 🌈 Recursos Visuais

- Design moderno com gradientes e sombras
- Animações suaves
- Totalmente responsivo
- Feedback visual para ações do usuário

## 🤝 Como Contribuir

1. Faça um fork do projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---

Desenvolvido por Isaac Amorim
