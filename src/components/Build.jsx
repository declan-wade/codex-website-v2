import React from "react";
import Section from "./Section";
import imageLaptop from "@/images/laptop.jpg";
import Blockquote from "./Blockquote";

const Build = () => {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our agile development approach combines technical excellence with transparent communication. We create detailed roadmaps with clear milestones, ensuring you’re involved and informed at every stage.
        </p>
        <p>
          Each project is led by an experienced delivery manager who serves as your primary point of contact, facilitating clear communication between your team and our development experts. We maintain regular check-ins and demos to gather feedback and ensure we’re aligned with your vision.
        </p>
        <p>
          Our developers follow industry best practices, emphasizing code quality, security, and scalability. We leverage our extensive experience while staying current with emerging technologies to deliver optimal solutions.
        </p>
      </div>
      <Blockquote
        author={{ name: "Declan Wade", role: "Managing Director" }}
        className="mt-12"
      >
        I have experienced firsthand the complex challenges organizations face when implementing large-scale digital transformations. These insights drive our approach to every project – ensuring transparent communication, predictable delivery, and measurable business outcomes. Our team’s commitment is to make digital transformation not just successful, but also a clear, well-managed journey for our clients.
      </Blockquote>
    </Section>
  );
};

export default Build;
