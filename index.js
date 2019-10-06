import React from "react";
import Confetti from "react-confetti";

function randomElement(list) {
  return list[~~(Math.random() * list.length)];
}

function draw(emojis = ["🎉", "🚀", "✨", "🦄", "❤️", "💵"]) {
  let colors = {}; // max of 17

  return function drawEmojis(ctx) {
    const outerRadius = this.w;
    const innerRadius = outerRadius / 2;

    const emoji =
      colors[this.color] || (colors[this.color] = randomElement(emojis));

    ctx.font = "30px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(emoji, outerRadius, innerRadius);
  };
}

export default function Emojifetti(props) {
  return <Confetti gravity={0.1} {...props} drawShape={draw(props.emojis)} />;
}
