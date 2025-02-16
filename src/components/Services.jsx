import React from "react";
import SectionIntro from "./SectionIntro";
import Container from "./Container";
import FadeIn from "./FadeIn";
import StylizedImage from "./StylizedImage";
import imageLaptop from "../images/laptop.jpg";
import List, { ListItem } from "./List";

const Services = () => {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        We are the creators of two advanced digital platforms, EasyAssess and RosterMaster. But we are passionate about creating tailored, bespoke solutions for your business needs.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          {/* List item */}
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="EasyAssess">
            Designed for Local Government teams, EasyAssess is our flagship platform for digital development assessment processes.
              everywhere. <a className="text-gray-400" href="https://easy-assess.com.au">Learn More</a>
            </ListItem>
            <ListItem title="RosterMaster">
            Simple yet powerful, RosterMaster is a state-of-the-art rostering solution for teams of all sizes. 
            <a className="text-gray-400" href="https://roster-master.vercel.app"> Learn More</a>
            </ListItem>
            <ListItem title="Application development">
              We have strong experiance using the latest web technologies and
              app frameworks, like React and Next JS.
            </ListItem>
            <ListItem title="Advisory and consulting">
              Given our unique experiences in the Government sector, we can help plan and advise on your digital transformation journey.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  );
};

export default Services;
