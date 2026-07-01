'use client';

import Reveal from './Reveal';

export default function Footer() {
    return (
        <footer className="bg-slate-900 dark:bg-[#0a0a16] pt-20 pb-10 px-6 border-t border-primary/10" id="contact">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 mb-16">
                    <Reveal>
                        <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tighter">
                            Let&apos;s build <br /><span className="text-primary">the next big thing.</span>
                        </h2>
                        <p className="text-slate-400 max-w-md mb-8">
                            Currently open to freelance opportunities, research collaborations, and creative partnerships.
                        </p>
                    </Reveal>

                    <Reveal delay={200}>
                        <div className="glass p-8 rounded-3xl">
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <input
                                        className="w-full bg-slate-800/50 border-transparent rounded-xl p-4 focus:border-primary focus:ring-0 text-white"
                                        placeholder="Name"
                                        type="text"
                                    />
                                    <input
                                        className="w-full bg-slate-800/50 border-transparent rounded-xl p-4 focus:border-primary focus:ring-0 text-white"
                                        placeholder="Email"
                                        type="email"
                                    />
                                </div>
                                <textarea
                                    className="w-full bg-slate-800/50 border-transparent rounded-xl p-4 focus:border-primary focus:ring-0 text-white"
                                    placeholder="Your Message"
                                    rows={4}
                                ></textarea>
                                <button
                                    className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:shadow-[0_0_20px_rgba(96,98,246,0.3)] transition-all"
                                    type="submit"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </Reveal>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-6">
                    <div className="flex items-center gap-3">
                        <div className="size-8 bg-primary rounded flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-lg">terminal</span>
                        </div>
                        <span className="text-white font-bold">coDY</span>
                    </div>
                    <p className="text-slate-500 text-xs">© 2026 Võ Duy Bình. Built with ❤️ and Next-gen Tech.</p>
                </div>
            </div>
        </footer>
    );
}
