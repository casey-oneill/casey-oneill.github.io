import Image from "next/image";
import { GitHub, Linkedin, Mail } from "react-feather";
import Profile from "@/assets/images/profile.png";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-4 md:gap-10">
      <div className="col-span-12 md:col-span-4 flex flex-col content-center">
        <Image
          src={Profile}
          width={200}
          height={200}
          alt="Picture of the author"
          placeholder="blur"
          className="rounded-full border border-dark mx-auto"
        />
        <div className="flex justify-center py-4 gap-4 md:gap-6">
          <a href="mailto:casey.oneill@uwaterloo.ca"><Mail /></a>
          <a href="https://www.linkedin.com/in/caseyoneill" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://github.com/casey-oneill" target="_blank" rel="noopener noreferrer"><GitHub /></a>
        </div>
      </div>
      <div className="col-span-12 md:col-span-8 flex flex-col gap-4 md:gap-6">
        <h1 className="font-display font-black text-2xl">
          Hi, I'm Casey!
        </h1>
        <h2 className="font-medium text-lg">
          I'm a graduate student at the <span className="text-accent">University of Waterloo</span> pursuing a Master of Mathematics in Computer Science with a specialization in <span className="text-accent">Human-Computer Interaction</span>.
        </h2>
        <p className="text-base">
          This follows the completion of my undergraduate degrees from the University of New Brunswick in 2023, where I earned a Bachelor of Computer Science and a Bachelor of Arts with a major in Philosophy.
        </p>
      </div>
    </div>
  );
}
