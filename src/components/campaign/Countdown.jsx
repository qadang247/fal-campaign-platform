import { useEffect, useState } from "react";
import { ELECTION_DATE } from "@/lib/campaign";

function getRemaining(target) {
  const total = new Date(target).getTime() - Date.now();
  if (total <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(total / 86400000),
    hours: Math.floor((total / 3600000) % 24),
    minutes: Math.floor((total / 60000) % 60),
    seconds: Math.floor((total / 1000) % 60),
    done: false,
  };
}

export default function Countdown({ target = ELECTION_DATE, className }) {
  const [time, setTime] = useState(() => getRemaining(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className={className}>
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {units.map((u) => (
          <div
            key={u.label}
            className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md px-2 py-4 sm:px-4 text-center"
          >
            <div className="font-display text-3xl sm:text-5xl font-bold text-hope tabular-nums">
              {String(u.value).padStart(2, "0")}
            </div>
            <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-[0.18em] text-white/70">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}