import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function Troubleshooting() {
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
                    <span className="topic-badge">Guide</span>
                    <h1 className="topic-title">
                        Troubleshooting <span className="text-gradient">Common Issues</span>
                    </h1>
                    <p className="topic-lead">
                        A comprehensive list of common MCP errors, debugging strategies, and solutions to help you solve protocol-level failures.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>The Debugging Workflow</h2>
                        <p>
                            Debugging an MCP server can be tricky because once it's inside a client like Claude Desktop, you lose direct access to the console output. Use this systematic approach to identify the root cause.
                        </p>
                    </section>

                    <section className="highlight-box">
                        <h3>1. Inspecting the Client Logs</h3>
                        <p>
                            Claude Desktop maintains a dedicated log file for MCP communication. This should always be your first stop.
                        </p>
                        <ul className="path-list">
                            <li><strong>Windows:</strong> <code>%APPDATA%\Claude\logs\mcp.log</code></li>
                            <li><strong>macOS:</strong> <code>~/Library/Logs/Claude/mcp.log</code></li>
                        </ul>
                        <p>Look for lines starting with <code>[ERROR]</code>. Common culprits include "Failed to spawn child process" or "Invalid JSON-RPC message."</p>
                    </section>

                    <section>
                        <h2>2. Common Error Patterns</h2>
                        <table className="topic-table" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', marginBottom: '30px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                                    <th style={{ padding: '10px' }}>Error Message</th>
                                    <th style={{ padding: '10px' }}>Likely Cause</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '10px' }}><code>ENOENT</code></td>
                                    <td style={{ padding: '10px' }}>The path to your server or the node executable is wrong. Use absolute paths.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '10px' }}><code>ECONNREFUSED</code></td>
                                    <td style={{ padding: '10px' }}>If using SSE, the remote server is down or the URL is incorrect.</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                                    <td style={{ padding: '10px' }}><code>Timeout</code></td>
                                    <td style={{ padding: '10px' }}>The server took too long to initialize (max 10s allowed).</td>
                                </tr>
                            </tbody>
                        </table>
                    </section>

                    <section>
                        <h2>3. The "Standard Output" Trap</h2>
                        <p>
                            If your server is using the <code>stdio</code> transport, **do not use `console.log()`** for debugging! MCP uses <code>stdout</code> for protocol messages. Any extra strings you print will corrupt the JSON stream and cause the client to disconnect.
                        </p>
                        <div className="highlight-box" style={{ background: 'rgba(239, 68, 68, 0.05)', borderLeft: '4px solid #ef4444' }}>
                            <strong>Solution:</strong> Use <code>console.error()</code> or a dedicated logging library like `winston` that writes to a separate file.
                        </div>
                    </section>

                    <section>
                        <h2>4. Testing with the MCP Inspector</h2>
                        <p>
                            Anthropic provides a developer tool called the **MCP Inspector**. It acts as a mock client and allows you to test your server in isolation.
                        </p>
                        <code className="code-snippet">
                            npx @modelcontextprotocol/inspector node path/to/server/index.js
                        </code>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Need to debug protocol-level messages directly? Explore the message lifecycle guide.
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
