'use client';

import Reveal from './Reveal';

interface ProjectCardProps {
    title: string;
    desc: string;
    image: string;
    tags: string[];
    delay?: number;
}

export default function ProjectCard({ title, desc, image, tags, delay = 0 }: ProjectCardProps) {
    return (
        <Reveal delay={delay}>
            <div className="group glass rounded-3xl overflow-hidden border border-primary/10 hover:border-primary/40 transition-all">
                <div
                    className="h-48 bg-slate-900 bg-cover bg-center transition-transform group-hover:scale-110"
                    style={{ backgroundImage: `url("${image}")` }}
                ></div>
                <div className="p-6">
                    <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
                    <p className="text-slate-500 text-sm mb-4">{desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-300">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="flex justify-between items-center">
                        <a className="text-primary font-bold text-sm flex items-center gap-1" href="#">
                            Live Demo <span className="material-symbols-outlined text-sm">open_in_new</span>
                        </a>
                        <a className="text-slate-400 hover:text-white" href="#">
                            <span className="material-symbols-outlined">code</span>
                        </a>
                    </div>
                </div>
            </div>
        </Reveal>
    );
}
