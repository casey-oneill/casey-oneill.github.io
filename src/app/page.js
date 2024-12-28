import Image from "next/image";
import { GitHub, Linkedin, Mail } from "react-feather";

export default function Home() {
  return (
    <div className="flex gap-10">
      <div className="flex flex-col content-center">
        <Image
          src="/profile.png"
          alt="Picture of the author"
          className="rounded-full border border-dark"
          width={400}
          height={400}
        />
        <div className="flex justify-center py-4 gap-6">
          <a href="mailto:casey.oneill@uwaterloo.ca"><Mail /></a>
          <a href="https://www.linkedin.com/in/caseyoneill" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://github.com/casey-oneill" target="_blank" rel="noopener noreferrer"><GitHub /></a>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h1 className="font-display font-black text-5xl">
          Hi, I'm Casey!
        </h1>
        <h2 className="font-medium text-2xl">
          I'm a graduate student at the <span className="text-accent">University of Waterloo</span> pursuing a Master of Mathematics in Computer Science with a specialization in <span className="text-accent">Human-Computer Interaction</span>.
        </h2>
        <p className="text-lg">
          This follows the completion of my undergraduate degrees from the University of New Brunswick in 2023, where I earned a Bachelor of Computer Science and a Bachelor of Arts with a major in Philosophy.
        </p>
      </div>
    </div>
  );
}
