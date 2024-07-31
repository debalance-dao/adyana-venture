"use client";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <main className="flex flex-col grow relative text-white gap-8">
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
          <button
            type="button"
            className="py-[12px] px-[46px] border border-[#FCD22F] font-medium text-2xl mt-8"
          >
            EXPLORE {">"}
          </button>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="max-w-7xl w-full flex flex-col gap-4">
          <h1 className="font-bold text-3xl">
            New
            <span className="text-[#FCD22F] px-2">Project</span>
            List
          </h1>
          <ScrollArea className="rounded-md whitespace-nowrap">
            <div className="flex w-max space-x-4">
              {Array.from({ length: 10 }).map((d, index) => (
                <Card key={d} className="w-[400px] bg-[#222222] border-none">
                  <CardHeader>
                    <div className="bg-yellow-600 h-[177px] rounded-lg"></div>
                  </CardHeader>
                  <CardContent className="flex flex-col text-white gap-4">
                    <div className="flex justify-between gap-2">
                      <div className="text-[16px] font-bold">
                        Project {index + 1}
                      </div>
                      <div className="">
                        Return
                        <span className="text-[16px] font-bold ml-2">5%</span>
                      </div>
                    </div>
                    <div className="flex justify-between gap-2">
                      <div className="text-xs font-light">Total Raised</div>
                      <div className="text-[16px] font-bold">TBA</div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="bg-[#171614] w-full p-2 text-white rounded-md">
                      TBA
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>
      <section className="flex justify-center">
        <div className="max-w-7xl w-full flex flex-col gap-4">
          <h1 className="font-bold text-3xl">
            <span className="text-[#FCD22F] pr-2">Adyana</span>
            Features
          </h1>
          <div className="grid grid-cols-3 gap-x-5 justify-between gap-y-4 p-8">
            {Array.from({ length: 6 }).map((d) => (
              <div
                key={d}
                className="flex justify-center flex-col items-center text-center w-fit gap-5"
              >
                <div className="flex justify-center flex-col items-center">
                  <svg
                    width="76"
                    height="76"
                    viewBox="0 0 76 76"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden={true}
                  >
                    <path
                      d="M38 60.1666C38.665 60.1666 39.2793 59.8531 40.5112 59.2261L50.4228 54.1911C54.8087 51.9618 57 50.8471 57 49.0833V26.9166M38 60.1666C37.335 60.1666 36.7207 59.8531 35.4888 59.2261L25.5772 54.1911C21.1913 51.9618 19 50.8471 19 49.0833V26.9166M38 60.1666V38M57 26.9166C57 25.1528 54.8087 24.035 50.4228 21.8088L40.5112 16.7738C39.2793 16.1468 38.665 15.8333 38 15.8333C37.335 15.8333 36.7207 16.1468 35.4888 16.7738L25.5772 21.8088C21.1913 24.0381 19 25.1528 19 26.9166M57 26.9166C57 28.6805 54.8087 29.7983 50.4228 32.0245L40.5112 37.0595C39.2793 37.6865 38.6618 38 38 38M19 26.9166C19 28.6805 21.1913 29.7983 25.5772 32.0245L35.4888 37.0595C36.7207 37.6865 37.3382 38 38 38"
                      stroke="#FCD22F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M41.7683 68.324L56.6327 61.1293C63.2098 57.95 66.5 56.354 66.5 53.8333V22.1666C66.5 19.646 63.2098 18.0531 56.6327 14.8706L41.7683 7.67598C39.919 6.77981 38.9943 6.33331 38 6.33331C37.0057 6.33331 36.081 6.77981 34.2317 7.67598L19.3673 14.8706C12.7902 18.05 9.5 19.646 9.5 22.1666V53.8333C9.5 56.354 12.7902 57.9468 19.3673 61.1293L34.2317 68.324C36.081 69.2201 37.0057 69.6666 38 69.6666C38.9943 69.6666 39.919 69.2201 41.7683 68.324Z"
                      stroke="#FCD22F"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="font-bold text-[20px]">Lorem, ipsum</div>
                </div>
                <div className="font-light text-[20px]">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center mb-36">
        <div className="grid grid-cols-2 w-full max-w-7xl p-[70px] rounded-lg bg-[#232323] gap-20">
          <div className="">
            <div className="text-[40px] font-medium">
              Want to invest in a project on Adiyana?
            </div>
            <button
              type="button"
              className="py-[12px] px-[46px] border border-[#FCD22F] font-medium text-2xl mt-8"
            >
              EXPLORE {">"}
            </button>
          </div>
          <div className="flex flex-col gap-8 justify-center">
            {[
              "Diverse Investment Opportunities",
              "Secure and Transparent Platform",
              "Expert Guidance and Support",
            ].map((d) => (
              <div key={d} className="flex gap-4 items-center">
                <span className="h-[28px] w-[28px] flex rounded-full aspect-square bg-[#FCD22F]" />
                {d}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
