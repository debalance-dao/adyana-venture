import adyContract from "../../../contracts/artifacts/contracts/AdyanaEthSea.sol/AdyanaToken.json";
import type { AdyanaToken$Type } from "../../../contracts/artifacts/contracts/AdyanaEthSea.sol/AdyanaToken";
import type { Address } from "viem";

type ExtractProperty<T, K extends keyof T> = T[K];
type TContractABI = ExtractProperty<AdyanaToken$Type, "abi">;

const abi = adyContract.abi as TContractABI;
const address: Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
const contract = {
  abi,
  address,
};
export default contract;
