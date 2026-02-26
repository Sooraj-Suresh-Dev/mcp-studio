import './Footer.css';

const footerLinks = {
    Product: ['Server Generator', 'Tool Builder', 'Templates', 'API'],
    Resources: ['Documentation', 'Tutorials', 'Examples', 'Blog'],
    /* COMPANY_NAME: Replace "Company" with your company name */
    Company: ['About', 'Careers', 'Contact', 'Press'],
    Connect: ['GitHub', 'Discord', 'Twitter', 'YouTube'],
};

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                {/* CTA banner */}
                <div className="footer__cta">
                    <h2 className="footer__cta-title">
                        Ready to build your MCP server?
                    </h2>
                    <p className="footer__cta-desc">
                        Start generating production-ready MCP servers and tools in minutes — completely free.
                    </p>
                    <div className="footer__cta-actions">
                        <a href="#cta" className="btn btn-primary">
                            Get Started Free
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="footer__grid">
                    <div className="footer__brand">
                        {/* LOGO + SITE_NAME: Replace below */}
                        <div className="footer__logo">
                            <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                                <rect width="28" height="28" rx="8" fill="url(#footer-logo-grad)" />
                                <path d="M8 14l4 4 8-8" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                <defs>
                                    <linearGradient id="footer-logo-grad" x1="0" y1="0" x2="28" y2="28">
                                        <stop stopColor="#6c5ce7" />
                                        <stop offset="1" stopColor="#a78bfa" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <span>MCP Toolkit</span>
                        </div>
                        <p className="footer__tagline">
                            Generate, build, and learn — the complete MCP platform.
                        </p>
                    </div>

                    {Object.entries(footerLinks).map(([heading, links]) => (
                        <div className="footer__col" key={heading}>
                            <h4 className="footer__col-title">{heading}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="footer__link">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="footer__bottom">
                    {/* COPYRIGHT: Replace with your copyright text */}
                    <p className="footer__copy">© 2026 MCP Toolkit. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
