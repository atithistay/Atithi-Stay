// components/about/AboutFAQ.js
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AboutFAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Atithi Stay and how does it work?",
      answer:
        "Atithi Stay is a specialized platform that connects individuals looking for PG (Paying Guest) accommodations with verified property owners. Our platform allows you to search for PGs based on location, budget, amenities, and other preferences. You can browse listings, view photos, read reviews, take virtual tours, and even book accommodations directly through our platform.",
    },
    {
      question: "Are all PG accommodations on your platform verified?",
      answer:
        "Yes, all PG accommodations listed on Atithi Stay undergo a thorough verification process. Our team personally visits and inspects each property to ensure it meets our quality standards and that the listed amenities and facilities are accurately represented. This gives our users confidence in making their accommodation decisions.",
    },
    // {
    //   question: "How do I book a PG through your platform?",
    //   answer:
    //     "Booking a PG through Atithi Stay is simple. Once you find a PG that meets your requirements, you can either schedule a visit to see the property in person or book it directly through our platform. For direct bookings, you'll need to create an account, provide your details, select your move-in date, and make the payment. You'll receive an instant confirmation, and the property owner will be notified of your booking.",
    // },
    // {
    //   question: "What is the cancellation policy for bookings?",
    //   answer:
    //     "Cancellation policies vary depending on the property and booking type. Each PG listing clearly mentions its specific cancellation policy, which typically includes the timeframe for cancellation and any applicable refund percentages. We encourage you to review the cancellation policy before making a booking. For any assistance with cancellations, our customer support team is available 24/7.",
    // },
    // {
    //   question: "Can I visit a PG before booking?",
    //   answer:
    //     "Absolutely! We encourage users to visit PGs before making a booking decision. You can schedule a visit directly through our platform by clicking on the 'Schedule Visit' button on the property listing page. You'll be able to select a convenient date and time, and the property owner or manager will be notified. Additionally, many of our listings offer virtual tours to give you a preliminary idea of the space.",
    // },
    {
      question: "Are there any hidden fees when booking through Atithi Stay?",
      answer:
        "No, there are no hidden fees on Atithi Stay. We believe in complete transparency, and all applicable fees and charges are clearly mentioned on the property listing page and during the booking process. This includes the monthly rent, security deposit, maintenance charges, and any service fees that might apply. What you see is what you pay.",
    },
    {
      question:
        "How does Atithi Stay ensure the safety and security of its users?",
      answer:
        "Safety and security are our top priorities at Atithi Stay. All property owners and PG operators are verified through a stringent process that includes ID verification and background checks. We also encourage and display genuine reviews from previous residents to help you make informed decisions. Additionally, all payments made through our platform are secure and protected by advanced encryption technology.",
    },
    // {
    //   question: "Can property owners list their PGs on your platform?",
    //   answer:
    //     "Yes, property owners can list their PGs on our platform by creating a 'Property Owner' account and following the listing process. Our team will verify the property before it goes live on the platform. We offer various listing packages to suit different needs and budgets. For more details, please visit our 'List Your Property' page or contact our support team.",
    // },
  ];

  return (
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our services and how
            Atithi Stay can help you find the perfect accommodation.
          </p>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mt-4"></div>
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors hover:cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.question}
                </span>
                <span
                  className={`flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-gray-500 transition-transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="p-5 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
