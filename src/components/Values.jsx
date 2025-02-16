import React from "react";
import GridPattern from "./GridPattern";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Values = () => {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>
      <SectionIntro
        eyebrow="Our values"
        title="Balancing Stability and Innovation"
      >
        <p>
          We believe in leveraging proven technologies while thoughtfully incorporating emerging solutions that deliver real value. Our approach combines established best practices with strategic innovation to create reliable, future-ready solutions.
        </p>
      </SectionIntro>
      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            We pay attention to every detail, from initial design to final deployment. Our thorough quality assurance process ensures consistent, high-quality deliverables that maintain your brand standards and meet your business objectives.
          </GridListItem>
          <GridListItem title="Efficient">
            Our refined processes and extensive experience allow us to deliver projects on time and within budget. We leverage proven patterns and reusable components while customizing solutions to meet your specific needs.
          </GridListItem>
          <GridListItem title="Adaptable">
            Every organization has unique challenges and opportunities. We tailor our approach to align with your business context, adjusting our methodologies to best serve your objectives rather than forcing one-size-fits-all solutions.
          </GridListItem>
          <GridListItem title="Transparent">
            Clear communication is fundamental to our process. We provide regular updates and detailed documentation, ensuring stakeholders understand project progress, decisions, and implications at every stage.
          </GridListItem>
          <GridListItem title="Partnership-Focused">
            We build lasting relationships by delivering consistent value over time. Our ongoing support and proactive maintenance ensure your solutions continue to evolve with your business needs.
          </GridListItem>
          <GridListItem title="Forward-Thinking">
            We actively research and evaluate emerging technologies, selectively incorporating proven innovations that can deliver meaningful business value. Our team maintains current expertise while ensuring solution stability and reliability.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Values;
