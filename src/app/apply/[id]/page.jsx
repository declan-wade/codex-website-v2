import ApplyForm from "@/components/ApplyForm";
import Container from "@/components/Container";
import PageIntro from "@/components/PageIntro";

const ContactPage = ({ params }) => {
  return (
    <>
      <PageIntro eyebrow="Apply" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ApplyForm params={params} />
        </div>
      </Container>
    </>
  );
};

export default ContactPage;
