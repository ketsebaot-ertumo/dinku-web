// import ContactForm from "../components/ContactForm";
// import OfficeList from "../components/OfficeList";
// import { offices } from "../data/offices";

'use client';

import ContactForm from "@/components/contactUs/ContactForm";
import OfficeList from "@/components/contactUs/OfficeList";
import { useState } from "react";

export interface Office {
  city: string;
  email: string;
  phone: string;
  address: string;
}

export const offices: Office[] = [
  {
    city: "Addis Ababa",
    email: "addisababa@example.com",
    phone: "+251 112 3456",
    address: "123 Broadway, Addis Ababa, Ethiopia"
  },
  {
    city: "Awassa",
    email: "awassa@example.com",
    phone: "+251 46 1234 5678",
    address: "456 Baker Street, Awassa, Ethiopia"
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call API or serverless function
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-orange-50 via-white to-purple-50">
      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-300 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-300 rounded-full opacity-30 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-gray-600 text-lg md:text-xl">We’re here to answer your questions. Contact us today!</p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Dynamic Offices + Map */}
          <div className="flex-1 space-y-8">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Offices</h2>
            <OfficeList offices={offices} />

            {/* Placeholder Map */}
            <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=new+york&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right: Floating Form */}
          <div className="flex-1">
            <ContactForm />
            </div>
        </div>
      </div>
    </div>
  );
}