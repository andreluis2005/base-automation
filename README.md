# Base Automation - Hardhat Project

## 🚀 Descrição
Este projeto é uma automação de transações na rede Base Sepolia utilizando Hardhat. Ele permite implantar e interagir com um contrato inteligente que armazena um valor na blockchain. (BASE)

## 📦 Requisitos
Antes de iniciar, certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/)

## ⚙️ Configuração do Projeto
### 1️⃣ Clone o repositório e instale as dependências:
```sh
 git clone https://github.com/seu-usuario/base-automation.git
 cd base-automation
 npm install
```

### 2️⃣ Configure a rede Base Sepolia no `hardhat.config.js`:
```js
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    base_sepolia: {
      url: "https://sepolia.base.org",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
```

### 3️⃣ Crie um arquivo `.env` e adicione sua chave privada:
```sh
PRIVATE_KEY="sua_chave_privada_aqui"
```
⚠️ **NUNCA compartilhe sua chave privada!**

## 📝 Implantando o Contrato
### 1️⃣ Compile o contrato:
```sh
npx hardhat compile
```
### 2️⃣ Implemente o contrato na rede Base Sepolia:
```sh
npx hardhat run scripts/deploy.js --network base_sepolia
```
Isso retornará o endereço do contrato implantado.

## 🔄 Interagindo com o Contrato
### 1️⃣ Configure o endereço do contrato em `scripts/interact.js`:
```js
const CONTRACT_ADDRESS = "SEU_ENDEREÇO_DO_CONTRATO_AQUI";
```
### 2️⃣ Execute o script de interação:
```sh
npx hardhat run scripts/interact.js --network base_sepolia
```
Isso permitirá:
✅ Ler o valor armazenado no contrato.
✅ Atualizar o valor.
✅ Confirmar a atualização.

## 📌 Próximos Passos
- Criar uma interface web para interagir com o contrato.
- Implementar um bot para automação de transações.
- Melhorar a segurança do projeto.

## 📜 Licença
Este projeto é open-source sob a licença MIT.

