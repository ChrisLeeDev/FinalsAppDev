import { useLocation } from 'react-router-dom';
import '../GamePage.css';

export default function GamePage() {
    const location = useLocation();
    const game = location.state.game;

    // Updated reviews with avatar images and reviewer names
    const reviews = [
        { reviewer: "Alice", avatar: "https://www.w3schools.com/w3images/avatar4.png", text: "This game is an absolute masterpiece. The story and gameplay are phenomenal!" },
        { reviewer: "Bob", avatar: "https://www.w3schools.com/w3images/avatar2.png", text: "I love the open-world design. It's a great mix of action and exploration." },
        { reviewer: "Charlie", avatar: "https://www.w3schools.com/w3images/avatar3.png", text: "A bit repetitive, but still a fun experience overall." },
        { reviewer: "David", avatar: "https://www.w3schools.com/w3images/avatar2.png", text: "The graphics are stunning, but the controls could be better." },
        { reviewer: "Eve", avatar: "https://www.w3schools.com/w3images/avatar4.png", text: "One of the best games I've played this year. Highly recommend it!" }
    ];

    // Example rating out of 5 stars
    const rating = 4; // Rating from 1 to 5

    // Function to generate star rating
    const renderStars = (rating) => {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'star-filled' : 'star-empty'}>★</span>
            );
        }
        return stars;
    };

    return (
        <div className="game-page-container">
            <h1 className="game-title">{game.name}</h1>

            <div className="game-details">
                <div className="game-image-container">
                    <img
                        src={game.image}
                        alt={game.name}
                        className="game-image"
                    />
                </div>

                <div className="game-info">
                    <h2 className="game-description">{game.description}</h2>

                    <div className="game-rating">
                        <h3>Rating: </h3>
                        <div className="stars">
                            {renderStars(rating)}
                        </div>
                    </div>
                </div>
            </div>

            {/* Game Reviews Section */}
            <div className="game-reviews-container">
                <div className="game-reviews">
                    <h3>Reviews:</h3>
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index} className="review-item">
                                <div className="reviewer-info">
                                    <img
                                        src={review.avatar}
                                        alt={review.reviewer}
                                        className="reviewer-avatar"
                                    />
                                    <strong>{review.reviewer}</strong>
                                </div>
                                <p>{review.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
