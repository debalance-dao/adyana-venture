"use client";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="flex flex-col grow relative text-white">
      <div className="absolute -top-24 right-0 -z-40 w-1/2 overflow-hidden">
        <img src="/assets/background/hero.png" alt="ilust" className="" />
      </div>
      <section className="flex justify-center mt-[80px]">
        <div className="w-full max-w-7xl">
          <h1 className="font-bold text-[64px] text-white max-w-[956px]">
            An Innovative Platform for New Ventures
          </h1>
          <p className="text-white max-w-[744px]">
            Adiyana selects projects meticulously, considering all aspects from
            the backgrounds of the project teams to their authenticity and
            ability to execute effectively.
          </p>
          <div className="max-w-[600px] flex gap-4 mt-[40px]">
            {[
              {
                text: "32+",
                name: "IDO projects",
              },
              {
                text: "$12,450,000",
                name: "Fund raised",
              },
              {
                text: "+2,996.4%",
                name: "ATH AVG ROI",
              },
            ].map((d) => (
              <div key={d.name} className="flex flex-col items-center">
                <p className="font-bold text-2xl">{d.text}</p>
                <h2 className="text-[#FCD22F]">{d.name}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
