"use client";
import { useEffect, useState } from 'react';

const DigitalClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval); // Clean up interval on component unmount
    }, []);

    // Format time as HH:MM:SS
    const formattedTime = time.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return (
        <div className="w-fit font-mono font-bold text-white bg-slate-900 px-2 py-1 rounded-lg shadow-lg border hover:bg-slate-700 transition-all duration-200">
            {formattedTime}
        </div>
    );
};

export default DigitalClock;
