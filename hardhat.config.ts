import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    networks: {
        hardhat: {
            chainId: 1337
        },
        mainnet: {},
        bsc: {
            chainId: 56,
            url: "https://bsc-dataseed.binance.org/",
            accounts: {
              mnemonic: "test"
            },
            gasPrice: 20000000000,
            gas: 2100000,
        }
    }
};

export default config;
