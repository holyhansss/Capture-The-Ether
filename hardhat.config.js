require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "ropsten",
  networks: {
    hardhat: {
    },
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/cwlARYWEEACYbZYUWyBeQ5TrKhwPvbXk",
      accounts: ["c9ae62cfd9e672ce33d0f02fef0746420ef67ec5e4cb59f5e7de82add084b85a"] // need to be declared
    }
  },
  solidity: {
    version: "0.4.21",
  },
  compilers: [
    {
      version: "0.4.21",
    }
  ],

};
