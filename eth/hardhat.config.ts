import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from "hardhat/config";

dotenv.config({ path: "../.env" });

console.log(process.env.ETH_RPC_URL as string);
const config: HardhatUserConfig = {
  solidity: "0.8.24",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
      forking: {
        url: process.env.ETH_RPC_URL as string,
      }
    }
  },
};

export default config;
