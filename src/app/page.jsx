import Clients from "@/components/Clients";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Make your business<br />
          faster.<br />
          streamlined.<br />
          modern.<br />
          agile.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          We work with leading organisations across Western Australia to improve business processes and create custom, state-of-the-art software.
          </p>
        </FadeIn>
      </Container>
      <Clients />
{/*       <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials> */}
      <Services />
      <ContactSection />
    </main>
  );
}
