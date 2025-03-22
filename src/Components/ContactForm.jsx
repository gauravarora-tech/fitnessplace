import { useState } from "react";

export default function ContactForm() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    membership: "Basic Plan",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
      membership: "",
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full text-white grid sm:grid-cols-2 grid-cols-1 gap-[4rem]">
        <form onSubmit={handleSubmit} className="flex flex-col">
          
          <input type="text" name="name" value={formData.name} onChange={handleChange} required className="p-2 mb-5 bg-black text-white border border-red-600 rounded-md"  placeholder="Enter your name"/>
          
          
          <input type="email" name="email" value={formData.email} onChange={handleChange} required className="p-2 mb-5 bg-black text-white border border-red-600 rounded-md" placeholder="Enter your email" />
          
          <label htmlFor="membership" className="text-[--main-color] text-xl font-semibold">Select our membership</label>
          <select name="membership" value={formData.membership} onChange={handleChange} className="p-2 mb-5 bg-black text-white border border-red-600 rounded-md">
            <option value="Basic Plan">Monthly membership</option>
            <option value="Premium Plan">Half yearly membership</option>
            <option value="Elite Plan">Yearly membership</option>
          </select>
          
          
          <textarea name="message" value={formData.message} onChange={handleChange} required rows="8" className="p-2 mb-10 bg-black text-white border border-red-600 rounded-md" placeholder="Ask any question?"></textarea>
          
          <button type="submit" className="p-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded-md cursor-pointer">Send Message</button>
        </form>
        <img src="/img4.jpg" alt="" className="form-img"/>
      </div>
    </div>
  );
}