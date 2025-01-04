import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import { useMemo } from "react";

export default function Resume() {
  const sections = useMemo(() => ([
    {
      key: "education",
      component: (
        <Section name="Education">
          <ul className="list-none">
            {data.resume.education.map((item) => (
              <li key={item.program} className="pt-4">
                <p className="font-medium text-accent">
                  {item.date}
                </p>
                <p className="font-medium mb-2">
                  {item.institution}
                </p>
                <p>
                  {item.program}
                </p>
                <p className="mb-2">
                  {item.location}
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
                <p className="font-medium text-accent">
                  {item.date}
                </p>
                <p className="font-medium mb-2">
                  {item.position}
                </p>
                <p>
                  {item.company}
                </p>
                <p className="mb-2">
                  {item.location}
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
