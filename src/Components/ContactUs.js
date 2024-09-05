import React, { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./EmailModal";
const ContactUsSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          setModalContent("Email successfully sent!");
          setModalOpen(true);
          setForm({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setModalContent("Failed to send email. Please try again.");
          setModalOpen(true);
        }
      );
  };
  console.log(
    "process.env.REACT_APP_EMAILJS_SERVICE_ID",
    process.env.REACT_APP_EMAILJS_SERVICE_ID
  );

  return (
    <div className="bg-blue-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 text-blue-500">
        Contact us
      </h2>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="p-5">
            <h2 className="text-gray-700 text-lg font-semibold">Contact Us</h2>
            <form
              className="max-w-md mx-auto bg-white rounded-lg p-6"
              onSubmit={sendEmail}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                onChange={handleChange}
                value={form.name}
                className="w-full h-12 px-4 bg-gray-50 rounded border focus:outline-none focus:border-blue-500 mt-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                onChange={handleChange}
                value={form.email}
                className="w-full h-12 px-4 bg-gray-50 rounded border focus:outline-none focus:border-blue-500 mt-4"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                value={form.phone}
                className="w-full h-12 px-4 bg-gray-50 rounded border focus:outline-none focus:border-blue-500 mt-4"
              />
              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                onChange={handleChange}
                value={form.message}
                className="w-full px-4 py-2 bg-gray-50 rounded border focus:outline-none focus:border-blue-500 mt-4"
              ></textarea>
              <button
                type="submit"
                className="w-full h-12 text-white bg-blue-500 hover:bg-blue-600 mt-2"
              >
                Send Message
              </button>
            </form>
            <Modal
              isOpen={isModalOpen}
              close={() => setModalOpen(false)}
              title="Message Status"
            >
              <p>{modalContent}</p>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsSection;
