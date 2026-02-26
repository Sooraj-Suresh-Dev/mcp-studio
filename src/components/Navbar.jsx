import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Features', href: '#features' },
        { label: 'How It Works', href: '#how-it-works' },
        { label: 'Learn', href: '#learn' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                {/* ==========================================
            LOGO & SITE NAME
            Replace the placeholder below with your logo/brand
            ========================================== */}
                <a href="#" className="navbar__brand">
                    <div className="navbar__logo-placeholder">
                        {/* LOGO: Replace with <img src="..." alt="Logo" /> */}
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <rect width="28" height="28" rx="8" fill="url(#logo-grad)" />
                            <path d="M8 14l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <defs>
                                <linearGradient id="logo-grad" x1="0" y1="0" x2="28" y2="28">
                                    <stop stopColor="#6c5ce7" />
                                    <stop offset="1" stopColor="#a78bfa" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    {/* SITE_NAME: Replace text below */}
                    <span className="navbar__name">MCP Toolkit</span>
                </a>

                <div className={`navbar__links ${mobileOpen ? 'navbar__links--open' : ''}`}>
                    {links.map(l => (
                        <a
                            key={l.href}
                            href={l.href}
                            className="navbar__link"
                            onClick={() => setMobileOpen(false)}
                        >
                            {l.label}
                        </a>
                    ))}
                    <a href="#cta" className="btn btn-primary navbar__cta" onClick={() => setMobileOpen(false)}>
                        Get Started
                    </a>
                </div>

                <button
                    className={`navbar__burger ${mobileOpen ? 'navbar__burger--open' : ''}`}
                    onClick={() => setMobileOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}
