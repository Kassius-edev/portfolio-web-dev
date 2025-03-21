import React from "react";
import { FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      e.target,
      import.meta.env.VITE_PUBLIC_KEY
    )
    .then(
      () => {
        alert("Your email has been submitted!");
        e.target.reset();
      },
      (error) => {
        console.error("Failed to send email:", error);
        alert("Failed to send email. Please try again.");
      }
    );
};

function Contact() {
  return (
    <div id="contact" className="bg-black text-white py-20">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center  mb-12">Contact Me</h2>
        <div className="flex flex-col items-center md:flex-row  md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Let's Talk
            </h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:kawan.kassius@gmail.com"
                className="hover:underline"
              >
                kawan.kassius@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <IoLogoWhatsapp className="inline-block text-green-400 mr-2"></IoLogoWhatsapp>
              <span>+55 89994678203</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Paulistana-PI, Brasil</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form action="" onSubmit={sendEmail} className="space-x-4">
              <div>
                <label htmlFor="nameSender" className="block mb-2">
                  Your Name
                </label>
                <input
                  name="name"
                  id="nameSender"
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="emailFrom" className="block mb-2 mt-2">
                  Email
                </label>
                <input
                  name="email_from"
                  id="emailFrom"
                  type="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="messageFrom" className="block mb-2 mt-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="messageFrom"
                  type="text"
                  rows="5"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-l-green-400 focus:border-t-green-400 focus:border-r-blue-500 focus:border-b-blue-500"
                  placeholder="Enter your message"
                />
              </div>
              <button
                type="submit"
                variant="contained"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full transform transition-transform duration-300 hover:scale-105 px-8 py-2 mt-2"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
