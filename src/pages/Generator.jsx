import { useState, useEffect } from 'react';
import './Generator.css';

export default function Generator() {
    const [mode, setMode] = useState('basic'); // 'basic' or 'advanced'

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                        MCP <span className="text-gradient">Generator</span>
                    </h1>
                    <p className="generator__subtitle">
                        Build your Model Context Protocol server in seconds. Choose between our AI-powered natural language builder or configure the raw schema manually.
                    </p>
                </header>

                <main className="generator__main">
                    <div className="generator__tabs">
                        <button
                            className={`generator__tab ${mode === 'basic' ? 'active' : ''}`}
                            onClick={() => setMode('basic')}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                            </svg>
                            Basic (AI Assisted)
                        </button>
                        <button
                            className={`generator__tab ${mode === 'advanced' ? 'active' : ''}`}
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
                                    <textarea
                                        id="basic-prompt"
                                        className="form-control"
                                        placeholder="E.g., I want an MCP server that lets an LLM search my local file system and read markdown files. It should have a tool called 'search_files' and 'read_file'."
                                        rows="8"
                                    ></textarea>
                                </div>
                                <div className="generator__actions">
                                    <button className="btn btn-primary btn-glow">
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
                                        <input type="text" id="server-name" className="form-control" placeholder="my-mcp-server" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="server-version">Version</label>
                                        <input type="text" id="server-version" className="form-control" placeholder="1.0.0" />
                                    </div>
                                    <div className="form-group col-span-2">
                                        <label htmlFor="server-desc">Description</label>
                                        <input type="text" id="server-desc" className="form-control" placeholder="Provides access to local file system and search functionalities." />
                                    </div>
                                </div>

                                <div className="generator__section">
                                    <div className="generator__section-header">
                                        <h3>Tools</h3>
                                        <button className="btn btn-secondary btn-small">
                                            + Add Tool
                                        </button>
                                    </div>
                                    <div className="generator__card">
                                        <div className="form-grid">
                                            <div className="form-group">
                                                <label>Tool Name</label>
                                                <input type="text" className="form-control" placeholder="search_docs" />
                                            </div>
                                            <div className="form-group">
                                                <label>Tool Description</label>
                                                <input type="text" className="form-control" placeholder="Search through local documentation" />
                                            </div>
                                            <div className="form-group col-span-2">
                                                <label>Input Schema (JSON string)</label>
                                                <textarea className="form-control schema-input" rows="4" placeholder='{ "type": "object", "properties": { "query": { "type": "string" } } }'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="generator__actions">
                                    <button className="btn btn-primary btn-glow">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                        Generate & Dowload JSON
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
