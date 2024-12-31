import { Section } from "@/components";
import data from "@/data";

export default function About() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-display font-black text-2xl md:text-3xl">
        Resume
      </h1>
      <Section name="Education">
        <ul className="list-disc">
          {data.resume.education.map((item) => (
            <li key={item.program} className="pt-4">
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
    </div>
  );
}
