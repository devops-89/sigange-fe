import React from 'react';
import '../styles/MarqueeText.css'; // Import the CSS file

const texts = [
  "INDOOR SIGNS",
  "VEHICLE WRAPS",
  "PRINT MEDIA",
  "OUTDOOR SIGNS",
  "CHANNEL LETTERS",
  "PYLON SIGNS",
 
];

const MarqueeText = () => {
  return (
    <div className="marquee-container bg-yellow-500 py-4 overflow-hidden">
      <div className="marquee-track">
        <div className="marquee-content">
          {texts.map((text, index) => (
            <span key={index} className="marquee-item text-black text-xl font-semibold mx-8">
              {text}
            </span>
          ))}
        </div>
        {/* Duplicate for smooth infinite loop */}
        <div className="marquee-content">
          {texts.map((text, index) => (
            <span key={`dup-${index}`} className="marquee-item text-black text-xl font-semibold mx-8">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueeText;
