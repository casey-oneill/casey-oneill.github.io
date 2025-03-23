import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import React, { useMemo } from "react";
import { Download } from "react-feather";

export default function Projects() {
  const sections = useMemo(() => ([
    {
      key: "publications",
      component: (
        <Section name="Publications">
          <div className="grid grid-cols-1 gap-4">
            {data.projects.publications.map((item) => (
              <div key={item.name}>
                <p className="font-medium text-accent">
                  {item.title}
                </p>
                <p className="font-medium mb-2">
                  {item.publication}
                </p>
                <p className="mb-2">
                  {item.authors}
                </p>
              </div>
            ))}
          </div>
        </Section>
      ),
    },
    {
      key: 'coursework',
      component: (
        <Section name="Coursework">
          <div className="grid grid-cols-1 gap-4">
            {data.projects.coursework.map((item) => (
              <div key={item.name}>
                <p className="font-medium text-accent">
                  {item.title}
                </p>
                <p className="font-medium mb-2">
                  {item.course}
                </p>
                <p className="mb-2">
                  {item.authors}
                </p>
                <a href={item.file} download={item.filename} target="_blank" className="text-dark dark:text-light inline-block">
                  <Download />
                </a>
              </div>
            ))}
          </div>
        </Section>
      ),
    },
  ]), []);

  return (
    <Page name="Projects" sections={sections} />
  );
}
