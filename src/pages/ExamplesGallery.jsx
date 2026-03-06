import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function ExamplesGallery() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const downloadConfig = (example) => {
        const config = {
            mcpServers: {
                [example.id]: {
                    command: example.command,
                    args: example.args,
                    env: example.env || {}
                }
            }
        };
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${example.id}-config.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const examples = [
        {
            id: 'sqlite',
            title: 'SQLite Local Database',
            description: 'The standard for local data persistence. Query SQLite databases with natural language safely.',
            tags: ['Database', 'Local', 'Standard'],
            icon: '🗄️',
            color: 'rgb(12 143 205)',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-sqlite', '--db', 'path/to/database.db']
        },
        {
            id: 'github',
            title: 'GitHub Operations',
            description: 'Manage repositories, search code, and handle PRs. The essential tool for AI-assisted coding.',
            tags: ['API', 'Git', 'Development'],
            icon: '🐙',
            color: 'rgb(170 115 250)',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-github'],
            env: { GITHUB_PERSONAL_ACCESS_TOKEN: 'YOUR_TOKEN_HERE' }
        },
        {
            id: 'brave-search',
            title: 'Brave Search',
            description: 'Give your AI real-time web access. Search the internet without trackers or privacy compromises.',
            tags: ['Search', 'Web', 'Privacy'],
            icon: '🦁',
            color: '#ff1b2d',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-brave-search'],
            env: { BRAVE_API_KEY: 'YOUR_KEY_HERE' }
        },
        {
            id: 'google-drive',
            title: 'Google Drive Sync',
            description: 'Expose your documents and spreadsheets. Perfect for RAG and organizational knowledge tools.',
            tags: ['Storage', 'Cloud', 'Content'],
            icon: '📁',
            color: '#4285f4',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-gdrive']
        },
        {
            id: 'memory',
            title: 'Knowledge Graph / Memory',
            description: 'A stateful memory server that allows AI to persist long-term context across multiple sessions.',
            tags: ['Advanced', 'Stateful', 'Graph'],
            icon: '🧠',
            color: '#ec4899',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-memory']
        },
        {
            id: 'fetch',
            title: 'URL Web Fetch',
            description: 'Dynamic web content extraction. Converts any webpage into clean markdown for AI processing.',
            tags: ['Web', 'Extraction', 'Utility'],
            icon: '🌐',
            color: '#10b981',
            command: 'npx',
            args: ['-y', '@modelcontextprotocol/server-fetch']
        }
    ];

    return (
        <div className="topic-page">
            <div className="topic-page__bg">
                <div className="topic-page__blob topic-page__blob--1"></div>
                <div className="topic-page__blob topic-page__blob--2"></div>
                <div className="topic-page__grid"></div>
            </div>

            <main className="topic-container container">
                <header className="topic-header">
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </Link>
                    <span className="topic-badge">Real-World</span>
                    <h1 className="topic-title">
                        MCP <span className="text-gradient">Templates Gallery</span>
                    </h1>
                    <p className="topic-lead">
                        Dive into production-ready MCP server implementations spanning databases, file systems, and major cloud APIs.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>Why Study Examples?</h2>
                        <p>
                            Architecture decisions become clearer when viewing real code. The examples below demonstrate how to handle authentication securely, define strict JSON schemas, and structure the server logic for maximum reliability.
                        </p>
                    </section>

                    <section className="highlight-box">
                        <h3>Popular Servers</h3>
                        <div className="feature-list" style={{ marginTop: '20px' }}>
                            {examples.map((ex, idx) => (
                                <div key={idx} className="feature-item" style={{
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    flexWrap: 'wrap',
                                    gap: '20px'
                                }}>
                                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flex: 1 }}>
                                        <span className="feature-icon" style={{ fontSize: '2.5rem' }}>{ex.icon}</span>
                                        <div>
                                            <h4 style={{ color: ex.color, marginBottom: '4px' }}>{ex.title}</h4>
                                            <p style={{ marginBottom: '8px', fontSize: '14px', opacity: 0.8 }}>{ex.description}</p>
                                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                                {ex.tags.map(tag => (
                                                    <span key={tag} style={{
                                                        fontSize: '10px',
                                                        padding: '2px 8px',
                                                        borderRadius: '12px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        border: '1px solid rgba(255,255,255,0.1)'
                                                    }}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => downloadConfig(ex)}
                                        style={{ padding: '8px 16px', fontSize: '12px' }}
                                    >
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: '8px' }}>
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" />
                                        </svg>
                                        Download Template
                                    </button>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2>How to use these templates</h2>
                        <ol className="step-list">
                            <li>Download the <code>.json</code> template for the server you want to use.</li>
                            <li>Open your Claude Desktop configuration file (see the <Link to="/learn/claude-integration" className="inline-link">Integration Guide</Link>).</li>
                            <li>Copy and paste the <code>mcpServers</code> section from the downloaded file into your configuration.</li>
                            <li>Update any placeholder values (like <code>YOUR_TOKEN_HERE</code>) with your actual credentials.</li>
                            <li>Restart your MCP Client to see the new tools in action.</li>
                        </ol>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Create your own?</h3>
                                <p className="cta-banner__text">
                                    Inspired? Start generating your custom integration using our MCP Server Generator right now.
                                </p>
                            </div>
                            <Link to="/generator" className="btn btn-primary cta-banner__btn">
                                Open Generator
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
