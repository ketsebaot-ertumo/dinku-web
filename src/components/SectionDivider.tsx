import React from "react";
import clsx from "clsx";

interface SectionDividerProps {
  /** Color of the lines and dot (default: orange-500) */
  color?: string;
  /** Size (width of the lines) */
  lineWidth?: string;
  /** Add custom classes */
  className?: string;
}

export default function SectionDivider({
  color = "bg-primary",
  lineWidth = "w-12",
  className,
}: SectionDividerProps) {
  return (
    <span
      className={clsx(
        "relative inline-flex items-center justify-center py-4",
        className
      )}
    >
      <span className={clsx("block h-[2px] mr-2", color, lineWidth)}></span>
      <span className={clsx("text-primary", color === "bg-primary" ? "text-primary" : color.replace("bg-", "text-"))}>
        ●
      </span>
      <span className={clsx("block h-[2px] ml-2", color, lineWidth)}></span>
    </span>
  );
}
