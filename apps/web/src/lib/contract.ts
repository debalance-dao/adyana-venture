import adyContract from "../../../contracts/artifacts/contracts/AdyanaEthSea.sol/AdyanaToken.json";
import type { AdyanaToken$Type } from "../../../contracts/artifacts/contracts/AdyanaEthSea.sol/AdyanaToken";
import type { Address } from "viem";

type ExtractProperty<T, K extends keyof T> = T[K];
type TContractABI = ExtractProperty<AdyanaToken$Type, "abi">;

const abi = adyContract.abi as TContractABI;
const address: Address = "0x93a227a7897985e531c2984c2167F23eE96DD05a";
const contract = {
  abi,
  address,
};
export default contract;
