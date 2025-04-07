const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const PiggyBank = await hre.ethers.getContractFactory("EtherPiggyBank");
  const piggyBank = await PiggyBank.deploy();
  await piggyBank.waitForDeployment();

  const address = await piggyBank.getAddress();
  console.log("Contract deployed to Sepolia at:", address);

//   // Save ABI + Address for frontend
//   const abi = JSON.stringify(PiggyBank.interface.format("json"));
//   const output = {
//     address,
//     abi: JSON.parse(abi),
//   };

//   fs.writeFileSync("../frontend/src/contracts/etherPiggyBank.js", 
//     `export const CONTRACT_ADDRESS = "${address}";\n` +
//     `export const CONTRACT_ABI = ${JSON.stringify(output.abi, null, 2)};`
//   );
//   console.log("ABI and address written to frontend.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
