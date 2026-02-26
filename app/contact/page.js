"use client";

import { useState } from "react";
import { useTranslation } from "../../context/LanguageContext";

export default function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToTexts: false,
    declineTexts: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agreeToTexts: false,
        declineTexts: false,
      });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section className="max-w-2xl mx-auto py-12 px-6 bg-white text-black">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-black">
        {t.contact?.heading || "Contact Us"}
      </h2>
      <p className="text-gray-700 mb-8">
        {t.contact?.intro || "Get in touch with us today"}
      </p>

      {submitted ? (
        <div className="text-center py-12 bg-green-50 rounded-lg">
          <p className="text-green-700 text-lg font-semibold">
            Thank you! Your message has been sent successfully.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Name:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#ffc000]"
              placeholder="Your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Email address:
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#ffc000]"
              placeholder="your@email.com"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Phone number:
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#ffc000]"
              placeholder="(123) 456-7890"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Message:
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="6"
              className="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-[#ffc000]"
              placeholder="Your message here..."
            />
          </div>

          {/* Text Message Consent */}
          <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-700 mb-3">
              Do you Agree to receive text messages from{" "}
              <strong>[Company Name]</strong> sent from{" "}
              <strong>[Company Phone#]</strong>? Message frequency varies and
              may include (Type of message content e.g. Appointment reminders,
              service or order information, promotional messages, etc.) Message
              and data rates may apply. Reply STOP at any time to end or
              unsubscribe. For assistance, reply HELP or contact support at
              (8xx-xxx-xxxx)
            </p>

            <div className="space-y-2">
              <label className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  name="agreeToTexts"
                  checked={formData.agreeToTexts}
                  onChange={handleChange}
                  className="w-4 h-4 mr-3 cursor-pointer"
                />
                Yes, I agree to receive text messages from [Business Name] sent
                from (888-xxx-xxxx)
              </label>

              <label className="flex items-center text-sm text-gray-800">
                <input
                  type="checkbox"
                  name="declineTexts"
                  checked={formData.declineTexts}
                  onChange={handleChange}
                  className="w-4 h-4 mr-3 cursor-pointer"
                />
                No, I do not want to receive text messages from [Business name]
              </label>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="text-sm text-gray-700">
            See our{" "}
            <a
              href="/privacy"
              className="text-[#ffc000] hover:underline font-semibold"
            >
              Privacy Policy
            </a>{" "}
            for details on how we handle your information
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded transition duration-200"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
}
