import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandableTextarea from '../components/ExpandableTextarea';
import './Generator.css';

export default function Generator() {
    const navigate = useNavigate();
    const [mode, setMode] = useState('basic'); // 'basic' or 'advanced'
    const [basicPrompt, setBasicPrompt] = useState('');
    const [advancedServerName, setAdvancedServerName] = useState('');
    const [tools, setTools] = useState([{ id: 1, name: '', description: '', inputSchema: '' }]);
    const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'output', 'error'
    const [generatedOutput, setGeneratedOutput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [copySuccess, setCopySuccess] = useState(false);
    const [downloadSuccess, setDownloadSuccess] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [status]);

    const addTool = () => {
        setTools([{ id: Date.now(), name: '', description: '', inputSchema: '' }, ...tools]);
    };

    const updateTool = (index, field, value) => {
        const newTools = [...tools];
        newTools[index][field] = value;
        setTools(newTools);
    };

    const removeTool = (index) => {
        if (tools.length <= 1) return;
        const newTools = tools.filter((_, i) => i !== index);
        setTools(newTools);
    };

    const handleCopy = () => {
        if (!generatedOutput) return;
        navigator.clipboard.writeText(generatedOutput);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
    };

    const getDynamicFilename = () => {
        if (!generatedOutput) return 'mcp-server-config.json';
        try {
            const parsed = JSON.parse(generatedOutput);
            const serverName = parsed.name || (mode === 'advanced' ? advancedServerName : '');
            if (serverName) return `${serverName.toLowerCase().replace(/\s+/g, '-')}.json`;
        } catch (e) {
            if (mode === 'advanced' && advancedServerName) {
                return `${advancedServerName.toLowerCase().replace(/\s+/g, '-')}.json`;
            }
        }
        return 'mcp-server-config.json';
    };

    const handleDownload = () => {
        if (!generatedOutput) return;
        
        const filename = getDynamicFilename();
        const blob = new Blob([generatedOutput], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 2000);
    };

    const handleGenerate = async () => {
        if (!basicPrompt.trim()) return;

        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('https://n8n-server-7530.onrender.com/webhook/server-generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ description: basicPrompt, mode: 'basic' }),
            });

            const data = await response.json();
            if (response.ok && !data.error) {
                const result = data.output || data;
                setGeneratedOutput(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
                setTimeout(() => setStatus('output'), 1000);
            } else {
                const msg = data.error || "Failed to generate server definition";
                setErrorMessage(`${msg}. Please try again after some time.`);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("A connection error occurred. Please try again after some time.");
            setStatus('error');
        }
    };

    const handleAdvancedGenerate = async () => {
        if (!advancedServerName.trim()) return;

        const serverVersion = document.getElementById('server-version')?.value;
        const serverDesc = document.getElementById('server-desc')?.value;

        const payload = {
            mode: 'advanced',
            server: {
                name: advancedServerName,
                version: serverVersion,
                description: serverDesc
            },
            tools: tools.map(tool => ({
                name: tool.name,
                description: tool.description,
                inputSchema: tool.inputSchema
            }))
        };

        setStatus('loading');
        setErrorMessage('');
        try {
            const response = await fetch('https://n8n-server-7530.onrender.com/webhook/server-generate', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const data = await response.json();
            if (response.ok && !data.error) {
                const result = data.output || data;
                setGeneratedOutput(typeof result === 'string' ? result : JSON.stringify(result, null, 2));
                setTimeout(() => setStatus('output'), 1000);
            } else {
                const msg = data.error || "Failed to generate advanced server definition";
                setErrorMessage(`${msg}. Please try again after some time.`);
                setStatus('error');
            }
        } catch (error) {
            console.error('Error:', error);
            setErrorMessage("A connection error occurred. Please try again after some time.");
            setStatus('error');
        }
    };

    if (status === 'loading') {
        return (
            <div className="generator-page">
                <div className="generator__bg">
                    <div className="generator__blob generator__blob--1"></div>
                    <div className="generator__blob generator__blob--2"></div>
                </div>
                <div className="container generator__status-container">
                    <div className="loader-screen">
                        <div className="loader-circles">
                            <div className="circle"></div>
                            <div className="circle"></div>
                            <div className="circle"></div>
                        </div>
                        <h2>Architecting your MCP Server...</h2>
                        <p>Our AI is processing your requirements and building the schema structure.</p>
                    </div>
                </div>
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="generator-page">
                <div className="generator__bg">
                    <div className="generator__blob generator__blob--1"></div>
                    <div className="generator__blob generator__blob--2"></div>
                </div>
                <div className="container generator__status-container">
                    <div className="loader-screen error-state">
                        <div className="error-icon">⚠️</div>
                        <h2>Generation Error</h2>
                        <p>{errorMessage}</p>
                        <button className="btn btn-secondary mt-20" onClick={() => setStatus('idle')}>Try Again</button>
                    </div>
                </div>
            </div>
        );
    }

    if (status === 'output') {
        return (
            <div className="generator-page">
                <div className="generator__bg">
                    <div className="generator__blob generator__blob--1"></div>
                    <div className="generator__blob generator__blob--2"></div>
                </div>
                <div className="container generator__container animate-fade-in">
                    <header className="generator__header">
                        <div className="success-badge">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h1 className="generator__title">Server Definition <span className="text-gradient">Complete</span></h1>
                        <p className="generator__subtitle">Your MCP Server configuration has been successfully generated.</p>
                    </header>

                    <div className="output-container">
                        <div className="output-card code-view animate-fade-in">
                            <div className="output-card__header">
                                <div className="output-card__tabs">
                                    <span className="active">{getDynamicFilename()}</span>
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
                                    <div className="btn-wrapper">
                                        <button
                                            className="btn btn-primary btn-small btn-validate"
                                            onClick={() => navigate('/validator', { state: { serverData: generatedOutput } })}
                                        >
                                            Validate & Test
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="output-card__body">
                                <pre><code>{generatedOutput}</code></pre>
                            </div>
                        </div>

                        <div className="generator__actions center">
                            <button className="btn btn-primary" onClick={() => setStatus('idle')}>Create Another</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="generator-page">
            <div className="generator__bg">
                <div className="generator__blob generator__blob--1"></div>
                <div className="generator__blob generator__blob--2"></div>
                <div className="generator__grid"></div>
            </div>

            <div className="container generator__container">
                <header className="generator__header">
                    <h1 className="generator__title">
                        Server <span className="text-gradient">Definition</span>
                    </h1>
                    <p className="generator__subtitle">
                        Build your Model Context Protocol server in seconds. Choose between our AI-powered natural language builder or configure the raw schema manually.
                    </p>
                </header>

                <main className="generator__main">
                    <div className="generator__tabs">
                        <button
                            className={`generator__tab ${mode === 'basic' ? 'active' : ''} `}
                            onClick={() => setMode('basic')}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Basic (AI Assisted)
                        </button>
                        <button
                            className={`generator__tab ${mode === 'advanced' ? 'active' : ''} `}
                            onClick={() => setMode('advanced')}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                            Advanced (Form Builder)
                        </button>
                    </div>

                    <div className="generator__content">
                        {mode === 'basic' && (
                            <div className="generator__basic-mode animate-fade-in">
                                <div className="form-group">
                                    <label htmlFor="basic-prompt">Describe your MCP Server in simple English</label>
                                    <ExpandableTextarea
                                        id="basic-prompt"
                                        title="Server Description"
                                        placeholder="E.g., I want an MCP server that lets an LLM search my local file system and read markdown files."
                                        rows="8"
                                        value={basicPrompt}
                                        onChange={(e) => setBasicPrompt(e.target.value)}
                                    />
                                </div>
                                <div className="generator__actions">
                                    <button
                                        className="btn btn-primary btn-glow"
                                        onClick={handleGenerate}
                                        disabled={!basicPrompt.trim()}
                                        style={!basicPrompt.trim() ? { opacity: 0.5, cursor: 'not-allowed', filter: 'none' } : {}}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                                            <path d="M21 3v5h-5"></path>
                                        </svg>
                                        Generate MCP JSON
                                    </button>
                                </div>
                            </div>
                        )}

                        {mode === 'advanced' && (
                            <div className="generator__advanced-mode animate-fade-in">
                                <div className="form-grid">
                                    <div className="form-group">
                                        <label htmlFor="server-name">Server Name</label>
                                        <input
                                            type="text"
                                            id="server-name"
                                            className="form-control"
                                            placeholder="my-mcp-server"
                                            value={advancedServerName}
                                            onChange={(e) => setAdvancedServerName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="server-version">Version</label>
                                        <input type="text" id="server-version" className="form-control" placeholder="1.0.0" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="server-desc">Description</label>
                                        <input type="text" id="server-desc" className="form-control" placeholder="Provides access to local file system." />
                                    </div>
                                </div>

                                <div className="generator__section">
                                    <div className="generator__section-header">
                                        <h3>Tools</h3>
                                        <button className="btn btn-secondary btn-small" onClick={addTool}>+ Add Tool</button>
                                    </div>

                                    <div className="generator__tools-list">
                                        {tools.map((tool, index) => (
                                            <div className="generator__card" key={tool.id}>
                                                <div className="generator__card-header">
                                                    <h4>Tool #{tools.length - index}</h4>
                                                    {tools.length > 1 && (
                                                        <button className="btn-remove" onClick={() => removeTool(index)}>
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                            </svg>
                                                        </button>
                                                    )}
                                                </div>
                                                <div className="form-grid">
                                                    <div className="form-group">
                                                        <label>Tool Name</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={tool.name}
                                                            onChange={(e) => updateTool(index, 'name', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Tool Description</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            value={tool.description}
                                                            onChange={(e) => updateTool(index, 'description', e.target.value)}
                                                        />
                                                    </div>
                                                    <div className="form-group col-span-2">
                                                        <label>Input Schema (JSON)</label>
                                                        <ExpandableTextarea
                                                            title={`Tool Schema — ${tool.name || 'Untitled Tool'}`}
                                                            rows="4"
                                                            value={tool.inputSchema}
                                                            onChange={(e) => updateTool(index, 'inputSchema', e.target.value)}
                                                            placeholder='{"type": "object", "properties": {...}}'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="generator__actions">
                                    <button
                                        className="btn btn-primary btn-glow"
                                        onClick={handleAdvancedGenerate}
                                        disabled={!advancedServerName.trim()}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                                            <path d="M21 3v5h-5"></path>
                                        </svg>
                                        Generate MCP JSON
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
