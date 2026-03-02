import { Link } from 'react-router-dom';
import './OptionsSelection.css';

export default function OptionsSelection() {
    return (
        <div className="options-page">
            <div className="options__bg">
                <div className="options__blob options__blob--1"></div>
                <div className="options__blob options__blob--2"></div>
                <div className="options__grid"></div>
            </div>

            <div className="container options__container">
                <header className="options__header">
                    <h1 className="options__title">
                        Choose your <span className="text-gradient">MCP Path</span>
                    </h1>
                    <p className="options__subtitle">
                        Select whether you want to define a new server schema or configure a connection to an existing MCP client.
                    </p>
                </header>

                <div className="options__grid-cards">
                    <Link to="/generator" className="option-card animate-fade-in">
                        <div className="option-card__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                <line x1="8" y1="21" x2="16" y2="21"></line>
                                <line x1="12" y1="17" x2="12" y2="21"></line>
                            </svg>
                        </div>
                        <h2>Server Definition</h2>
                        <p>Generate production-ready MCP server configurations using our AI-assisted or manual form builder.</p>
                        <div className="option-card__action">
                            <span>Open Generator</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14m-7-7 7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>

                    <Link to="/client-connection" className="option-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
                        <div className="option-card__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                <path d="M12 2v2"></path>
                            </svg>
                        </div>
                        <h2>Client Connection</h2>
                        <p>Configure and test connections to MCP-compliant clients like Claude Desktop, IDE extensions, or custom tools.</p>
                        <div className="option-card__action">
                            <span>Configure Client</span>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14m-7-7 7 7-7 7"></path>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
