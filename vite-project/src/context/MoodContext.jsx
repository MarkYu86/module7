import React, { createContext, useState, useContext } from "react";

// Create a context for the emoji/mood
const MoodContext = createContext();

// Create a custom hook to use the MoodContext
export const useMood = () => {
  return useContext(MoodContext);
};

// Create a provider component
export const MoodProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("🤣"); // Default emoji

  const changeMood = () => {
    if (emoji === "😂") {
      setEmoji("🤣");
    } else if (emoji === "🤣") {
      setEmoji("🙃");
    } else {
      setEmoji("😂");
    }
  };

  return (
    <MoodContext.Provider value={{ emoji, changeMood }}>
      {children}
    </MoodContext.Provider>
  );
};
