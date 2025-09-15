"use client";

import Profile from "@/assets/images/profile.png";
import { Button, Link } from "@/components/atoms";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GitHub, Linkedin, Mail } from "react-feather";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-12 gap-4 md:gap-10">
      <div className="col-span-12 flex flex-col content-center md:col-span-4">
        <Image
          src={Profile}
          width={200}
          height={200}
          alt="Picture of the author"
          placeholder="blur"
          className="mx-auto rounded-full border border-dark dark:border-light"
        />
        <div className="flex justify-center gap-4 py-4 md:gap-6">
          <a href="mailto:casey.oneill@uwaterloo.ca">
            <Mail />
          </a>
          <a href="https://www.linkedin.com/in/caseyoneill" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://github.com/casey-oneill" target="_blank" rel="noopener noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
      <div className="col-span-12 flex flex-col gap-4 md:col-span-8 md:gap-6">
        <h1 className="font-display text-2xl font-bold">Hi, I'm Casey!</h1>
        <h2 className="font-medium">
          I'm a second-year master's student in <span className="text-accent">Human-Computer Interaction</span> at the{" "}
          <span className="text-accent">University of Waterloo</span>, supervised by <Link href="https://edithlaw.ca/bio.html">Edith Law</Link>.
        </h2>
        <p className="text-base">
          I completed my undergraduate studies at the University of New Brunswick, where I earned a Bachelor of Computer Science with Honours,
          supervised by <Link href="https://hci.cs.umanitoba.ca/people/bio/daniel-rea">Daniel Rea</Link>, and a Bachelor of Arts with a Major in
          Philosophy.
        </p>
        <p>My recent work focuses on social robotics and the personification of conversational agents, such as voice assistants and chatbots.</p>
        <div className="flex gap-2">
          <Button onClick={() => router.push("/resume")}>Resume</Button>
          <Button onClick={() => router.push("/research")} variant="secondary">
            Research
          </Button>
        </div>
      </div>
    </div>
  );
}
