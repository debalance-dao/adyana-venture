"use client";
import useWalletClient from "@/hooks/useWalletClient";
export default function Header() {
  const { requestAddresses, addChain } = useWalletClient();
  return (
    <header className="flex justify-center text-white p-8">
      <div className="max-w-7xl flex justify-between w-full">
        <div className="text-[#F8C200]">Adyana</div>
        <nav className="flex gap-4">
          {["home", "staking", "about company"].map((d) => (
            <div className="" key={d}>
              {d}
            </div>
          ))}
        </nav>
        <button
          className="text-[#F8C200]"
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
    </header>
  );
}
