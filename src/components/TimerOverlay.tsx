import { useEffect, useState } from "react";
import { TimerOverlayProps } from "../types/globalTypes";

const TimerOverlay = ({
  duration = 5,
  reset,
  totalSlides,
  activeIndex,
  paused = false, 
}: TimerOverlayProps) => {
  const [progress, setProgress] = useState<number[]>(
    Array.from({ length: totalSlides }, () => 100)
  );

  useEffect(() => {
    setProgress((prev) =>
      prev.map((_, index) => (index === activeIndex ? 100 : prev[index]))
    );
  }, [reset, activeIndex, totalSlides, duration]);

  useEffect(() => {
    if (paused) return; 

    let timePassed = 0;
    const intervalMs = 100;

    const timer = setInterval(() => {
      timePassed += intervalMs;

      setProgress((prev) =>
        prev.map((value, index) =>
          index === activeIndex
            ? Math.max(0, value - (100 / (duration * 10)))
            : value
        )
      );

      if (timePassed >= duration * 1000) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [activeIndex, duration, paused]); 

  return (
    <div className="timer-overlay">
      {progress.map((value, index) => (
        <div
          key={index}
          className={`progress-bar ${index === activeIndex ? "active" : ""}`}
        >
          <div className="progress-fill" style={{ width: `${value}%` }}></div>
        </div>
      ))}
    </div>
  );
};

export default TimerOverlay;