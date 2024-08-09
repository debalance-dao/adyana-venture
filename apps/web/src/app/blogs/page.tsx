import Image from "next/image";
export default function BlogsPage() {
  return (
    <main className="text-white flex flex-col items-center gap-[86px] py-[80px]">
      <section className="w-full max-w-[1296px] space-y-[40px]">
        <h1 className="text-[32px] font-bold">
          Latest <span className="text-[#F8C200]">News</span>
        </h1>
        <div className="flex gap-2">
          <span className="w-[427px] bg-[#F8C200] rounded-[5px]" />
          <div className="py-2 pl-4 max-w-[829px] space-y-6">
            <h2 className="text-[32px] font-medium">Hackathon ETHSEA 2024</h2>
            <p className="text-[20px] font-normal text-justify">
              Lorem ipsum dolor sit amet consectetur. Urna nunc sapien purus
              imperdiet amet. Risus eget nec varius ultrices ornare non
              consectetur sed tristique. Ipsum egestas accumsan iaculis neque
              lectus. Tellus mattis volutpat sapien eu vel non mauris molestie.
              Adipiscing luctus libero condimentum morbi eros. Fermentum morbi
              viverra malesuada in dictum. Elementum ipsum aliquet pellentesque
              donec quam leo egestas vel mi.
            </p>
            <p className="font-bold text-[#9A9A9A] text-[20px]">Adyana 2024</p>
          </div>
        </div>
      </section>
      <section className="w-full max-w-[1296px] grid grid-cols-2 gap-x-[40px] gap-y-[20px]">
        {[
          {
            img: 1,
          },
          {
            img: 2,
          },
          {
            img: 2,
          },
          {
            img: 1,
          },
        ].map((d) => (
          <div
            key={`blog-${d.img}`}
            className="bg-[#242424] flex py-[14px] px-[20px] gap-[30px] items-center"
          >
            <span className="w-[164px] aspect-video bg-yellow-600 rounded-[5px] overflow-hidden">
              <Image
                src={`/assets/blogs/${d.img}.png`}
                alt="blog image"
                width={164}
                height={92}
                className="aspect-video h-full object-cover"
              />
            </span>
            <div className="">
              <h1 className="text-[20px] font-medium">
                Hackathon ETHSEA (Online) 2024
              </h1>
              <p className="font-normal text-[#9A9A9A] text-xs">Agust 2024</p>
            </div>
          </div>
        ))}
      </section>
      <section className="w-full max-w-[1296px] space-y-[40px]">
        <h1 className="text-[32px] font-bold">
          Ecosystem <span className="text-[#F8C200]">Adyana</span>
        </h1>
        <div className="flex gap-2">
          <span className="w-[427px] bg-[#F8C200]" />
          <div className="py-2 pl-4 max-w-[829px] space-y-6">
            <h2 className="text-[32px] font-medium">Ecosystem</h2>
            <p className="text-[20px] font-normal text-justify">
              Lorem ipsum dolor sit amet consectetur. Urna nunc sapien purus
              imperdiet amet. Risus eget nec varius ultrices ornare non
              consectetur sed tristique. Ipsum egestas accumsan iaculis neque
              lectus. Tellus mattis volutpat sapien eu vel non mauris molestie.
              Adipiscing luctus libero condimentum morbi eros. Fermentum morbi
              viverra malesuada in dictum. Elementum ipsum aliquet pellentesque
              donec quam leo egestas vel mi.
            </p>
            <p className="font-bold text-[#9A9A9A] text-[20px]">Adyana 2024</p>
          </div>
        </div>
      </section>
    </main>
  );
}
