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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const whatsappNumber = "+254704687138"; // Your WhatsApp number
    const url = `https://wa.me/${whatsappNumber}?text=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(
      email
    )}%0AMessage:%20${encodeURIComponent(message)}`;
    window.open(url, "_blank");
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
          />
          <textarea
            className="input"
            name="message"
            placeholder="Message"
            onChange={handleChange}
            required
          ></textarea>
          <div className="inline-flex justify-center">
            <Button variant="secondary" type="submit">
              Send to WhatsApp
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
