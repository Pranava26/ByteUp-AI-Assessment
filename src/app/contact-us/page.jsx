"use client"
import { useState } from "react";

const page = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const validate = () => {
    const errors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = "Name is required.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      errors.email = "Invalid email format.";
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const validationErrors = validate();
      if (Object.keys(validationErrors).length === 0) {
        console.log("Form submitted successfully:", formData);
        setIsFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrors(validationErrors);
      }
      setLoading(false);
    }, 2000)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="px-16 py-10">
      <h1 className="font-semibold text-3xl text-center pb-2">Contact <span className="text-green-600">Us</span></h1>
      <h1 className="font-semibold text-xl text-center border-b-2 border-black pb-2">Let's <span className="text-green-600">Connect</span></h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 w-auto sm:w-[400px] mx-auto mt-16 shadow-xl rounded-md">
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="name">Name:</label>
          <input className="border border-gray-500 rounded-md p-1" type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
          {errors.name && <p className="text-red-600 font-semibold text-sm">{errors.name}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="email">Email:</label>
          <input className="border border-gray-500 rounded-md p-1" type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
          {errors.email && <p className="text-red-600 font-semibold text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold" htmlFor="message">Message:</label>
          <textarea rows={4} cols={50} className="border border-gray-500 rounded-md p-1" name="message" id="message" value={formData.message} onChange={handleChange} ></textarea>
          {errors.message && <p className="text-red-600 font-semibold text-sm">{errors.message}</p>}
        </div>
        <button type="submit" disabled={loading} className={`bg-green-600 text-white font-semibold hover:bg-green-700 py-2 rounded-md ${loading ? 'cursor-not-allowed' : ''}`}>{loading ? 'Processing...' : 'Submit'}</button>
        {isFormSubmitted && <p className="text-green-600 text-sm font-semibold">Thank you. We will contact you soon.</p>}
      </form>
    </div>
  )
}

export default page
