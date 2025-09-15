import { Link } from "@/components/atoms";
import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import { useMemo } from "react";

export default function About() {
  const sections = useMemo(
    () => [
      {
        key: "biography",
        component: (
          <Section name="Biography">
            <div className="grid grid-cols-1 gap-4">
              <p>
                I'm a second-year master's student at the University of Waterloo. I'm supervised by{" "}
                <Link href="https://edithlaw.ca/bio.html">Edith Law</Link> in the{" "}
                <Link href="https://edithlaw.ca/index.html">Augmented Intelligence Lab</Link> with support from{" "}
                <Link href="https://scottbateman.github.io">Scott Bateman</Link> in the{" "}
                <Link href="https://www.unb.ca/research/labs/spectral/">SPECTRAL Research Centre</Link>. I completed my undergraduate studies at the
                University of New Brunswick in Fredericton, NB, where I concurrently obtained a Bachelor of Computer Science with Honours, supervised
                by <Link href="https://hci.cs.umanitoba.ca/people/bio/daniel-rea">Daniel Rea</Link>, and a Bachelor of Arts with a Major in
                Philosophy. I also participated in the UNB Faculty of Computer Science Co-Op Program and spent a total of 16 months working as a co-op
                developer before finding permanent part-time employment with <Link href="https://www.verosource.com">VeroSource Solutions</Link>,
                which has allowed me to continue improving my software development skills as I study.
              </p>
              <p>
                My research interests include Human-Computer Interaction, Human-Robot Interaction, and video games. My master's thesis focuses on
                social interactions with voice assistants. My Honours thesis explored how neurotic robot personalities and backstories can be used in
                interactions with social robots. I have also contributed to research on the use of Capability Sensitive Design to improve well-being
                during a life transition.
              </p>
            </div>
          </Section>
        ),
      },
      {
        key: "hobbies",
        component: (
          <Section name="Hobbies">
            <div className="grid grid-cols-1 gap-4">
              <p>
                In my free time, I enjoy reading, running, and games of all types — from recreational sports to video games and trivia with friends. I
                also love listening to music and trying to play the guitar. Here are some of my favourite songs to listen to at work.
              </p>
              <iframe
                className="rounded-xl"
                data-testid="embed-iframe"
                src="https://open.spotify.com/embed/playlist/6sQg6TuLp3WXulnJXKt0KT?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </Section>
        ),
      },
    ],
    [],
  );

  return <Page name="About Me" sections={sections} />;
}
