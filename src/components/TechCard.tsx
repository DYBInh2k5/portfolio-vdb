'use client';

import Reveal from './Reveal';

interface TechCardProps {
    icon: string;
    title: string;
    desc: string;
    delay?: number;
}

export default function TechCard({ icon, title, desc, delay = 0 }: TechCardProps) {
    return (
        <Reveal delay={delay}>
            <div className="glass p-8 rounded-2xl border-t-4 border-primary hover:translate-y-[-8px] transition-transform group">
                <span className="material-symbols-outlined text-primary text-4xl mb-4">{icon}</span>
                <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
                <p className="text-slate-500 text-sm">{desc}</p>
            </div>
        </Reveal>
    );
}
