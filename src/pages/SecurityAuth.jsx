import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function SecurityAuth() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="topic-page">
            <div className="topic-page__bg">
                <div className="topic-page__blob topic-page__blob--1"></div>
                <div className="topic-page__blob topic-page__blob--2"></div>
                <div className="topic-page__grid"></div>
            </div>

            <main className="topic-container container">
                <header className="topic-header">
                    <Link to="/learn" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Learn
                    </Link>
                    <span className="topic-badge">Security</span>
                    <h1 className="topic-title">
                        Security & <span className="text-gradient">Authentication</span>
                    </h1>
                    <p className="topic-lead">
                        Best practices for securing your MCP endpoints and managing safe authentication passes when connecting AI to private data.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>The Principle of Least Privilege (PoLP)</h2>
                        <p>
                            Security in MCP starts with limiting what the AI can see and do. If your server is designed to analyze logs, it shouldn't have the permission to delete them.
                        </p>
                        <ul>
                            <li><strong>Read-Only by Default:</strong> Use read-only database connections and file system permissions whenever possible.</li>
                            <li><strong>Scoped Tokens:</strong> If using a cloud API (like GitHub or Notion), create a Personal Access Token with the minimum required scopes.</li>
                        </ul>
                    </section>

                    <section className="highlight-box">
                        <h3>Secret Management: Environment Variables</h3>
                        <p>
                            Never, under any circumstances, hardcode credentials in your server's source code. MCP Servers running locally (via `stdio`) inherit the environment of the Client.
                        </p>
                        <pre className="code-snippet">
                            {`// Correct way to handle secrets
const API_KEY = process.env.SERVICE_API_KEY;

if (!API_KEY) {
  throw new Error("Missing SERVICE_API_KEY environment variable");
}`}
                        </pre>
                    </section>

                    <section>
                        <h2>Input Sanitization & Validation</h2>
                        <p>
                            AI models can sometimes produce unexpected or malformed inputs (a phenomenon known as "jailbreaking" or prompt injection). Treat every tool argument as "untrusted user input."
                        </p>
                        <ul>
                            <li><strong>Schema Validation:</strong> Rely on your JSON Schema to reject primitive type mismatches.</li>
                            <li><strong>Semantic Validation:</strong> Check for logical errors (e.g., a "delete_user" call where the ID is <code>*; DROP TABLE users;--</code>).</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Local vs. Remote Security</h2>
                        <p>
                            The security model changes depending on the transport layer:
                        </p>
                        <table className="topic-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '30px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                    <th style={{ padding: '10px' }}>Feature</th>
                                    <th style={{ padding: '10px' }}>Local (stdio)</th>
                                    <th style={{ padding: '10px' }}>Remote (SSE/HTTP)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '10px' }}>Trust</td>
                                    <td style={{ padding: '10px' }}>Implicit (running locally)</td>
                                    <td style={{ padding: '10px' }}>Explicit (Auth headers required)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '10px' }}>Credentials</td>
                                    <td style={{ padding: '10px' }}>Env Vars</td>
                                    <td style={{ padding: '10px' }}>Bearer Tokens / OAuth</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Deep dive into the lifecycle and protocol messages to understand how MCP handles security.
                                </p>
                            </div>
                            <Link to="/article" className="btn btn-primary cta-banner__btn">
                                Explore Technical Guide
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
