import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import { useMemo } from "react";

export default function About() {
  const sections = useMemo(() => ([
    {
      key: "education",
      component: (
        <Section name="Education">
          <ul className="list-none">
            {data.resume.education.map((item) => (
              <li key={item.program} className="pt-4">
                <p className="font-medium text-base md:text-lg text-accent">
                  {item.date}
                </p>
                <p className="font-medium text-base md:text-lg">
                  {item.institution}
                </p>
                <p>
                  <i>
                    {item.location}
                  </i>
                </p>
                <p>
                  {item.program}
                </p>
                <p>
                  Cumulative GPA: {item.cgpa}
                </p>
              </li>
            ))}
          </ul>
        </Section>
      ),
    },
    {
      key: "experience",
      component: (
        <Section name="Work Experience">
          <ul className="list-none">
            {data.resume.experience.map((item) => (
              <li key={item.program} className="pt-4">
                <p className="font-medium text-base md:text-lg text-accent">
                  {item.date}
                </p>
                <p className="font-medium text-base md:text-lg">
                  {item.position} at {item.company}
                </p>
                <p>
                  <i>
                    {item.location}
                  </i>
                </p>
              </li>
            ))}
          </ul>
        </Section>
      ),
    },
  ]), []);

  return (
    <Page
      name="Resume"
      sections={sections}
    />
  );
}
