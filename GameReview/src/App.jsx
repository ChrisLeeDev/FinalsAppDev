import { useState } from "react";
import Login from "./Login";
import GameReview from "./Reviews";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app">
      {!isLoggedIn ? <Login onLogin={setIsLoggedIn} /> : <GameReview />}
    </div>
  );
}
