"use client";
import useWalletClient from "@/hooks/useWalletClient";
import Link from "next/link";

export default function LandingPage() {
	const { requestAddresses, addChain } = useWalletClient();
	return (
		<div className="flex flex-col min-h-screen">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, officia.
			<button
				type="button"
				onClick={async () => {
					try {
						const [address] = await requestAddresses();
						console.log(address);
					} catch (error) {
						console.log("connect wallet err:", error);
					}
				}}
			>
				connect wallet
			</button>
		</div>
	);
}
