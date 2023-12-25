import React, { useState, useRef, useEffect } from "react";

const SpinnerWheel = () => {
  const colors = ["#eaeaea", "#cccccc", "#eaeaea", "#cccccc", "#eaeaea", "#cccccc", "#eaeaea", "#cccccc"];
  const prizeDescriptions = ["car", "house", "etc..."];
  const [startAngle, setStartAngle] = useState(0);
  const [arc, setArc] = useState(Math.PI / 4);
  const [spinTimeout, setSpinTimeout] = useState(null);
  const [spinAngleStart, setSpinAngleStart] = useState(10);
  const [spinTime, setSpinTime] = useState(0);
  const [spinTimeTotal, setSpinTimeTotal] = useState(0);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvas = document.getElementById("canvas");
    if (canvas.getContext) {
      const outsideRadius = 200;
      const textRadius = 160;
      const insideRadius = 125;

      const context = canvas.getContext("2d");
      setCtx(context);

      context.strokeStyle = "black";
      context.lineWidth = 2;
      context.font = 'bold 12px Helvetica, Arial';

      for (let i = 0; i < 8; i++) {
        const angle = startAngle + i * arc;
        context.fillStyle = colors[i];

        context.beginPath();
        context.arc(250, 250, outsideRadius, angle, angle + arc, false);
        context.arc(250, 250, insideRadius, angle + arc, angle, true);
        context.stroke();
        context.fill();

        context.save();
        context.shadowOffsetX = -1;
        context.shadowOffsetY = -1;
        context.shadowBlur = 0;
        context.shadowColor = "rgb(220,220,220)";
        context.fillStyle = "black";
        context.translate(
          250 + Math.cos(angle + arc / 2) * textRadius,
          250 + Math.sin(angle + arc / 2) * textRadius
        );
        context.rotate(angle + arc / 2 + Math.PI / 2);
        const text = prizeDescriptions[i] || `Not this time! ${i}`;
        context.fillText(text, -context.measureText(text).width / 2, 0);
        context.restore();
      }

      // Arrow
      context.fillStyle = "black";
      context.beginPath();
      context.moveTo(250 - 4, 250 - (outsideRadius + 5));
      context.lineTo(250 + 4, 250 - (outsideRadius + 5));
      context.lineTo(250 + 4, 250 - (outsideRadius - 5));
      context.lineTo(250 + 9, 250 - (outsideRadius - 5));
      context.lineTo(250 + 0, 250 - (outsideRadius - 13));
      context.lineTo(250 - 9, 250 - (outsideRadius - 5));
      context.lineTo(250 - 4, 250 - (outsideRadius - 5));
      context.lineTo(250 - 4, 250 - (outsideRadius + 5));
      context.fill();
    }
  }, [startAngle, arc, colors, prizeDescriptions]);

  const drawSpinnerWheel = () => {
    if (ctx) {
      ctx.clearRect(0, 0, 500, 500);
      setSpinTime(0);
      setSpinTimeTotal(0);
      setSpinAngleStart(10);
      setStartAngle(0);
      setArc(Math.PI / 4);
      // Redraw the spinner
      for (let i = 0; i < 8; i++) {
        const angle = startAngle + i * arc;
        ctx.fillStyle = colors[i];

        ctx.beginPath();
        ctx.arc(250, 250, 200, angle, angle + arc, false);
        ctx.arc(250, 250, 125, angle + arc, angle, true);
        ctx.stroke();
        ctx.fill();

        ctx.save();
        ctx.shadowOffsetX = -1;
        ctx.shadowOffsetY = -1;
        ctx.shadowBlur = 0;
        ctx.shadowColor = "rgb(220,220,220)";
        ctx.fillStyle = "black";
        ctx.translate(
          250 + Math.cos(angle + arc / 2) * 160,
          250 + Math.sin(angle + arc / 2) * 160
        );
        ctx.rotate(angle + arc / 2 + Math.PI / 2);
        const text = prizeDescriptions[i] || `Not this time! ${i}`;
        ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
        ctx.restore();
      }

      // Arrow
      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.moveTo(250 - 4, 250 - 205);
      ctx.lineTo(250 + 4, 250 - 205);
      ctx.lineTo(250 + 4, 250 - 195);
      ctx.lineTo(250 + 9, 250 - 195);
      ctx.lineTo(250 + 0, 250 - 203);
      ctx.lineTo(250 - 9, 250 - 195);
      ctx.lineTo(250 - 4, 250 - 195);
      ctx.lineTo(250 - 4, 250 - 205);
      ctx.fill();
    }
  };

  const spin = () => {
    setSpinAngleStart(Math.random() * 10 + 10);
    setSpinTime(0);
    setSpinTimeTotal(Math.random() * 3 + 4 * 1000);
    rotateWheel();
  };

  const rotateWheel = () => {
    setSpinTime((prevSpinTime) => prevSpinTime + 30);
    if (spinTime >= spinTimeTotal) {
      stopRotateWheel();
      return;
    }
    const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
    setStartAngle((prevStartAngle) => prevStartAngle + spinAngle * (Math.PI / 180));
    drawSpinnerWheel();
    setSpinTimeout(setTimeout(rotateWheel, 30));
  };

  const stopRotateWheel = () => {
    clearTimeout(spinTimeout);
    const degrees = startAngle * (180 / Math.PI) + 90;
    const arcd = arc * (180 / Math.PI);
    const index = Math.floor((360 - (degrees % 360)) / arcd);
    ctx.save();
    ctx.font = 'bold 30px Helvetica, Arial';
    const text = prizeDescriptions[index];
    ctx.fillText(text, 250 - ctx.measureText(text).width / 2, 250 + 10);
    ctx.restore();
  };

  const easeOut = (t, b, c, d) => {
    const ts = (t /= d) * t;
    const tc = ts * t;
    return b + c * (tc + -3 * ts + 3 * t);
  };

  return (
    <div className="relative">
      <canvas id="canvas" width="500" height="500" className="border-2 border-black"></canvas>
      <button
        onClick={spin}
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md"
      >
        Spin
      </button>
    </div>
  );
};

export default SpinnerWheel;
