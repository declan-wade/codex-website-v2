import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import Cultures from "@/components/Cultures";
import PageIntro from "@/components/PageIntro";
import { StatList, StatListItem } from "@/components/StatList";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          We believe that our strength lies in our collaborative approach, which
          puts our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Codex Group was founded with a clear mission: to deliver right-sized digital solutions that drive real business value for small and medium enterprises. We believe in transparent pricing, practical solutions, and long-term partnerships. By focusing on what truly matters to your business, we eliminate unnecessary complexity and deliver technology that works for you, not against you.
          </p>
          <p>
            We are a team of experienced technology professionals dedicated to the unique challenges of small and medium businesses. By staying at the forefront of digital innovation while maintaining practical focus, we help organizations leverage the right technology to improve efficiency, enhance performance, and achieve sustainable growth.
          </p>
        </div>
      </PageIntro>
      {/* <Container className="mt-16">
        <StatList>
          <StatListItem value="35" label="Underpaid employees" />
          <StatListItem value="52" label="Placated clients" />
          <StatListItem value="$25M" label="Invoices billed" />
        </StatList>
      </Container> */}
      <Cultures />
      <ContactSection />
    </>
  );
};

export default AboutPage;
