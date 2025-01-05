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
            <p>I'm a second-year master's student at the University of Waterloo. I'm currently completing my master's thesis in addition to working part-time as a software developer.</p>
            <p>My research interests include Human-Computer Interaction, Human-Robot Interaction, and video games. My thesis focuses on how voice agents...</p>
          </div>
        </Section>
      ),
    },
    {
      key: "hobbies",
      component: (
        <Section name="Hobbies">
          <div className="grid grid-cols-1 gap-4">
            <p>When I'm not working, you can find me...</p>
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
