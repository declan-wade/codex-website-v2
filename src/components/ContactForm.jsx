"use client"
import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";
import { useRouter } from "next/navigation";

const ContactForm = () => {
  const router = useRouter()
  const [name, setName] = React.useState("Not provided")
  const [email, setEmail] = React.useState("Not provided")
  const [phone, setPhone] = React.useState("Not provided")
  const [company, setCompany] = React.useState("Not provided")
  const [message, setMessage] = React.useState("Not provided")
  const [isLoading, setIsLoading] = React.useState(false)

  async function submit(){
    setIsLoading(true)
    try {
        const response = await fetch('https://bizhub.codexgroup.com.au/api/enquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            clientName: company,
            contactName: name,
            contactEmail: email,
            contactPhone: phone,
            leadMessage: message
          })
        });
        const result = await response.json();
        console.log(result)
        router.push("/thanks")
      } catch (error) {
        alert('Error:', error);
      }
  }

  return (
    <FadeIn>
      <form onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission
        submit();
      }}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" onChange={(e)=>setName(e.target.value)} />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            onChange={(e)=>setEmail(e.target.value)}
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
            onChange={(e)=>setCompany(e.target.value)}
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" onChange={(e)=>setPhone(e.target.value)} />
          <TextInput label="Message" name="message" onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <Button type="submit" className="mt-10" disabled={isLoading}>
          {isLoading ? (
            <span className="flex items-center">
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Loading...
            </span>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
