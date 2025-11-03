import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    // Replace these with your EmailJS credentials
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )

      .then(
        (result) => {
          setSent(true);
          setLoading(false);
          form.current.reset();
        },
        (error) => {
          console.error(error);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-24"
    >
      <motion.h2
        className="text-4xl font-bold mb-12 text-blue-400"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        <motion.div
          className="flex flex-col justify-center bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-blue-300 mb-6">
            Let’s Connect 🚀
          </h3>
          <p className="text-gray-300 mb-6">
            Have a project in mind or just want to say hello? Drop me a message
            — I’ll get back to you as soon as possible.
          </p>
          <div className="space-y-4 text-gray-300">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400" />{" "}
              <span>tarunsaxena111162@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-blue-400" />{" "}
              <span>+91 9540042204</span>
            </div>
            <div className="flex items-center gap-3">
              <FaLinkedin className="text-blue-400" />{" "}
              <a
                href="https://www.linkedin.com/in/tarun-saxena-980b86239/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/tarunsaxena
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaGithub className="text-blue-400" />{" "}
              <a
                href="https://github.com/Tarunsaxena177"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                github.com/tarunsaxena
              </a>
            </div>
          </div>
        </motion.div>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] backdrop-blur-md rounded-2xl p-8 shadow-lg flex flex-col space-y-5"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-gray-200 placeholder-gray-500 transition-all"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-gray-200 placeholder-gray-500 transition-all"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="bg-transparent border-b border-gray-600 focus:border-blue-500 outline-none py-3 text-gray-200 placeholder-gray-500 transition-all"
          ></textarea>
          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 shadow-lg"
            }`}
          >
            {loading ? "Sending..." : sent ? "Message Sent!" : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
