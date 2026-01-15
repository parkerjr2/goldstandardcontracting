"use client";

import { useState } from "react";
import { Button } from "./ui/Button";
import { CITIES, SERVICES } from "@/lib/constants";

export function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    service: "",
    message: "",
    consent: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Redirect to thank you page
    window.location.href = "/thank-you";
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formState.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          value={formState.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formState.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent"
        />
      </div>

      <div>
        <label
          htmlFor="city"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          City
        </label>
        <select
          id="city"
          name="city"
          value={formState.city}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent"
        >
          <option value="">Select your city</option>
          {CITIES.map((city) => (
            <option key={city.slug} value={city.name}>
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          Service Needed
        </label>
        <select
          id="service"
          name="service"
          value={formState.service}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent"
        >
          <option value="">Select a service</option>
          {SERVICES.map((service) => (
            <option key={service.slug} value={service.name}>
              {service.name}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gsc-text mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formState.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gsc-bg border border-gsc-border rounded-lg text-gsc-text focus:outline-none focus:ring-2 focus:ring-gsc-gold focus:border-transparent resize-none"
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          required
          checked={formState.consent}
          onChange={handleChange}
          className="mt-1 w-4 h-4 bg-gsc-bg border-gsc-border rounded text-gsc-gold focus:ring-2 focus:ring-gsc-gold"
        />
        <label htmlFor="consent" className="text-sm text-gsc-muted">
          You may call/text me about my request *
        </label>
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send Message"}
      </Button>
    </form>
  );
}
