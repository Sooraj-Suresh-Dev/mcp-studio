import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function ClaudeIntegration() {
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
                    <span className="topic-badge">Integration</span>
                    <h1 className="topic-title">
                        Claude <span className="text-gradient">Desktop Setup</span>
                    </h1>
                    <p className="topic-lead">
                        Step-by-step instructions for binding your MCP server to Anthropic’s Claude Desktop client and testing in production environments.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>Locating the Configuration File</h2>
                        <p>
                            Claude Desktop is a "Client" in the MCP ecosystem. To connect it to your "Servers," you must edit its central configuration file. The location depends on your platform:
                        </p>
                        <ul className="path-list">
                            <li><strong>Windows:</strong> <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
                            <li><strong>macOS:</strong> <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                            <li><strong>Linux:</strong> <code>~/.config/Claude/claude_desktop_config.json</code></li>
                        </ul>
                    </section>

                    <section className="highlight-box">
                        <h3>Understanding the `stdio` Transport</h3>
                        <p>
                            Claude Desktop primarily uses **Standard Input/Output (stdio)** to communicate. When Claude starts, it spawns your server as a child process and sends JSON-RPC messages to its `stdin` while listening for responses on its `stdout`.
                        </p>
                    </section>

                    <section>
                        <h2>The `mcpServers` Structure</h2>
                        <p>
                            Your configuration file should contain an <code>mcpServers</code> object. Each key in this object is a unique ID for a server.
                        </p>
                        <pre className="code-snippet">
                            {`{
  "mcpServers": {
    "my-custom-server": {
      "command": "node",
      "args": ["/absolute/path/to/server/index.js"],
      "env": {
        "API_KEY": "your_key_here",
        "DEBUG": "true"
      }
    }
  }
}`}
                        </pre>
                        <ul className="step-list">
                            <li><strong>command:</strong> The executable to run (e.g., `node`, `python`, `npx`).</li>
                            <li><strong>args:</strong> An array of arguments passed to the command. ⚠️ Always use absolute paths!</li>
                            <li><strong>env:</strong> Key-value pairs of environment variables required by your server logic.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>Testing & Verification</h2>
                        <p>
                            After saving the file, **restart Claude Desktop**. Look for the "hammer" or "plug" icon in the message input area. If the icon appears, Claude has successfully initialized your server and discovered its tools.
                        </p>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Curious how Claude Desktop communicates under the hood? Explore our technical architecture guide.
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
