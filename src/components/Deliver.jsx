import React from "react";
import Section from "./Section";
import imageMeeting from "@/images/meeting.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Quality and reliability are at the core of our delivery process. We implement comprehensive testing protocols and follow a structured deployment approach to ensure smooth transitions into production.
        </p>
        <p>
          Our commitment extends beyond launch day. We provide thorough documentation, knowledge transfer, and ongoing support to ensure your team is equipped for success. Our maintenance packages are customized to your needs, ensuring your solution continues to deliver value.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this delivery
      </h3>
      <List>
        <ListItem title="Testing">
          Comprehensive testing and QA
        </ListItem>
        <ListItem title="Infrastructure">
          Enterprise-grade infrastructure setup
        </ListItem>
        <ListItem title="Training">
          Team training and knowledge transfer
        </ListItem>
        <ListItem title="Support">
          Post-launch support and maintenance
        </ListItem>
        <ListItem title="Upkeep">
          Regular performance reviews and optimization recommendations
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
