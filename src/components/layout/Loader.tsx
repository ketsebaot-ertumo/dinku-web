import { Loader2 } from "lucide-react";

interface LoaderProps {
  /** Optional message below the spinner */
  message?: string;
  /** Background color (default: black) */
  bgColor?: string;
  /** Text color (default: white) */
  textColor?: string;
  /** Spinner size (default: 36) */
  size?: number;
  /** Show fullscreen (default: true) */
  fullScreen?: boolean;
}

export default function Loader({
  message = "Loading...",
  bgColor = "bg-black",
  textColor = "text-white",
  size = 36,
  fullScreen = true,
}: LoaderProps) {
  return (
    <div
      className={`${fullScreen ? "min-h-screen" : "h-auto"} flex flex-col items-center justify-center ${bgColor} ${textColor}`}
    >
      <Loader2
        className="animate-spin text-primary mb-4"
        size={size}
        strokeWidth={2.5}
      />
      <p>{message}</p>
    </div>
  );
}
