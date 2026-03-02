import { useState } from 'react';
import './ClientConnection.css';

export default function ClientConnection() {
    const [clientType, setClientType] = useState('claude'); // 'claude', 'ide', 'custom'

    return (
        <div className="connection-page">
            <div className="connection__bg">
                <div className="connection__blob connection__blob--1"></div>
                <div className="connection__blob connection__blob--2"></div>
                <div className="connection__grid"></div>
            </div>

            <div className="container connection__container animate-fade-in">
                <header className="connection__header">
                    <h1 className="connection__title">
                        Client <span className="text-gradient">Connection</span>
                    </h1>
                    <p className="connection__subtitle">
                        Enable your AI assistant to communicate with your locally running MCP servers.
                        Follow the steps below to establish a secure link.
                    </p>
                </header>

                <div className="connection__content">
                    <div className="connection__sidebar">
                        <div className="connection__steps">
                            <div className={`connection-step ${clientType === 'claude' ? 'active' : ''}`} onClick={() => setClientType('claude')}>
                                <div className="step-num">01</div>
                                <div className="step-info">
                                    <h3>Claude Desktop</h3>
                                    <p>Configure Claude for local tools</p>
                                </div>
                            </div>
                            <div className={`connection-step ${clientType === 'ide' ? 'active' : ''}`} onClick={() => setClientType('ide')}>
                                <div className="step-num">02</div>
                                <div className="step-info">
                                    <h3>IDE Extensions</h3>
                                    <p>Connect with VS Code or Cursor</p>
                                </div>
                            </div>
                            <div className={`connection-step ${clientType === 'custom' ? 'active' : ''}`} onClick={() => setClientType('custom')}>
                                <div className="step-num">03</div>
                                <div className="step-info">
                                    <h3>Custom Client</h3>
                                    <p>Implement your own connection</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="connection__main">
                        <div className="connection-card">
                            {clientType === 'claude' && (
                                <div className="client-guide animate-fade-in">
                                    <h2>Claude Desktop Configuration</h2>
                                    <p>To connect your MCP server to Claude Desktop, add your server configuration to the user settings file.</p>

                                    <div className="guide-box">
                                        <h4>Configuration Path</h4>
                                        <code className="path-code">~/Library/Application Support/Claude/claude_desktop_config.json</code>
                                    </div>

                                    <div className="guide-box">
                                        <h4>Add to Settings</h4>
                                        <pre className="code-snippet">
                                            <code>{`{
  "mcpServers": {
    "your-server-name": {
      "command": "node",
      "args": ["/path/to/your/server/index.js"]
    }
  }
}`}</code>
                                        </pre>
                                    </div>

                                    <div className="guide-actions">
                                        <button className="btn btn-primary btn-small">Restart Claude</button>
                                        <button className="btn btn-secondary btn-small">Verify Connection</button>
                                    </div>
                                </div>
                            )}

                            {clientType === 'ide' && (
                                <div className="client-guide animate-fade-in">
                                    <h2>IDE Extension Setup</h2>
                                    <p>Connect your MCP server directly to your development environment.</p>
                                    <div className="ide-options">
                                        <div className="ide-item">
                                            <div className="ide-icon">VS</div>
                                            <span>VS Code</span>
                                        </div>
                                        <div className="ide-item">
                                            <div className="ide-icon">CU</div>
                                            <span>Cursor</span>
                                        </div>
                                        <div className="ide-item">
                                            <div className="ide-icon">IN</div>
                                            <span>IntelliJ</span>
                                        </div>
                                    </div>
                                    <div className="guide-box">
                                        <h4>Quick Setup</h4>
                                        <p>Install the "MCP Toolkit" from your IDE's marketplace and point it to your locally generated schema file.</p>
                                    </div>
                                </div>
                            )}

                            {clientType === 'custom' && (
                                <div className="client-guide animate-fade-in">
                                    <h2>Custom Implementation</h2>
                                    <p>Integrate the Model Context Protocol into your own application or custom tools.</p>
                                    <div className="guide-box">
                                        <h4>SDK Installation</h4>
                                        <pre className="code-snippet">
                                            <code>npm install @modelcontextprotocol/sdk</code>
                                        </pre>
                                    </div>
                                    <div className="guide-box">
                                        <h4>Initialize Client</h4>
                                        <pre className="code-snippet">
                                            <code>{`import { Client } from "@modelcontextprotocol/sdk";

const client = new Client({
  name: "custom-client",
  version: "1.0.0"
});`}</code>
                                        </pre>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
