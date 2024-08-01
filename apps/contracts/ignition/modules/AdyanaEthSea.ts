import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { parseEther } from "viem";

const ADYVentureModule = buildModule("AdyanaEthSeaModule", (m) => {
  const adyanaVenture = m.contract("AdyanaToken", [7000000000]);

  return { adyanaVenture };
});

export default ADYVentureModule;
