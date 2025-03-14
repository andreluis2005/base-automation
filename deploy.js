const { ethers } = require("hardhat");

async function main() {
  const Contract = await ethers.getContractFactory("SimpleContract");
  const contract = await Contract.deploy();
  await contract.deployed();

  console.log("Contrato implantado em:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
