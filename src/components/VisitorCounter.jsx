import React, { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/sayan-portfolio/visits")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.value);
      });
  }, []);

  return (
    <div style={{
      textAlign: "center",
      marginTop: "20px",
      fontSize: "18px",
      fontWeight: "bold"
    }}>
      👀 Total Visitors: {count}
    </div>
  );
}
