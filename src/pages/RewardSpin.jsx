import React, { useState } from "react";
import WheelComponent from "react-wheel-of-prizes";

function RewardSpin() {
  const segments = [
    "better luck next time",
    "won 70",
    "won 10",
    "better luck next time",
    "won 2",
    "won uber pass",
    "better luck next time",
    "won a voucher",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  const spinWheel = () => {
    // Add logic to trigger spinning of the wheel
    console.log("Spinning the wheel...");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
        <div onClick={spinWheel}>
      <WheelComponent
        segments={segments}
        segColors={segColors}
        winningSegment={Math.random() * 100}
        onFinished={(winner) => onFinished(winner)}
        primaryColor="black"
        contrastColor="white"
        buttonText="Spin Milk"
        isOnlyOnce={false}
        size={250}
        upDuration={100}
        downDuration={1000}
        fontFamily="Arial"
      />

</div>
      <button
        onClick={spinWheel}
        className="mt-4 px-6 py-3 bg-white text-black font-bold rounded-full"
      >
        Spin Milk
      </button>
    </div>
  );
}

export default RewardSpin;
