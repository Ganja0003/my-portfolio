"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    alert(data.message);
  };
  return (
    <>
      <form onSubmit={submitHandler} className="contactContainer">
        <h2 className="contactTitle">Contact Me</h2>
        <div className="textInput">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            value={formData.name}
            required
          />
        </div>
        <div className="textInput">
          <label htmlFor="name">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={changeHandler}
            value={formData.email}
            required
          />
        </div>
        <div className="textArea">
          <label htmlFor="name">Message</label>
          <textarea
            id="message"
            name="message"
            onChange={changeHandler}
            value={formData.message}
            required
          />
        </div>

        <button className="contactButton">Send</button>
      </form>
    </>
  );
}
