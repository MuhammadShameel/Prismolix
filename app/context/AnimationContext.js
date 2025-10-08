"use client";

import { createContext } from "react";

// This context will provide the status of the intro animation
export const AnimationContext = createContext({
  isIntroComplete: false,
});
