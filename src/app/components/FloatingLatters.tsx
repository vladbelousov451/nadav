"use client";

import { useEffect, useState } from "react";

export default function FloatingLetter({
  showI,
  showR,
  showM,
}: {
  showI: boolean;
  showR: boolean;
  showM: boolean;
}) {
  let letter = null;
  if (showI) letter = "I";
  else if (showR) letter = "R";
  else if (showM) letter = "M";

  return (
    letter && (
      <div className="fixed left-4 top-1/3 text-orange-400 text-[15vw] font-extrabold z-50 pointer-events-none select-none transition-opacity duration-500">
        {letter}
      </div>
    )
  );
}
