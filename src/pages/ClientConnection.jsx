import { useState, useEffect } from 'react';
import './ClientConnection.css';

export default function ClientConnection() {
    const [aiMode, setAiMode] = useState(false);
    const [aiLabel, setAiLabel] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'error'
    const [errorMessage, setErrorMessage] = useState('');

    // Form State
    const [formData, setFormData] = useState({
        serverName: '',
        transport: 'stdio',
        command: '',
        args: [''],
        env: [{ key: '', value: '' }],
        url: '',
        headers: [{ key: '', value: '' }]
    });

    const [copySuccess, setCopySuccess] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    // Sync Preview
    const generatePreview = () => {
        const serverConfig = {
            transport: formData.transport
        };

        if (formData.transport === 'stdio') {
            serverConfig.command = formData.command;
            serverConfig.args = formData.args.filter(a => a.trim() !== '');
            const envObj = {};
            formData.env.forEach(item => {
                if (item.key.trim()) envObj[item.key] = item.value;
            });
            if (Object.keys(envObj).length > 0) serverConfig.env = envObj;
        } else {
            serverConfig.url = formData.url;
            const headersObj = {};
            formData.headers.forEach(item => {
                if (item.key.trim()) headersObj[item.key] = item.value;
            });
            if (Object.keys(headersObj).length > 0) serverConfig.headers = headersObj;
        }

        return JSON.stringify({
            mcpServers: {
                [formData.serverName || "your-server-name"]: serverConfig
            }
        }, null, 2);
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(generatePreview());
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([generatePreview()], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'client_connection_config.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 2000);
    };

    const handleAiGenerate = async () => {
        if (!aiLabel.trim()) return;
        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('https://n8n-server-7530.onrender.com/webhook/client-generator', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: aiLabel, mode: 'client-connection' }),
            });

            const data = await response.json();
            if (response.ok && !data.error) {
                const result = data.output || data;
                const parsed = typeof result === 'string' ? JSON.parse(result) : result;

                let config = parsed;
                let sName = formData.serverName;
                if (parsed.mcpServers) {
                    sName = Object.keys(parsed.mcpServers)[0];
                    config = parsed.mcpServers[sName];
                }

                setFormData({
                    serverName: sName || 'generated-server',
                    transport: config.transport || 'stdio',
                    command: config.command || '',
                    args: config.args || [''],
                    env: config.env ? Object.entries(config.env).map(([k, v]) => ({ key: k, value: v })) : [{ key: '', value: '' }],
                    url: config.url || '',
                    headers: config.headers ? Object.entries(config.headers).map(([k, v]) => ({ key: k, value: v })) : [{ key: '', value: '' }]
                });
                setAiMode(false);
                setStatus('idle');
            } else {
                const msg = data.error || "Failed to generate configuration";
                setErrorMessage(`${msg}. Please try again after some time.`);
                setStatus('error');
            }
        } catch (error) {
            console.error("AI Generation failed:", error);
            setErrorMessage("A connection error occurred. Please try again after some time.");
            setStatus('error');
        }
    };

    // Generic list handlers
    const addListItem = (field) => setFormData(prev => ({ ...prev, [field]: [...prev[field], field === 'args' ? '' : { key: '', value: '' }] }));
    const removeListItem = (field, index) => setFormData(prev => ({ ...prev, [field]: prev[field].filter((_, i) => i !== index) }));
    const updateListItem = (field, index, value, keyField = null) => {
        const newList = [...formData[field]];
        if (keyField) {
            newList[index][keyField] = value;
        } else {
            newList[index] = value;
        }
        setFormData(prev => ({ ...prev, [field]: newList }));
    };

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
                        Standardize and export your MCP client configurations. Sync with Claude Desktop, IDEs, or custom tools.
                    </p>

                    <button className={`btn-ai-toggle ${aiMode ? 'active' : ''}`} onClick={() => { setAiMode(!aiMode); setStatus('idle'); }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        {aiMode ? "Switch to Manual" : "Generate from Text (AI)"}
                    </button>
                </header>

                <div className="connection__layout">
                    <div className="connection__form-area">
                        {aiMode ? (
                            <div className="ai-input-card animate-fade-in">
                                {status === 'error' ? (
                                    <div className="loader-screen error-state inline-error">
                                        <div className="error-icon">⚠️</div>
                                        <h3>Generation Error</h3>
                                        <p>{errorMessage}</p>
                                        <button className="btn btn-secondary mt-20" onClick={() => setStatus('idle')}>Try Again</button>
                                    </div>
                                ) : (
                                    <>
                                        <h3>Describe your Client Connection</h3>
                                        <textarea
                                            className="form-control"
                                            rows="10"
                                            placeholder="E.g., I want to connect a local weather server running at http://localhost:3000 with an API key header."
                                            value={aiLabel}
                                            onChange={(e) => setAiLabel(e.target.value)}
                                        />
                                        <button className="btn btn-primary btn-glow" onClick={handleAiGenerate} disabled={status === 'loading' || !aiLabel.trim()}>
                                            {status === 'loading' ? "Generating..." : "Generate Magic Settings"}
                                        </button>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="form-card animate-fade-in">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label>Server Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="weather-server"
                                            value={formData.serverName}
                                            onChange={(e) => setFormData({ ...formData, serverName: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Transport Type</label>
                                        <select
                                            className="form-control"
                                            value={formData.transport}
                                            onChange={(e) => setFormData({ ...formData, transport: e.target.value })}
                                        >
                                            <option value="stdio">STDIO</option>
                                            <option value="http">HTTP</option>
                                        </select>
                                    </div>
                                </div>

                                {formData.transport === 'stdio' ? (
                                    <div className="transport-fields animate-fade-in">
                                        <div className="form-group">
                                            <label>Command (Full Path/Executable)</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="node"
                                                value={formData.command}
                                                onChange={(e) => setFormData({ ...formData, command: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-group dynamic-list">
                                            <div className="list-header">
                                                <label>Arguments (Args)</label>
                                                <button className="btn-add" onClick={() => addListItem('args')}>+ Add</button>
                                            </div>
                                            {formData.args.map((arg, i) => (
                                                <div key={i} className="list-item">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={arg}
                                                        onChange={(e) => updateListItem('args', i, e.target.value)}
                                                    />
                                                    {formData.args.length > 1 && (
                                                        <button className="btn-remove" onClick={() => removeListItem('args', i)}>×</button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="form-group dynamic-list">
                                            <div className="list-header">
                                                <label>Environment Variables</label>
                                                <button className="btn-add" onClick={() => addListItem('env')}>+ Add</button>
                                            </div>
                                            {formData.env.map((item, i) => (
                                                <div key={i} className="list-item flex-row">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="KEY"
                                                        value={item.key}
                                                        onChange={(e) => updateListItem('env', i, e.target.value, 'key')}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="VALUE"
                                                        value={item.value}
                                                        onChange={(e) => updateListItem('env', i, e.target.value, 'value')}
                                                    />
                                                    {formData.env.length > 0 && (
                                                        <button className="btn-remove" onClick={() => removeListItem('env', i)}>×</button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="transport-fields animate-fade-in">
                                        <div className="form-group">
                                            <label>Server URL</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="http://localhost:3000/mcp"
                                                value={formData.url}
                                                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-group dynamic-list">
                                            <div className="list-header">
                                                <label>Custom Headers</label>
                                                <button className="btn-add" onClick={() => addListItem('headers')}>+ Add</button>
                                            </div>
                                            {formData.headers.map((item, i) => (
                                                <div key={i} className="list-item flex-row">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Header-Name"
                                                        value={item.key}
                                                        onChange={(e) => updateListItem('headers', i, e.target.value, 'key')}
                                                    />
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Value"
                                                        value={item.value}
                                                        onChange={(e) => updateListItem('headers', i, e.target.value, 'value')}
                                                    />
                                                    {formData.headers.length > 0 && (
                                                        <button className="btn-remove" onClick={() => removeListItem('headers', i)}>×</button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className="connection__preview-area">
                        {status === 'loading' ? (
                            <div className="output-card code-view skeleton-card animate-pulse">
                                <div className="output-card__header">
                                    <div className="skeleton-tab"></div>
                                    <div className="output-card__controls">
                                        <div className="skeleton-icon"></div>
                                        <div className="skeleton-icon"></div>
                                    </div>
                                </div>
                                <div className="output-card__body">
                                    <div className="skeleton-line short"></div>
                                    <div className="skeleton-line medium"></div>
                                    <div className="skeleton-line long"></div>
                                    <div className="skeleton-line medium"></div>
                                    <div className="skeleton-line short"></div>
                                </div>
                            </div>
                        ) : (
                            <div className="output-card code-view sticky-preview">
                                <div className="output-card__header">
                                    <div className="output-card__tabs">
                                        <span className="active">client_connection_config.json</span>
                                    </div>
                                    <div className="output-card__controls">
                                        <div className="btn-wrapper">
                                            <button className="btn-icon" onClick={handleCopy} title="Copy Code">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                                </svg>
                                            </button>
                                            {copySuccess && <span className="action-tooltip">Copied!</span>}
                                        </div>
                                        <div className="btn-wrapper">
                                            <button className="btn-icon" onClick={handleDownload} title="Download File">
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                                    <polyline points="7 10 12 15 17 10"></polyline>
                                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                                </svg>
                                            </button>
                                            {downloadSuccess && <span className="action-tooltip">Downloaded!</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="output-card__body">
                                    <pre><code>{generatePreview()}</code></pre>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
