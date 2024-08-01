"use client";
import useWalletClient from "@/hooks/useWalletClient";
import Link from "next/link";
import { useState } from "react";
import type { Address } from "viem";
export default function Header() {
  const { requestAddresses, addChain } = useWalletClient();
  const [add, setAdd] = useState<Address | null>(null);
  return (
    <header className="flex justify-center text-white p-8">
      <div className="max-w-7xl flex justify-between w-full">
        <div className="text-[#F8C200]">Adyana</div>
        <nav className="flex gap-4">
          {["home", "staking", "buy"].map((d) => (
            <Link href={`/${d}`} key={d}>
              <div className="">{d}</div>
            </Link>
          ))}
        </nav>
        <div className="">
          {add === null ? (
            <button
              className="text-[#F8C200]"
              type="button"
              onClick={async () => {
                try {
                  const [address] = await requestAddresses();
                  setAdd(address);
                  console.log(address);
                } catch (error) {
                  console.log("connect wallet err:", error);
                }
              }}
            >
              connect wallet
            </button>
          ) : (
            <button
              type="button"
              className="bg-[#F8C200] p-2 rounded-md overflow-hidden w-[100px]"
            >
              <span className="">{add}</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
