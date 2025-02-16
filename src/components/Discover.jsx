import React from "react";
import Section from "./Section";
import imageWhiteboard from "@/images/whiteboard.jpg";
import { TagList, TagListItem } from "./TagList";

const Discover = () => {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We believe in building deep partnerships with our clients through comprehensive discovery. Our team immerses themselves in your business operations to truly understand your challenges, opportunities, and strategic objectives.
        </p>
        <p>
          Through structured analysis and collaborative workshops, we map your current processes, identify pain points, and uncover opportunities for innovation. This thorough discovery process ensures we develop solutions that deliver real business value.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Strategic business analysis</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Process mapping workshops</TagListItem>
        <TagListItem>Technical architecture review</TagListItem>
        <TagListItem>ROI assessment</TagListItem>
        <TagListItem>Solution prototyping</TagListItem>
      </TagList>
    </Section>
  );
};

export default Discover;
