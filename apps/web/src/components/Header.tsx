"use client";
import useWalletClient from "@/hooks/useWalletClient";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import type { Address } from "viem";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import usePublicClient from "@/hooks/usePublicClient";
import { customChain } from "@/lib/blockchain";
import contract from "@/lib/contract";

export default function Header() {
  const { requestAddresses, getAddresses, writeContract } = useWalletClient();
  const { readContract, simulateContract } = usePublicClient();
  const [add, setAdd] = useState<Address | null>(null);
  const [balance, setBalance] = useState<number>();

  const interactConfig = {
    abi: contract.abi,
    chain: customChain.localNet,
    address: contract.address,
  };

  const depositAdy = async (amount: number) => {
    const { request } = await simulateContract({
      ...interactConfig,
      account: await getWalletAddress(),
      functionName: "deposit",
      args: [],
      value: amount as unknown as bigint,
    });
    writeContract(request);
  };

  const getWalletAddress = async () => {
    const [account] = await getAddresses();
    return account;
  };
  const getBalance = async () => {
    const userBalance = await readContract({
      abi: interactConfig.abi,
      address: interactConfig.address,
      account: await getWalletAddress(),
      functionName: "balanceOf",
      args: [await getWalletAddress()],
    });
    return userBalance;
  };
  useEffect(() => {
    (async () => {
      const userbalance = await getBalance();
      console.log({ userbalance });
      setBalance(Number(userbalance));
    })();
  }, []);

  function handleDeposit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const amountInput = form.elements.namedItem("amount") as HTMLInputElement;
    const amount = amountInput.value;
    depositAdy(Number(amount));

    console.log({ amount });
  }
  return (
    <header className="flex justify-center text-white p-8">
      <div className="max-w-7xl flex justify-between w-full">
        <div className="text-[#F8C200]">Adyana</div>
        <nav className="flex gap-4">
          <Link href="/">
            <div className="">home</div>
          </Link>
          <Link href="/staking">
            <div className="">staking</div>
          </Link>

          <Dialog>
            <DialogTrigger className="h-fit">
              <button type="button">buy</button>
            </DialogTrigger>
            <DialogContent className="bg-[#1b1b1b] text-white p-16 w-[520px]">
              <DialogHeader>
                <DialogTitle className="w-full text-center text-[36px] font-medium">
                  Buy $ADY
                </DialogTitle>
              </DialogHeader>
              <form className="w-full space-y-[40px]" onSubmit={handleDeposit}>
                <div className="flex flex-col gap-5">
                  <label
                    htmlFor="amount"
                    className="text-[16px] font-normal text-[#9A9A9A]"
                  >
                    Input the amount
                  </label>
                  <input
                    type="number"
                    name="amount"
                    id="amount"
                    min={100}
                    className="bg-[#242424] p-2 border border-[#9A9A9A] rounded-sm h-[50px]"
                  />
                  <DialogDescription>
                    Minimum deposit is 100 $ADY,$ADY price is 1 GWEY/1 $ADY
                  </DialogDescription>
                </div>
                <button
                  type="submit"
                  className="bg-[#F8C200] text-[20px] text-black w-full py-2 rounded-sm h-[60px]"
                >
                  BUY
                </button>
              </form>
            </DialogContent>
          </Dialog>
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
            <Dialog>
              <DialogTrigger>
                <button
                  type="button"
                  className="bg-[#F8C200] text-black p-2 rounded-md overflow-hidden w-[100px]"
                >
                  <span className="">{add}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="bg-[#1b1b1b] text-white p-16 w-[520px]">
                <DialogHeader>
                  <DialogTitle className="w-full text-center text-[36px] font-medium">
                    Account
                  </DialogTitle>
                </DialogHeader>
                <div className="w-full space-y-[40px]">
                  <div className="bg-[#242424] w-full border border-[#9A9A9A] rounded-sm flex gap-2 justify-between items-center p-6">
                    <div className="flex gap-4 items-center">
                      <svg
                        width="48"
                        height="46"
                        aria-hidden={true}
                        viewBox="0 0 48 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_73_1527)">
                          <path
                            d="M46.8873 0.5L26.291 15.7398L30.1211 6.75856L46.8873 0.5Z"
                            fill="#E17726"
                          />
                          <path
                            d="M1.16084 0.517944L17.8823 6.75963L21.519 15.8586L1.16084 0.517944ZM38.5988 32.9108L47.7021 33.0841L44.5206 43.8919L33.4125 40.8336L38.5988 32.9108ZM9.40109 32.9108L14.568 40.8336L3.47872 43.8921L0.316528 33.0841L9.40109 32.9108Z"
                            fill="#E27625"
                          />
                          <path
                            d="M21.0246 13.541L21.3966 25.5566L10.2645 25.0502L13.431 20.273L13.4712 20.2271L21.0246 13.541ZM26.8601 13.407L34.5289 20.2275L34.5686 20.2732L37.7351 25.0504L26.6055 25.5566L26.8601 13.407ZM14.8941 32.9458L20.9725 37.6819L13.9116 41.0908L14.8941 32.9458ZM33.1071 32.945L34.0691 41.091L27.028 37.6815L33.1071 32.945Z"
                            fill="#E27625"
                          />
                          <path
                            d="M27.1834 37.2354L34.3285 40.6951L27.6822 43.8537L27.7512 41.7661L27.1834 37.2354ZM20.8146 37.2369L20.2692 41.732L20.314 43.8513L13.6521 40.6951L20.8146 37.2369Z"
                            fill="#D5BFB2"
                          />
                          <path
                            d="M18.7513 27.1248L20.6184 31.0488L14.2616 29.1865L18.7513 27.1248ZM29.2485 27.1251L33.7593 29.1865L27.3817 31.0482L29.2485 27.1251Z"
                            fill="#233447"
                          />
                          <path
                            d="M15.3799 32.9056L14.3524 41.3506L8.84497 33.0903L15.3799 32.9056ZM32.6205 32.9058L39.1557 33.0903L33.6276 41.3509L32.6205 32.9058ZM37.896 24.5725L33.1401 29.4196L29.4732 27.7439L27.7176 31.4346L26.5667 25.0879L37.896 24.5725ZM10.1016 24.5725L21.4332 25.0879L20.2821 31.4346L18.5262 27.7444L14.8787 29.4198L10.1016 24.5725Z"
                            fill="#CC6228"
                          />
                          <path
                            d="M9.78113 23.5779L15.162 29.0381L15.3484 34.4285L9.78113 23.5779ZM38.2243 23.5681L32.6469 34.4381L32.8569 29.0381L38.2243 23.5681ZM21.1701 23.9105L21.3866 25.2736L21.9218 28.6694L21.5777 39.0991L19.9511 30.7207L19.9506 30.6341L21.1701 23.9105ZM26.8271 23.8916L28.0498 30.6341L28.0493 30.7207L26.4186 39.1201L26.3541 37.0192L26.0996 28.6076L26.8271 23.8916Z"
                            fill="#E27525"
                          />
                          <path
                            d="M33.3353 28.8212L33.1532 33.5045L27.4768 37.9271L26.3293 37.1164L27.6156 30.491L33.3353 28.8212ZM14.6844 28.8212L20.3843 30.491L21.6705 37.1164L20.523 37.9271L14.8464 33.5042L14.6844 28.8212Z"
                            fill="#F5841F"
                          />
                          <path
                            d="M12.5659 39.6609L19.8282 43.1019L19.7974 41.6325L20.4051 41.099H27.5927L28.2224 41.6306L28.1759 43.0989L35.3922 39.6695L31.8807 42.5713L27.6347 45.4875H20.3468L16.1037 42.5593L12.5659 39.6609Z"
                            fill="#C0AC9D"
                          />
                          <path
                            d="M26.6632 36.7773L27.69 37.5028L28.2917 42.3035L27.4209 41.5683H20.5817L19.7274 42.3183L20.3094 37.5032L21.3365 36.7773H26.6632Z"
                            fill="#161616"
                          />
                          <path
                            d="M45.5276 0.921875L48 8.33881L46.4559 15.8382L47.5554 16.6863L46.0676 17.8214L47.1859 18.6851L45.7052 20.0334L46.6142 20.6917L44.2018 23.5091L34.3074 20.6281L34.2218 20.5822L27.0917 14.5676L45.5276 0.921875ZM2.47237 0.921875L20.9085 14.5676L13.7782 20.5822L13.6926 20.6281L3.79819 23.5091L1.38581 20.6917L2.29406 20.0339L0.814312 18.6851L1.93031 17.8224L0.420187 16.6841L1.56113 15.8354L0 8.33919L2.47237 0.921875Z"
                            fill="#763E1A"
                          />
                          <path
                            d="M33.8235 19.9981L44.3072 23.0504L47.7131 33.5478H38.7273L32.5361 33.6258L37.0387 24.8493L33.8235 19.9981ZM14.1765 19.9981L10.9607 24.8493L15.4638 33.6258L9.27541 33.5478H0.305786L3.6926 23.0506L14.1765 19.9981ZM30.6345 6.7085L27.7022 14.6283L27.0798 25.3271L26.8417 28.6805L26.8228 37.247H21.177L21.1586 28.6966L20.9197 25.3242L20.2972 14.6283L17.3653 6.7085H30.6345Z"
                            fill="#F5841F"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_73_1527">
                            <rect
                              width="48"
                              height="45"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <div className="grow w-[80px] overflow-hidden">{add}</div>
                    </div>
                    <button type="button" className="text-[#E73959]">
                      Disconnect
                    </button>
                  </div>
                  <div className="flex gap-2 items-center w-full justify-between">
                    <span className="text-[#9A9A9A] text-[16px] font-normal">
                      Balance
                    </span>
                    <div className="text-xl text-white font-medium">
                      {balance} ADY
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </header>
  );
}
