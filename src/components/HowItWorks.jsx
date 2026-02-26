import { useEffect, useRef } from 'react';
import './HowItWorks.css';

const steps = [
    {
        number: '01',
        title: 'Describe',
        description:
            'Tell us what your MCP server should do — in natural language or by filling out a simple form. Define tools, resources, and prompts.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M5 7h18M5 14h12M5 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        number: '02',
        title: 'Configure',
        description:
            'Fine-tune schemas, parameters, and handler logic through our visual editor. Preview auto-generated types and validation rules in real time.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M14 10v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        number: '03',
        title: 'Deploy',
        description:
            'Export production-ready code or deploy directly. Get a fully typed, documented MCP server with built-in error handling and logging.',
        icon: (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                <path d="M14 4v16m0 0l-5-5m5 5l5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 22h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
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
        <section className="how-it-works section" id="how-it-works" ref={sectionRef}>
            <div className="container">
                <div className="how-it-works__header animate-on-scroll">
                    <span className="section-label">How It Works</span>
                    <h2 className="section-title">Three steps to your MCP server</h2>
                    <p className="section-subtitle">
                        From idea to production in minutes — not days.
                    </p>
                </div>

                <div className="how-it-works__timeline stagger">
                    {steps.map((step, i) => (
                        <div className="how-it-works__step animate-on-scroll" key={i}>
                            <div className="how-it-works__connector">
                                <div className="how-it-works__dot">
                                    <span>{step.number}</span>
                                </div>
                                {i < steps.length - 1 && <div className="how-it-works__line" />}
                            </div>
                            <div className="how-it-works__card glass-card">
                                <div className="how-it-works__icon">{step.icon}</div>
                                <h3 className="how-it-works__title">{step.title}</h3>
                                <p className="how-it-works__desc">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
