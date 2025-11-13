import React, { useState } from "react";
import LoginForm from "./LoginForm";

function EmotionPractice() {
  const [mode, setMode] = useState<"login" | "logout">("login");
  return (
    <div>
      <LoginForm />
    </div>
  );
}

export default EmotionPractice;
