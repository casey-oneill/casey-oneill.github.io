import { Link } from "@/components/atoms";
import { Section } from "@/components/molecules";
import { Page } from "@/components/templates";
import data from "@/data";
import React, { useMemo } from "react";
import { Download } from "react-feather";

export default function Projects() {
  const sections = useMemo(() => ([
    {
      key: "participants",
      component: (
        <Section name="Call for Research Participants">
          <p className="font-medium text-accent">
            The Use of Voice Agents as Running Coaches
          </p>
          <p className="font-medium">
            Participation on campus at the University of New Brunswick in Fredericton, NB
          </p>
          <p className="font-medium mb-2">
            Sign-up online: <Link href="https://uwaterloo.ca1.qualtrics.com/jfe/form/SV_ac7yyXH68pHM6SW">click here to view the sign-up form</Link>
          </p>
          <p className="mb-2">
            We are recruiting participants for a user study on the use of voice agents as running coaches. Participation includes:
          </p>
          <ol className="list-decimal list-inside ml-4 mb-2">
            <li>1-hour in-person session to fill out a demographics survey, install the system onto your device, and complete a training session with the system.</li>
            <li>3-week period in which you will complete at least 6 running sessions.</li>
            <li>1-hour in-person debriefing session to share your experience.</li>
          </ol>
          <p className="mb-2">
            In-person sessions will be held on campus at the University of New Brunswick in Fredericton. Participants will receive up to a $50 gift card as a token of appreciation.
          </p>
          <p className="mb-2">
            Basic eligibility criteria include:
          </p>
          <ul className="list-disc list-inside ml-4 mb-2">
            <li>You are over 18.</li>
            <li>You are comfortable exercising (a mix of running and walking) outdoors for at least 12 minutes without stopping.</li>
            <li>You own a smartphone and headphones, and can stream and listen to audio during your outdoor runs.</li>
          </ul>
          <p className="mb-2">
            If you are interested, please fill out this short sign-up form to help us assess if you qualify for our study: <Link href="https://uwaterloo.ca1.qualtrics.com/jfe/form/SV_ac7yyXH68pHM6SW">click here to view the sign-up form</Link>. If you are eligible, we will reach out to schedule a time. If you have any questions, please contact the student investigator by email at (casey.oneill@uwaterloo.ca).
          </p>
          <p className="mb-2">
            This study has been reviewed and received ethics clearance by the University of Waterloo Research Ethics Committee (ORE#46929) and by the University of New Brunswick Research Ethics Board (REB#2025-077).
          </p>
          <p className="mb-2">
            For more information:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Edith Law (Principal Investigator)</li>
            <li className="list-none pl-4">edith.law@uwaterloo.ca</li>
            <li>Casey O'Neill (Student Investigator)</li>
            <li className="list-none pl-4">casey.oneill@uwaterloo.ca</li>
            <li>Scott Bateman (Co-Investigator)</li>
            <li className="list-none pl-4">scottb@unb.ca</li>
          </ul>
        </Section>
      ),
    },
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
