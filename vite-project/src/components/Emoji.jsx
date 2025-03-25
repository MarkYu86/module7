// components/Emoji.jsx
import React, { useState } from 'react';

const Smile = () => {
  const [emoji, setEmoji] = useState("🤣");

  const onClick = () => {
    if (emoji === "😂") {
      setEmoji("🤣");
    } else if (emoji === "🤣") {
      setEmoji("🙃");
    } else {
      setEmoji("😂");
    }
  };

  return (
    <>
      <span>{emoji}</span>
      <button onClick={onClick}>Change Mood</button>
    </>
  );
};

export default Smile;
