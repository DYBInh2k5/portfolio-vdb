'use client';

import Link from 'next/link';
import Clock from './Clock';

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full glass border-b border-primary/10">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-2xl">terminal</span>
                    </div>
                    <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase">
                        coDY
                    </Link>
                    <div className="hidden lg:block ml-4 px-3 py-1 rounded bg-white/5 border border-white/10">
                        <Clock />
                    </div>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    <Link href="#about" className="text-sm font-semibold hover:text-primary transition-colors">About</Link>
                    <Link href="#tech" className="text-sm font-semibold hover:text-primary transition-colors">Stack</Link>
                    <Link href="#projects" className="text-sm font-semibold hover:text-primary transition-colors">Projects</Link>
                    <Link href="#ai-creative" className="text-sm font-semibold hover:text-primary transition-colors">Creative</Link>
                    <Link href="#contact" className="text-sm font-semibold hover:text-primary transition-colors">Contact</Link>
                </nav>

                <div className="flex items-center gap-4">
                    <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 active:scale-95">
                        Resume
                    </button>
                </div>
            </div>
        </header>
    );
}
