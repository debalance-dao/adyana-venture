import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function StakingPage() {
  return (
    <main className="relative text-white">
      {/* <div className="absolute top-0- right-0 -z-40 border overflow-hidden flex">
        <img
          src="/assets/background/staking.png"
          alt="staking-ilust"
          className="aspect-auto object-contain h-[500px] border-8 ml-auto"
        />
      </div> */}
      <section className="flex justify-center">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="flex gap-1 items-center font-bold text-[64px]">
            Adyana
            <h1 className="text-[#FCD22F]">Staking</h1>
          </div>
          <div className="max-w-[810px] text-center font-light">
            Stake $ADY to earn rewards and secure guaranteed allocations on the
            Launchpad.If you encounter any issues, please refer to this YouTube
            tutorial for step-by-step guidance.
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-[100px]">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <div className="flex justify-center flex-wrap gap-20 p-8 border max-w-[1106px] rounded-lg border-[#FCD22F]">
            {[
              {
                text: "50 ADY",
                content: "SUPPLY",
              },
              {
                text: "5008+ ADY",
                content: "STAKING",
              },
              {
                text: "300",
                content: "COMPANY",
              },
              {
                text: "50 ADY",
                content: "SUPPLY",
              },
              {
                text: "5008+ ADY",
                content: "STAKING",
              },
              {
                text: "300",
                content: "COMPANY",
              },
              {
                text: "50 ADY",
                content: "SUPPLY",
              },
            ].map((d) => (
              <div className="text-center" key={d.content}>
                <div className="font-bold text-[36px]">{d.text}</div>
                <div className="text-2xl font-normal">{d.content}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex justify-center mt-[100px]">
        <div className="w-full max-w-7xl flex flex-col items-center">
          <Tabs defaultValue="live" className="w-[400px]- w-full">
            <div className="flex mb-16">
              <TabsList className="grid grid-cols-2 w-fit bg-[#242424] p-2 h-fit">
                <TabsTrigger value="live" className="px-16">
                  LIVE
                </TabsTrigger>
                <TabsTrigger value="finished" className="px-16">
                  FINISHED
                </TabsTrigger>
              </TabsList>
              <span className="w-full flex items-center ml-8 justify-between">
                <div className="flex items-center gap-2">
                  <Switch className="bg-[#242424]" />
                  <span className="">My Staking Pool</span>
                </div>
                <div className="bg-[#F8C200] text-[20px] text-black px-16 py-2 h-full rounded-sm">
                  STAKING
                </div>
              </span>
            </div>
            <TabsContent value="live">
              <div className="space-y-2">
                {Array.from({ length: 5 }).map((d, i) => (
                  <div
                    key={`d${d}`}
                    className="flex gap-2 items-center justify-between p-4 rounded-md bg-[#242424]"
                  >
                    <span className="flex h-12 w-12 aspect-square rounded-sm bg-yellow-400" />
                    <p className="">Community Raise of Hand</p>
                    <div className="text-center">
                      <h1 className="text-[10px] text-[#9A9A9A]">
                        Total Raise
                      </h1>
                      <p className="text-[14px] font-medium">$4000</p>
                    </div>
                    <div className="text-center">
                      <h1 className="text-[10px] text-[#9A9A9A]">
                        PARTICIPANT
                      </h1>
                      <p className="text-[14px] font-medium">100</p>
                    </div>
                    <div className="text-center">
                      <h1 className="text-[10px] text-[#9A9A9A]">STATUS</h1>
                      <p className="text-[14px] font-medium text-[#F8C200]">
                        FINISHED
                      </p>
                    </div>
                    <button
                      type="button"
                      className="bg-[#9A9A9A] rounded-sm text-black px-12 py-2"
                    >
                      CLAIM
                    </button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="finished">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel
              mollitia quod libero labore nisi eligendi et. Soluta, aut rerum.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
