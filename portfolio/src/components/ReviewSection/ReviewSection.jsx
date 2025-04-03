import React, { useState, useEffect } from "react";

import { Button } from "../../components/ui/button";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState(""); // Auto-detected country

  // Detect user's country automatically
  useEffect(() => {
    fetch("https://ip-api.com/json")
      .then((res) => res.json())
      .then((data) => setCountry(data.countryCode)); // Auto-detect country
  }, []);

  const addReview = () => {
    if (name && message) {
      const newReview = { name, country, message };

      fetch("http://localhost:5000/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      })
        .then((res) => res.json())
        .then((data) => setReviews([...reviews, data]));

      setName("");
      setMessage("");
    }
  };

  return (
    <div
      id="contact"
      className="max-w-[600px] mx-auto items-center justify-center mt-[100px] sm:px-2 md:px-8 lg:px-4"
    >
      <h2 className="text-6xl text-cyan mb-10 text-center">Review</h2>
      <div className="flex justify-between gap-24 bg-brown p-8 rounded-2xl lg:flex-row sm:flex-col">
        <div className="flex items-center justify-center ">
          <div className="flex flex-col gap-8 w-[400px] items-center justify-center">
            <input
              className="h-12 rounded-lg bg-lightBrown px-2 w-full"
              required
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              required
              type="text"
              name="message"
              className="rounded-lg bg-lightBrown p-2 w-full"
              placeholder="Your Message"
              value={message}
              rows="5"
              cols="30"
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button className="w-full bg-cyan" onClick={addReview}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
