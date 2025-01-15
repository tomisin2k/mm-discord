import React, { useState, useEffect } from 'react';

const DynamicText = () => {
  const texts = [
    "Ever Since Joining I have been upping my profits",
    "this thing is like the Wikipedia of memecoins",
    "saviour of the trenches"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false); // Start fade out
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsVisible(true); // Start fade in
      }, 500); // Wait for fade out to complete
      
    }, 2000); // Change text every 4 seconds

    return () => clearInterval(textInterval);
  }, []);

  return (
    <h1 
      id="dynamic-text"
      className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      "{texts[currentIndex]}"
    </h1>
  );
};

export default DynamicText;