import { Button } from "@/components/atoms";
import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import Image from "next/image";
import React, { useMemo } from "react";

export default function Projects() {
  const sections = useMemo(() => ([
    {
      key: "software",
      component: (
        <Section name="Software">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {data.projects.software.map((item) => (
              <React.Fragment key={item.name}>
                <Image
                  src={item.image}
                  width={200}
                  height={200}
                  alt={item.name}
                  className="col-span-1 md:col-span-3 bg-primary w-full rounded-lg border-2 border-secondary dark:border-primary"
                />
                <div key={item.name} className="col-span-1 md:col-span-9">
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
              </React.Fragment>
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
                <p className="mb-2">
                  {item.description}
                </p>
                <a href={item.file} download={item.filename} target="_blank">
                  <Button>PDF</Button>
                </a>
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
