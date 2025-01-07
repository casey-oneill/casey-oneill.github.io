import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import { useMemo } from "react";

export default function About() {
  const sections = useMemo(() => ([
    {
      key: "biography",
      component: (
        <Section name="Biography">
          <div className="grid grid-cols-1 gap-4">
            <p>I'm a second-year master's student at the University of Waterloo. I'm currently completing my master's thesis in addition to working part-time as a software developer for VeroSource Solutions. I completed my undergraduate studies at the University of New Brunsick in Fredericton, NB, and concurrently obtained a Bachelor of Computer Science and Bachelor of Arts with a Major in Philosophy. I also participated in the UNB Faculty of Computer Science Co-Op Program and spent a total of 16 months working as a co-op student at various New Brunswick softare companies before finding permanent part-time employment, which has allowed me to continue improving my software development skills as I attend university.</p>
            <p>My research interests include Human-Computer Interaction, Human-Robot Interaction, and video games. My thesis focuses on the problem of gendered voice agents such as Siri and Alexa that can reinforce harmful gender stereotypes. I have also contributed to the work of Dr. Edith Law and her UW team on using Capability Sensitive Design (CSD) to improve the well-being of newcomers to Canada. During my time at UNB, I worked with Dr. Daniel Rea to explore the effects of personalities and backstories for social robots on the human-robot interaction.</p>
          </div>
        </Section>
      ),
    },
    {
      key: "hobbies",
      component: (
        <Section name="Hobbies">
          <div className="grid grid-cols-1 gap-4">
            <p>In my free time, I enjoy reading, hiking, and playing the guitar. You may even find me running when the weather is nice, or skiiing in the wintertime. I'm also an avid music listener and find that sharing playlists can be a great icebreaker! Here's a playlist containing some of my favourite songs.</p>
            <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/playlist/6sQg6TuLp3WXulnJXKt0KT?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </Section>
      ),
    },
  ]), []);

  return (
    <Page
      name="About Me"
      sections={sections}
    />
  );
}
