import React from "react";
import { motion } from "framer-motion";

const ReviewsPopup = ({
  isOpen,
  onClose,
  onSubmit,
  reviewName,
  setReviewName,
  reviewText,
  setReviewText,
}) => {
  if (!isOpen) return null; // If popup is not open, don't render anything

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-white p-6 rounded-lg shadow-lg w-96 text-center"
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Leave a Review</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded mb-3"
          value={reviewName}
          onChange={(e) => setReviewName(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Write your review here..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>

        <div className="flex justify-center gap-4">
          <button
            onClick={onClose}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
          >
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className="bg-orange text-white px-4 py-2 rounded hover:bg-orange-dark transition"
          >
            Submit
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ReviewsPopup;
