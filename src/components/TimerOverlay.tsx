import { useEffect, useState } from "react";
import { TimerOverlayProps } from "../types/globalTypes";

const TimerOverlay = ({ duration = 5, reset, totalSlides, activeIndex, onDotClick }: TimerOverlayProps) => {  
  const [progress, setProgress] = useState<number[]>(Array.from({ length: totalSlides }, () => 100));
  const [timeLeft, setTimeLeft] = useState<number>(duration);  ////   ENABLE TIMLEFT BELOW TO REMOVE WARNING

  useEffect(() => {
    setProgress((prev) => prev.map((_, index) => (index === activeIndex ? 100 : prev[index])));
    setTimeLeft(duration);
  }, [reset, activeIndex, totalSlides, duration]); 

  useEffect(() => {
    let timePassed = 0;
    const intervalMs = 100;

    const timer = setInterval(() => {
      timePassed += intervalMs;
      setProgress((prev) =>
        prev.map((value, index) => (index === activeIndex ? Math.max(0, value - (100 / (duration * 10))) : value))
      );

      if (timePassed % 1000 === 0) {
        setTimeLeft((prev) => Math.max(0, prev - 1));
      }

      if (timePassed >= duration * 1000) clearInterval(timer);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [activeIndex, duration]);

  return (
    <div className="timer-overlay" >
      {/* <div className="countdown-text">{timeLeft}s</div>   TIMER DISPLAY DISABLED */}
      {progress.map((value, index) => (
        <div
          key={index}
          className={`progress-bar ${index === activeIndex ? "active" : ""}`}
          onClick={() => onDotClick?.(index)}
        >
          <div className="progress-fill" style={{ width: `${value}%` }}></div>
        </div>
      ))}
    </div>
  );
};

export default TimerOverlay;
