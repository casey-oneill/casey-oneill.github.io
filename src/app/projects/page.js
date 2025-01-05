import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import { useMemo } from "react";
import { GitHub } from "react-feather";

export default function Projects() {
  const sections = useMemo(() => ([
    {
      key: "software",
      component: (
        <Section name="Software">
          <div className="grid grid-cols-1 gap-4">
            {data.projects.software.map((item) => (
              <div key={item.name}>
                <p className="font-medium text-accent">
                  {item.date}
                </p>
                <p className="font-medium mb-2">
                  {item.name}
                </p>
                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ),
    },
    {
      key: "research",
      component: (
        <Section name="Research">
          <div className="grid grid-cols-1 gap-4">
            {data.projects.research.map((item) => (
              <div key={item.name}>
                <p className="font-medium text-accent">
                  {item.date}
                </p>
                <p className="font-medium mb-2">
                  {item.name}
                </p>
                <p>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ),
    }
  ]), []);

  return (
    <Page
      name="Projects"
      sections={sections}
    />
  );
}
