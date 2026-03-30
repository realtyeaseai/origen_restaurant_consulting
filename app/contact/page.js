"use client";

import { useState } from "react";
import { useTranslation } from "../../context/LanguageContext";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  const { t } = useTranslation();
  const serviceOptions = [
    t.services.oath.title,
    t.services.audit.title,
    t.services.improvement.title,
    t.services.assurance.title,
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreeToTexts: false,
    selectedServices: [],
    serviceOther: false,
    serviceOtherText: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleServiceToggle = (serviceName) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceName);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== serviceName)
          : [...prev.selectedServices, serviceName],
      };
    });
  };

  const handleOtherToggle = (checked) => {
    setFormData((prev) => ({
      ...prev,
      serviceOther: checked,
      serviceOtherText: checked ? prev.serviceOtherText : "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);
      setSubmitError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          serviceOtherText: formData.serviceOther ? formData.serviceOtherText : "",
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || "Unable to submit the form.");
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        agreeToTexts: false,
        selectedServices: [],
        serviceOther: false,
        serviceOtherText: "",
      });
    } catch (error) {
      setSubmitError(
        error?.message || "Something went wrong while sending your message.",
      );
    } finally {
      setSubmitting(false);
    }
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
              {submitError && (
                <div className="rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {submitError}
                </div>
              )}
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

              <div className="border-t border-stone-200 pt-5">
                <label className="block text-sm font-semibold mb-3 text-stone-700">
                  Services interested in:
                </label>
                <div className="grid grid-cols-2 gap-x-3 gap-y-2">
                  {serviceOptions.map((serviceName) => (
                    <label
                      key={serviceName}
                      className="flex items-start gap-2 text-sm text-stone-700 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.selectedServices.includes(serviceName)}
                        onChange={() => handleServiceToggle(serviceName)}
                        className="mt-0.5 w-4 h-4 shrink-0 rounded border-stone-300 text-[#EFBF04] focus:ring-[#EFBF04] cursor-pointer"
                      />
                      <span className="leading-snug">{serviceName}</span>
                    </label>
                  ))}

                  <label className="flex items-center gap-2 text-sm text-stone-700 cursor-pointer col-span-2">
                    <input
                      type="checkbox"
                      checked={formData.serviceOther}
                      onChange={(e) => handleOtherToggle(e.target.checked)}
                      className="w-4 h-4 shrink-0 rounded border-stone-300 text-[#EFBF04] focus:ring-[#EFBF04] cursor-pointer"
                    />
                    Other
                  </label>
                </div>

                {formData.serviceOther && (
                  <input
                    type="text"
                    name="serviceOtherText"
                    value={formData.serviceOtherText}
                    onChange={handleChange}
                    placeholder="Please specify other service"
                    className="mt-3 w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-stone-700">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="2"
                  className="w-full border border-stone-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:border-[#EFBF04] bg-white text-stone-900 placeholder:text-stone-400 resize-y"
                  placeholder="Your message here..."
                />
              </div>

              <div className="border-t border-stone-200 pt-5">
                <p className="text-sm text-stone-600 mb-3">
                  Do you Agree to receive text messages from{" "}
                  <strong>Origen Restaurant Consulting</strong> sent from{" "}
                  <strong>+1 (917) 544-4218</strong> Message frequency varies and
                  may include (Type of message content e.g. Appointment reminders,
                  service or order information, promotional messages, etc.) Message
                  and data rates may apply. Reply STOP at any time to end or
                  unsubscribe. For assistance, reply HELP or contact support at
                  +1 (917) 544-4218
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
                    from +1 (917) 544-4218
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
                disabled={submitting}
                className="w-full cursor-pointer bg-[#EFBF04] text-white font-semibold py-3.5 rounded-xl hover:bg-[#FFA800] disabled:opacity-70 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-[#EFBF04] focus:ring-offset-2"
              >
                {submitting ? "Sending..." : "Submit"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
