require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

goerli_url = process.env.GOERLI_RPC_URL;
account = process.env.ACCOUNT;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: goerli_url,
      accounts: [account],
    },
  },
};
