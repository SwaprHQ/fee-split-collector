const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Contract = await hre.ethers.getContractFactory("V3Fees");
  const contract = await Contract.deploy([
    "0xe91d153e0b41518a2ce8dd3d7944fa863463a97d"
  ]);

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
