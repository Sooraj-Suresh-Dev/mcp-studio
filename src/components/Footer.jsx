import { Link } from 'react-router-dom';
import './Footer.css';

const footerLinks = {
    Product: [
        { label: 'Server Generator', href: '/generator' },
        { label: 'Client Config Generator', href: '/client-connection' },
        { label: 'MCP Validator', href: '/validator' }
    ],
    Resources: [
        { label: 'Documentation', href: '/learn' },
        { label: 'Tutorials', href: '/learn/quick-start' },
        { label: 'Examples', href: '/learn/schema-patterns' }
    ],
    Connect: [
        { label: 'GitHub', href: 'https://github.com/ModelContextProtocol', isExternal: true }
    ]
};

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                {/* Links */}
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="footer__logo" onClick={scrollToTop}>
                            <img src="/Mcp_Studio.png" alt="Mcp Studio Logo" />
                            <span>MCP Studio</span>
                        </Link>
                        <p className="footer__tagline">
                            Generate, build, and learn — the complete MCP platform.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div className="footer__col" key={heading}>
                            <h4 className="footer__col-title">{heading}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.label}>
                                        {link.isExternal ? (
                                            <a
                                                href={link.href}
                                                className="footer__link"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link
                                                to={link.href}
                                                className="footer__link"
                                                onClick={scrollToTop}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="footer__bottom">
                    <p className="footer__copy">© 2026 MCP Studio. All rights reserved.</p>
                    <div className="footer__legal">
                        <Link to="/" onClick={scrollToTop}>Privacy Policy</Link>
                        <Link to="/" onClick={scrollToTop}>Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
