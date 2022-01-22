require('@nomiclabs/hardhat-waffle');
require('dotenv').config({ path: __dirname + '/.env' })

module.exports = {
  solidity: '0.8.0',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/z8jPCxxaatWySVK7rx3BfET_4DXUxYgI',
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};