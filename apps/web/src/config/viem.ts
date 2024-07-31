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
	const requestAccount = async () => {
		const [account] = (await ethereum?.request({
			method: "eth_requestAccounts",
		})) as Account[];
		return account;
	};

	publicClient = createPublicClient({
		chain: polygon,
		transport: custom(ethereum),
	});
	walletClient = createWalletClient({
		chain: polygon,
		transport: custom(ethereum),
	});
}
