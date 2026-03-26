"use client";

import { useState } from "react";
import { useTranslation } from "../../context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

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
    console.log("Form submitted:", formData);
    setSubmitted(true);
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
    <section className="relative min-h-screen px-4 sm:px-6 py-12 overflow-hidden">
      <Image
        src="/assets/contact.png"
        alt="Contact"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" aria-hidden />

      <div className="relative z-10 max-w-8xl mx-auto flex justify-center md:justify-end">
        <div className="w-full max-w-2xl bg-stone-50/92 backdrop-blur-md border border-stone-200 rounded-2xl p-7 sm:p-8 md:p-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-[#EFBF04]">
            {t.contact?.heading || "Contact Us"}
          </h2>
          <p className="text-stone-600 mb-8">
            {t.contact?.intro || "Get in touch with us today"}
          </p>

          {submitted ? (
            <div className="text-center py-12 bg-[#EFBF04]/10 rounded-2xl border border-[#EFBF04]/30">
              <p className="text-[#EFBF04] text-lg font-semibold">
                Thank you! Your message has been sent successfully.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700">
                  Email address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700">
                  Phone number:
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400 resize-y"
                  placeholder="Your message here..."
                />
              </div>

              <div className="border-t border-stone-200 pt-5">
                <p className="text-sm text-stone-600 mb-3">
                  Do you Agree to receive text messages from{" "}
                  <strong>Origen Restaurant Consulting</strong> sent from{" "}
                  <strong>(888) 123-4567</strong> Message frequency varies and
                  may include (Type of message content e.g. Appointment reminders,
                  service or order information, promotional messages, etc.) Message
                  and data rates may apply. Reply STOP at any time to end or
                  unsubscribe. For assistance, reply HELP or contact support at
                  (888) 123-4567
                </p>

                <div className="space-y-2">
                  <label className="flex items-center text-sm text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="agreeToTexts"
                      checked={formData.agreeToTexts}
                      onChange={handleChange}
                      className="w-4 h-4 mr-3 rounded border-stone-300 text-[#EFBF04] focus:ring-[#EFBF04] cursor-pointer"
                    />
                    Yes, I agree to receive text messages from Origen Restaurant Consulting sent
                    from (888) 123-4567
                  </label>

                  <label className="flex items-center text-sm text-stone-700 cursor-pointer">
                    <input
                      type="checkbox"
                      name="declineTexts"
                      checked={formData.declineTexts}
                      onChange={handleChange}
                      className="w-4 h-4 mr-3 rounded border-stone-300 text-[#EFBF04] focus:ring-[#EFBF04] cursor-pointer"
                    />
                    No, I do not want to receive text messages from Origen Restaurant Consulting
                  </label>
                </div>
              </div>

              <div className="text-sm text-stone-600">
                See our{" "}
                <Link
                  href="/privacy"
                  className="text-[#EFBF04] hover:underline font-semibold"
                >
                  Privacy Policy
                </Link>{" "}
                for details on how we handle your information
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer bg-[#EFBF04] text-white font-semibold py-3.5 rounded-xl hover:bg-[#FFA800] transition-colors focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
