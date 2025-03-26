import React, { useState, useEffect } from "react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

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
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">Review</h2>
      <div className="space-y-3 border p-4 rounded-lg shadow-md">
        <Input
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button onClick={addReview} className="w-full">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default ReviewSection;
