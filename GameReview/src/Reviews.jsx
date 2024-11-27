import { useState } from "react";

export default function GameReview() {
  const [reviews, setReviews] = useState([]);
  const [gameName, setGameName] = useState("");
  const [review, setReview] = useState("");

  const addReview = () => {
    const newReview = {
      gameName,
      review,
      date: new Date().toLocaleDateString(),
    };
    setReviews([...reviews, newReview]);
    setGameName("");
    setReview("");
  };

  return (
    <div className="review-container">
      <h2>Add a Game Review</h2>
      <input
        type="text"
        placeholder="Game Name"
        value={gameName}
        onChange={(e) => setGameName(e.target.value)}
      />
      <textarea
        placeholder="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      ></textarea>
      <button onClick={addReview}>Submit Review</button>

      <h3>Reviews</h3>
      <ul>
        {reviews.map((r, index) => (
          <li key={index}>
            <strong>{r.gameName}</strong> ({r.date}): {r.review}
          </li>
        ))}
      </ul>
    </div>
  );
}
