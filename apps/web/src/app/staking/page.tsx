import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
          <Tabs defaultValue="account" className="w-[400px]-">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <span className="">sakdjsak</span>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </main>
  );
}
