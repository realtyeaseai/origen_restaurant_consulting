import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Origen Restaurant Consulting",
  description: "Privacy policy for Origen Restaurant Consulting.",
};

export default function PrivacyPage() {
  return (
    <section className="relative min-h-screen py-12 px-4 sm:px-6 overflow-hidden">
      <Image
        src="/assets/privacy.png"
        alt="Privacy background"
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/35" aria-hidden />

      <div className="relative z-10 max-w-4xl mx-auto bg-white/95 rounded-2xl border border-stone-200 p-7 sm:p-10 backdrop-blur-xs">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#EFBF04] mb-4">
          Privacy Policy
        </h1>
        <p className="text-stone-600 mb-8">
          Last updated: March 2026
        </p>

        <div className="space-y-6 text-stone-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Information We Collect
            </h2>
            <p>
              When you submit our contact form, we may collect your name, email
              address, phone number, message details, and communication consent
              preferences.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              How We Use Your Information
            </h2>
            <p>
              We use the information you provide to respond to your inquiries,
              provide consulting-related communication, and improve our customer
              service experience.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Text Message Consent
            </h2>
            <p>
              If you choose to opt in to text messaging, we may send messages
              related to appointments, services, and updates. Message frequency
              varies. Message and data rates may apply. You can reply STOP to
              unsubscribe at any time and HELP for assistance.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Data Sharing
            </h2>
            <p>
              We do not sell your personal information. We may use trusted
              third-party providers (such as email and communication services)
              only to operate our business and communicate with you.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Data Security
            </h2>
            <p>
              We use reasonable administrative and technical safeguards to
              protect your information. However, no method of transmission over
              the Internet is completely secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-stone-900 mb-2">
              Contact Us
            </h2>
            <p>
              For any privacy-related questions, please contact us through the
              contact form on this website.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
