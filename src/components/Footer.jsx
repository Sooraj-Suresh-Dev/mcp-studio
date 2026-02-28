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
                {/* Links */}
                <div className="footer__grid">
                    <div className="footer__brand">
                        {/* LOGO + SITE_NAME: Replace below */}
                        <div className="footer__logo">
                            <img src="/Mcp_Studio.png" alt="Mcp Studio Logo" />
                            <span>MCP Studio</span>
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
                    <p className="footer__copy">© 2026 MCP Studio. All rights reserved.</p>
                    <div className="footer__legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
