import { useEffect, useRef } from 'react';
import './Features.css';

const features = [
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <rect x="2" y="6" width="28" height="20" rx="4" stroke="currentColor" strokeWidth="2" />
                <path d="M9 14l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="20" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <line x1="20" y1="17" x2="24" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'MCP Server Generator',
        description:
            'Describe your server in plain language or configure it visually. We generate fully compliant MCP servers ready for production deployment.',
        tag: 'Generate',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4v24M4 16h24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <rect x="6" y="6" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
                <rect x="18" y="18" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2" />
            </svg>
        ),
        title: 'Tool Builder',
        description:
            'Define tools with auto-generated input schemas. Visual editor for parameters, validations, and handler logic — no boilerplate needed.',
        tag: 'Build',
    },
    {
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 22V10a4 4 0 014-4h12a4 4 0 014 4v12a4 4 0 01-4 4H10a4 4 0 01-4-4z" stroke="currentColor" strokeWidth="2" />
                <path d="M12 12h8M12 16h5M12 20h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Learning Hub',
        description:
            'Interactive tutorials, guides, and real-world examples. Master MCP concepts from basics to advanced patterns — at your own pace.',
        tag: 'Learn',
    },
];

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const items = sectionRef.current?.querySelectorAll('.animate-on-scroll');
        items?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section className="features section" id="features" ref={sectionRef}>
            <div className="container">
                <div className="features__header animate-on-scroll">
                    <span className="section-label">Features</span>
                    <h2 className="section-title">Everything you need to build with MCP</h2>
                    <p className="section-subtitle">
                        From server generation to learning resources — a complete toolkit for
                        the Model Context Protocol ecosystem.
                    </p>
                </div>

                <div className="features__grid stagger">
                    {features.map((f, i) => (
                        <div className="features__card glass-card animate-on-scroll" key={i}>
                            <div className="features__icon">{f.icon}</div>
                            <span className="features__tag">{f.tag}</span>
                            <h3 className="features__card-title">{f.title}</h3>
                            <p className="features__card-desc">{f.description}</p>
                            <a href="#" className="features__card-link">
                                Explore
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7h10m0 0L8 3m4 4L8 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
