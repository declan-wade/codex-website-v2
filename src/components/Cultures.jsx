import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import { GridList, GridListItem } from "./GridList";

const Cultures = () => {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title=" "
        invert
      >
        <p>
          We believe great work comes from empowered, balanced teams. Our culture combines professional excellence with personal well-being, creating an environment where innovation thrives and individuals grow.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Community" invert>
            Our collaborative environment fosters long-term relationships and shared success. We celebrate diverse perspectives and support each team member’s professional development through mentorship, learning opportunities, and clear career pathways.
          </GridListItem>
          <GridListItem title="Flexibility" invert>
            We embrace modern work practices that respect work-life balance. Our focus is on outcomes and impact, giving our team the autonomy to work in ways that best support their productivity and personal commitments.
          </GridListItem>
          <GridListItem title="Support" invert>
            We actively cultivate an environment of open communication and mutual support. Regular check-ins, team events, and professional development opportunities ensure every team member feels valued and heard.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  );
};

export default Cultures;
