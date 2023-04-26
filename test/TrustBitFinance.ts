import {expect} from "chai";
import {ethers} from "hardhat";

describe("TrustBit.Finance", function () {
    // We define a fixture to reuse the same setup in every test.
    // We use loadFixture to run this setup once, snapshot that state,
    // and reset Hardhat Network to that snapshot in every test.
    async function setup() {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const trustBitFinanceContractFactory = await ethers.getContractFactory("TrustBitFinance");
        const trustBitContract = await trustBitFinanceContractFactory.deploy();

        return {trustBitContract, owner, otherAccount};
    }

    describe("Contract", function () {
        it("Information Contracts", async function () {
            const {owner, trustBitContract} = await setup();
            expect(await trustBitContract.name()).to.equal("TrustBit.Finance");
            expect(await trustBitContract.symbol()).to.equal("TRS");
            expect(await trustBitContract.decimals()).to.equal(18);
            expect(await trustBitContract.totalSupply()).to.equal(ethers.utils.parseEther("20000000"));
        });

        it("BalanceOf", async function () {
            const {owner, trustBitContract} = await setup();
            expect(await trustBitContract.balanceOf(owner.address)).to.equal(ethers.utils.parseEther("20000000"));
        });
    });
});
