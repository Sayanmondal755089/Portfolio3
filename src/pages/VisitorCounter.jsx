import React, { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/sayan-portfolio/visits")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, []);

  useEffect(() => {
    if (count === 0) return;

    let start = 0;
    const duration = 1500;
    const increment = count / (duration / 20);

    const counter = setInterval(() => {
      start += increment;

      if (start >= count) {
        setDisplayCount(count);
        clearInterval(counter);
      } else {
        setDisplayCount(Math.floor(start));
      }
    }, 20);

    return () => clearInterval(counter);
  }, [count]);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "30px",
        fontSize: "20px",
        fontWeight: "bold",
        animation: "fadeIn 1.2s ease",
      }}
    >
      👀 Total Visitors: {displayCount}

      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
