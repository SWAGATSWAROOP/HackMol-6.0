require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // sepolia: {
    //   chainId: 11155111,
    //   url: process.env.SEPOLIA_RPC_URL,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
  gasReporter: {
    enabled: true,
    currency: "INR",
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    token: "ETH",
    outputFile: "gasReportsETH.txt",
    noColors: true,
  },
};
