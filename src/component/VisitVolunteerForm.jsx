import { useState } from "react";
import { Resend } from 'resend';

const resend = new Resend('re_hEopmVUy_7HqBvZ84V1127Y6js4GKma8z');

export default function VisitVolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "visit",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Email to User
      await resend.emails.send({
        from: "onboarding@resend.dev",  // Test sender email
        to: formData.email,  // User's email
        subject: "Goshala Visit Confirmation",
        html: `<p>Hello ${formData.name},</p><p>Thank you for your interest in our Goshala.</p>`,
      });
  
      // Email to Client
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "shubhambabu7209@gmail.com",
        subject: "New Visit/Volunteering Request",
        html: `<p>A new request has been received:</p>
               <p><strong>Name:</strong> ${formData.name}</p>
               <p><strong>Email:</strong> ${formData.email}</p>
               <p><strong>Phone:</strong> ${formData.phone}</p>
               <p><strong>Type:</strong> ${formData.type}</p>
               <p><strong>Date:</strong> ${formData.date}</p>
               <p><strong>Message:</strong> ${formData.message || "No additional message."}</p>`,
      });
  
      alert("Test email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send test email.");
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-6 bg-[#FFF3CD] shadow-lg rounded-xl mt-10">
      <h2 className="text-2xl font-semibold mb-4 text-[#D97706]">
        Goshala Visit / Volunteering Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        />
        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        >
          <option value="visit">Visit</option>
          <option value="volunteer">Volunteering</option>
        </select>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        />
        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 border border-[#D97706] rounded bg-[#FFFBEB] text-[#D97706]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#F59E0B] text-white p-2 rounded hover:bg-[#D97706]"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
