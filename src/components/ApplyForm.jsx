"use client"
import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import Button from "./Button";

const ApplyForm = (params) => {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [phone, setPhone] = React.useState("")
    const [attachment, setAttachment] = React.useState("")

    async function handleSubmit(e){
        e.preventDefault(); // Prevent default form submission
        console.log({name: name, email: email, phone: phone, id:params.params.id })
        const response = await fetch('https://codex-group-support.vercel.app/api/apply', {
            method: 'POST',
            body: {name: name, email: email, phone: phone, id:params.params.id },
        });
        const payload = await response.json()
        console.log(payload)
    }

    const handleUpload = async (file) => {
      try {
          const formData = new FormData();
          const fileId = crypto.randomUUID();
          formData.append('file', file);
          formData.append('fileName', fileId);

          const response = await fetch('http://localhost:3001/api/s3-upload', {
              method: 'POST',
              body: formData,
          });

          if (!response.ok) {
              throw new Error('Upload failed');
          }

          const data = await response.json();
          return { key: data.fileName, fileId };
      } catch (error) {
          console.error('Upload error:', error);
          message.error('Failed to upload file');
          return null;
      }
  };

  return (
    <FadeIn>
      <form onSubmit={handleSubmit}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Apply Now
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
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel"  onChange={(e)=>setPhone(e.target.value)} />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Attach cover letter and resume</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <input type="file" name="attachment" onChange={(e)=>handleUpload(e.target.value)} />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Submit
      </Button>
      </form>
    </FadeIn>
  );
};

export default ApplyForm;
