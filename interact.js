require("dotenv").config();
const { ethers } = require("hardhat");

const CONTRACT_ADDRESS = "SEU_ENDEREÇO_DO_CONTRATO_AQUI"; // Substitua pelo endereço do contrato implantado

async function main() {
  // Configurar o provedor e a carteira
  const provider = new ethers.providers.JsonRpcProvider("https://sepolia.base.org");
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Conectar ao contrato
  const contractABI = [
    "function setValue(uint256 _value) public",
    "function value() public view returns (uint256)"
  ];
  const contract = new ethers.Contract(CONTRACT_ADDRESS, contractABI, wallet);

  // **1. Ler o valor atual do contrato**
  let currentValue = await contract.value();
  console.log("Valor atual armazenado no contrato:", currentValue.toString());

  // **2. Definir um novo valor**
  console.log("Atualizando o valor para 42...");
  let tx = await contract.setValue(42);
  await tx.wait();
  console.log("Valor atualizado com sucesso!");

  // **3. Ler o valor atualizado**
  currentValue = await contract.value();
  console.log("Novo valor armazenado no contrato:", currentValue.toString());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
