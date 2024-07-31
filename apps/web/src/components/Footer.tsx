import { AtSign, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white flex justify-center p-4">
      <div className="w-full max-w-7xl flex flex-col justify-center items-center gap-4">
        <h1 className="text-[#FCD22F] text-2xl">Adyana</h1>
        <div className="flex flex-col justify-center items-center gap-4">
          <p className="">
            Showcase and elevate top-tier projects with our curated platform.
          </p>
          <p className="">
            Intelligent Launchpad with integrated AI and a strong emphasis on
            DeFi.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Instagram />
          <Linkedin />
          <AtSign />
          <Facebook />
        </div>
        <div className="border-t border-white w-full flex justify-between mt-[100px]">
          <div className="">Copyright © 2021 . All rights reserved.</div>
          <div className="">Term Of Service | Privacy Police | Help Center</div>
        </div>
      </div>
    </footer>
  );
}
