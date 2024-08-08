import {
  createWalletClient,
  custom,
  createPublicClient,
  type Account,
} from "viem";
import { polygon } from "viem/chains";

declare global {
  interface Window {
    ethereum: unknown;
  }
}
export let walletClient: ReturnType<typeof createWalletClient>;
export let publicClient: ReturnType<typeof createPublicClient>;
type EthereumProvider = {
  request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
};
export let ethereum: EthereumProvider;

if (globalThis.window) {
  ethereum = window?.ethereum as EthereumProvider;

  if (ethereum !== undefined) {
    publicClient = createPublicClient({
      chain: polygon,
      transport: custom(ethereum),
    });
    walletClient = createWalletClient({
      chain: polygon,
      transport: custom(ethereum),
    });
  } else {
    alert("metamask not installed!");
  }
}
