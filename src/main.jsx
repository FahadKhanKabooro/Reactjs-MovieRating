import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>this movie was rated {movieRating} Stars</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Bad", "terrible", "good", "Nice", "Amazing"]}
    />
    <Test /> */}
  </React.StrictMode>
);
