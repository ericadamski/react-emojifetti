import React from "react";
import Confetti from "../index";

export default { title: "Emojifetti" };

export const withConfetti = () => <Confetti />;

export const withCustomEmojis = () => (
  <Confetti emojis={["😂", "🇨🇦", "🍰", "🐢", "🔥", "🎬"]} />
);
