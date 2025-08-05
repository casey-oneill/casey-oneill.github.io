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
                <Link href="https://edithlaw.ca/index.html">Dr. Edith Law</Link> with additional support from{" "}
                <Link href="https://scottbateman.github.io">Dr. Scott Bateman</Link>. I completed my undergraduate studies at the University of New
                Brunsick in Fredericton, NB, where I concurrently obtained a Bachelor of Computer Science and a Bachelor of Arts with a Major in
                Philosophy. I also participated in the UNB Faculty of Computer Science Co-Op Program and spent a total of 16 months working as a co-op
                developer at various New Brunswick companies before finding permanent part-time employment with{" "}
                <Link href="https://www.verosource.com">VeroSource Solutions</Link>, which has allowed me to continue improving my software
                development skills as I attend university.
              </p>
              <p>
                My research interests include Human-Computer Interaction, Human-Robot Interaction, and video games. My thesis focuses on social
                interactions with voice agents such as Siri and Alexa. I have also contributed to research on the use of Capability Sensitive Design
                to improve well-being during a life transition. During my time at UNB, I worked with{" "}
                <Link href="https://hci.cs.umanitoba.ca/people/bio/daniel-rea">Dr. Daniel Rea</Link> to explore how neurotic robot personalities and
                backstories can be used in interactions with social robots.
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
                In my free time, I enjoy reading, running (when the weather is nice), and games of all types - from recreational sports to video games
                and trivia with friends. I'm also an avid music fan. Below, you can find some of my favourite songs to listen to at work.
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
