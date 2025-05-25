"use client";

import { useState } from "react";

export default function ConnectUsForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    occupancy: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "Thank you! Your informations have been submitted successfully."
        );
        await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        setFormData({
          name: "",
          email: "",
          mobile: "",
          occupancy: "",
        });
      } else {
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Network error. Please try again.");

      const updatedFormData = {
        ...formData,
        errorOccurred: "this user had some error submitting the form",
      };

      await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedFormData),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="connectus"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Connect With Us
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg">
            Let us know what type of PG are you looking for.
          </p>
        </div>

        {message && (
          <div
            className={`p-4 rounded-xl ${
              message.includes("successfully")
                ? "bg-green-100/80 text-green-800 border border-green-200"
                : "bg-red-100/80 text-red-800 border border-red-200"
            } backdrop-blur-sm`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-semibold text-gray-700 pl-1"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your full name"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-semibold text-gray-700 pl-1"
            >
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your email address"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="mobile"
              className="text-sm font-semibold text-gray-700 pl-1"
            >
              Mobile *
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your mobile number"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="occupancy"
              className="text-sm font-semibold text-gray-700 pl-1"
            >
              Interested in Occupancy
            </label>
            <select
              id="occupancy"
              name="occupancy"
              value={formData.occupancy}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
            >
              <option value="">Select Occupancy</option>
              <option value="single">Single</option>
              <option value="sharing">Sharing</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] transition-all duration-200 mt-6"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <span className="animate-spin mr-2">⏳</span>
                Submitting...
              </span>
            ) : (
              "Get Connected"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
