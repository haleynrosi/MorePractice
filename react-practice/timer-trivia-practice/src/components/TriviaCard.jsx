import React, { useState, useEffect } from "react";

const TriviaCard = () => {
  const [currentLyricIndex, setCurrentLyricIndex] = useState(0);
  const [countdown, setCountdown] = useState(0)

  const lyricData = [
    {
      lyric: "I can't breathe without you, but I have to",
      answer: "Breathe",
    },
    {
      lyric: "Loving you was red",
      answer: "Red",
    },
    {
      lyric: "Why'd you have to go and lock me out while I let you in",
      answer: "All you had to do was stay",
    },
  ];

  const getNextLyricIndex = () => {
    if (currentLyricIndex === lyricData.length - 1) {
      return 0;
    } else {
      return currentLyricIndex + 1;
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLyricIndex(getNextLyricIndex());
    }, 10000);

    return () => {
      clearInterval(timer);
    };
  }, [currentLyricIndex]);

  return (
    <div className="trivia-card">
      <h2>{lyricData[currentLyricIndex].lyric}</h2>
      <p>{lyricData[currentLyricIndex].answer}</p>
      <p>{countdown}</p>
    </div>
  );
};

export default TriviaCard;
