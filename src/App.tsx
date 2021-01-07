import React, { useRef } from "react";
import "./styles.css";

export default function App() {
  const topRef = useRef(null);

  const handleClick = (e) => {
    //e.preventDefault()

    window.scroll(0, topRef.current.offsetTop);
  };

  return (
    <div className="App">
      <div ref={topRef}>Top</div>
      <div style={{ height: "1300px" }}>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>

      <button onClick={handleClick}>Go to Top</button>
    </div>
  );
}
