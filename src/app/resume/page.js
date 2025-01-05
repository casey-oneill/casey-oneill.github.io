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
          <div className="grid grid-cols-1 gap-4">
            {data.resume.education.map((item) => (
              <div key={item.program}>
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
              </div>
            ))}
          </div>
        </Section>
      ),
    },
    {
      key: "experience",
      component: (
        <Section name="Work Experience">
          <div className="grid grid-cols-1 gap-4">
            {data.resume.experience.map((item) => (
              <div key={`${item.date}-${item.company}-${item.position}`}>
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
              </div>
            ))}
          </div>
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
