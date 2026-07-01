'use client';

import { useState, useEffect } from 'react';

export default function Clock() {
    const [time, setTime] = useState<string>('00:00:00');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString('en-US', {
                hour12: false,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
            }));
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return <span className="text-xs font-mono text-primary opacity-0">00:00:00</span>;

    return <span className="text-xs font-mono text-primary">{time}</span>;
}
