"use client";

import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "+254704687138"; // Your WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    
    // Open the WhatsApp URL in a new tab
    window.open(url, "_blank");
    
    // Set the form as submitted
    setIsSubmitted(true);
  };

  return (
    <div id="contact" className="responsive">
      <SectionTitle title="Contact Us" />
      <div className="section-padding">
        <p>Let us know how we can assist you.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-4">
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <textarea
            className="input"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required
          ></textarea>
          <div className="inline-flex justify-center">
            {!isSubmitted && (
              <Button variant="secondary" type="submit">
                Send to WhatsApp
              </Button>
            )}
          </div>
        </form>
        {isSubmitted && (
          <p className="text-center text-green-600 mt-4">
            Message sent!
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
