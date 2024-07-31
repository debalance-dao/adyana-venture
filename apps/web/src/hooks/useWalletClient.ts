import { walletClient } from "@/config/viem";

export default function useWalletClient() {
	return { ...walletClient };
}
