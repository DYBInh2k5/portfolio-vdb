'use client';

import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
}

export default function Typewriter({ text, speed = 50, delay = 0 }: TypewriterProps) {
    const [displayText, setDisplayText] = useState('');
    const [isStarted, setIsStarted] = useState(false);
    const elementRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(() => setIsStarted(true), delay);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    useEffect(() => {
        if (!isStarted) return;

        let i = 0;
        const timer = setInterval(() => {
            setDisplayText(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(timer);
        }, speed);

        return () => clearInterval(timer);
    }, [isStarted, text, speed]);

    return (
        <div ref={elementRef} className="min-h-[1.5em]">
            {displayText}
        </div>
    );
}
