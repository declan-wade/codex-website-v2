"use client"
import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

const ContactForm = () => {
  const [name, setName] = React.useState("Not provided")
  const [email, setEmail] = React.useState("Not provided")
  const [phone, setPhone] = React.useState("Not provided")
  const [company, setCompany] = React.useState("Not provided")
  const [message, setMessage] = React.useState("Not provided")

  async function submit(){
    try {
        const response = await fetch('https://codex-group-support.vercel.app/api/enquiry', {
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
        return result;
      } catch (error) {
        console.error('Error:', error);
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
        <Button type="submit" className="mt-10">
          Submit
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
