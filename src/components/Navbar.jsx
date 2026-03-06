import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { label: 'Features', href: '/#features' },
        { label: 'How It Works', href: '/#how-it-works' },
        { label: 'Learn', href: '/learn' },
        { label: 'Validator', href: '/validator' },
    ];

    const handleLogoClick = (e) => {
        // If we are not at the top of the page, scroll to top and prevent navigation
        if (window.scrollY > 0) {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // If we are already at the top, normal Link behavior takes us to "/"
        setMobileOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
            <div className="navbar__inner container">
                <Link to="/" className="navbar__brand" onClick={handleLogoClick}>
                    <div className="navbar__logo-placeholder">
                        <img src="/Mcp_Studio.png" alt="Mcp Studio Logo" />
                    </div>
                    <span className="navbar__name">MCP Studio</span>
                </Link>

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
                    <Link to="/options-selection" className="btn btn-primary navbar__cta" onClick={scrollToTop}>
                        Get Started
                    </Link>
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
