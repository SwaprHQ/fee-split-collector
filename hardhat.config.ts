import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const dotenv = require("dotenv");
dotenv.config();

const { PRIVATE_KEY, GNOSIS_RPC_URL, GNOSISSCAN_API_KEY } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "paris"
    }
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: `${GNOSIS_RPC_URL}`,
      },
      accounts: [{
        privateKey: `0x${PRIVATE_KEY}`,
        balance: "10000000000000000000000"
      }],
    },
    gnosis: {
      url: `${GNOSIS_RPC_URL}`,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: GNOSISSCAN_API_KEY,
  },
};

export default config;
