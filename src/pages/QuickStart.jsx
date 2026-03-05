import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function QuickStart() {
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
                    <span className="topic-badge">Tutorial</span>
                    <h1 className="topic-title">
                        Quick <span className="text-gradient">Start Guide</span>
                    </h1>
                    <p className="topic-lead">
                        Get your first MCP server up and running in under 5 minutes using our simplified generation and testing workflow.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>Prerequisites</h2>
                        <p>Before you begin, ensure your development environment is ready for MCP-based projects. You'll need:</p>
                        <ul className="step-list">
                            <li><strong>Node.js:</strong> Version 18.0 or higher (required for protocol support).</li>
                            <li><strong>MCP Studio Account:</strong> To validate and save your generated server blueprints.</li>
                            <li><strong>Claude Desktop:</strong> The standard testing ground for MCP servers.</li>
                            <li><strong>Environment Variables:</strong> Familiarity with how to set keys/tokens on your OS.</li>
                        </ul>
                    </section>

                    <section className="highlight-box">
                        <h3>Step 1: Architect your Server</h3>
                        <p>
                            Start by defining what your server does. Use the <Link to="/generator" className="inline-link">MCP Generator</Link> to describe your tools in natural language.
                        </p>
                        <p>
                            <strong>Example:</strong> "I want a server that can search my Notion workspace and create new pages. It needs tools for `search_notion` and `create_notion_page`."
                        </p>
                        <p>
                            Our generator creates the JSON-RPC schema, ensuring your tool names and input parameters are valid.
                        </p>
                    </section>

                    <section>
                        <h2>Step 2: Refine and Export</h2>
                        <p>
                            Review the generated tool definitions. AI models rely heavily on the <code>description</code> field to understand context.
                        </p>
                        <div className="pro-tip" style={{ padding: '15px', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', marginBottom: '20px', borderLeft: '3px solid var(--accent)' }}>
                            <strong>Pro Tip:</strong> Be explicit! Instead of "Search docs", use "Search through technical documentation for terms matching the user's query."
                        </div>
                        <p>
                            Once satisfied, click **Download Config** to save your `mcp-config.json`.
                        </p>
                    </section>

                    <section>
                        <h2>Step 3: Client Connection</h2>
                        <p>
                            To test your server with Claude Desktop, you must update its configuration file:
                        </p>
                        <ul className="path-list" style={{ marginBottom: '20px' }}>
                            <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
                            <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                        </ul>
                        <p>Register your server under the <code>mcpServers</code> key:</p>
                        <pre className="code-snippet">
                            {`"mcpServers": {
  "notion-toolkit": {
    "command": "node",
    "args": ["C:/path/to/your/server/index.js"],
    "env": {
      "NOTION_API_KEY": "secret-token-here"
    }
  }
}`}
                        </pre>
                    </section>

                    <section>
                        <h2>Step 4: Live Verification</h2>
                        <p>
                            Restart Claude Desktop. You should see a "tool" icon in the input bar. Ask Claude to <em>"Use correctly the notion-toolkit to search for my project notes."</em> to verify the connection.
                        </p>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Now that you know how to start, explore our comprehensive technical guide to see the underlying architecture.
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
