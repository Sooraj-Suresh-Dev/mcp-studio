import { useEffect, useRef } from 'react';
import './LearnSection.css';

const resources = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M4 6h8l2 2h10a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" />
                <path d="M10 16h8M10 20h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Documentation',
        description: 'Comprehensive API references, schema guides, and best practices for building MCP-compliant servers.',
        link: '#',
        color: 'var(--accent)',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M10 8l-6 6 6 6M18 8l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="15" y1="5" x2="13" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Interactive Tutorials',
        description: 'Hands-on, step-by-step guides that walk you through building real MCP integrations from scratch.',
        link: '#',
        color: 'var(--success)',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="2" />
                <path d="M14 9v5l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Quick Start',
        description: 'Get your first MCP server running in under 5 minutes with our streamlined setup wizard.',
        link: '#',
        color: 'var(--warning)',
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 3l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
        ),
        title: 'Examples Gallery',
        description: 'Browse production-ready examples: search tools, file managers, database integrations, and more.',
        link: '#',
        color: '#f472b6',
    },
];

export default function LearnSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add('visible');
                });
            },
            { threshold: 0.1 }
        );

        const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        items?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="learn section" id="learn" ref={sectionRef}>
            <div className="container">
                <div className="learn__header animate-on-scroll">
                    <span className="section-label">Learn</span>
                    <h2 className="section-title">Master the MCP ecosystem</h2>
                    <p className="section-subtitle">
                        Everything you need to understand, build, and ship MCP integrations — from first steps to advanced patterns.
                    </p>
                </div>

                <div className="learn__grid stagger">
                    {resources.map((r, i) => (
                        <a href={r.link} className="learn__card glass-card animate-on-scroll" key={i}>
                            <div className="learn__icon" style={{ color: r.color, borderColor: `${r.color}33`, background: `${r.color}11` }}>
                                {r.icon}
                            </div>
                            <h3 className="learn__card-title">{r.title}</h3>
                            <p className="learn__card-desc">{r.description}</p>
                            <span className="learn__card-arrow" style={{ color: r.color }}>
                                →
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
