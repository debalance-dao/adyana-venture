import { publicClient } from "@/config/viem";

export default function usePublicClient() {
	return { ...publicClient };
}
