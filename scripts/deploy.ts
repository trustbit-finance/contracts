import { ethers } from "hardhat";

async function main() {
  const TrustBitContractFactory = await ethers.getContractFactory("TrustBitFinance");
  const TrustBitContract = await TrustBitContractFactory.deploy();

  await TrustBitContract.deployed();

  console.log(
    `Deployed to ${TrustBitContract.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
