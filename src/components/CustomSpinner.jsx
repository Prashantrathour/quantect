import React, { useState, useRef } from "react";

const CustomSpinner = ({ onFinished, segments, segColors }) => {
  const [isSpinning, setSpinning] = useState(false);
  const spinnerRef = useRef(null);

  const startSpin = () => {
    if (!isSpinning) {
      const randomAngle = Math.random() * 360 + 720; // Spin 2 times + random angle
      setSpinning(true);
      spinnerRef.current.style.transition = "transform 3s ease-out";
      spinnerRef.current.style.transform = `rotate(${randomAngle}deg)`;

      const spinDuration = 3000 + Math.random() * 3000; // Random time for spinning (3s to 6s)

      // Simulate the time it takes for the spinner to stop spinning
      setTimeout(() => {
        setSpinning(false);
        spinnerRef.current.style.transition = "none";
        const winnerIndex = Math.floor(Math.random() * segments.length);
        onFinished(segments[winnerIndex]);
      }, spinDuration);
    }
  };

  return (
    <div className="relative">
      <div
        ref={spinnerRef}
        className={`w-40 h-40 border-4 border-black rounded-full overflow-hidden transform ${
          isSpinning ? "pointer-events-none" : ""
        }`}
      >
        {segments.map((segment, index) => (
          <div
            key={index}
            className="w-full h-1/8"
            style={{
              backgroundColor: segColors[index],
            }}
          />
        ))}
      </div>
      <button
        onClick={startSpin}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md"
      >
        Spin
      </button>
    </div>
  );
};

export default CustomSpinner;
