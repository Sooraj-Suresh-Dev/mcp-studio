import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function WhatIsMCP() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="topic-page">
            {/* Ambient Background */}
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
                    <span className="topic-badge">Beginner Guide</span>
                    <h1 className="topic-title">
                        What is <span className="text-gradient">MCP?</span>
                    </h1>
                    <p className="topic-lead">
                        Model Context Protocol (MCP) is the universal bridge connecting AI models to the real-world tools and data they need to be truly useful.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>The "Brains in a Jar" Problem</h2>
                        <p>
                            Large Language Models (LLMs) are incredibly smart, but traditionally, they operate in a vacuum. They are trained on vast datasets but remain "stateless"—they can't see your local files, check your current calendar, or query your company's real-time database. Every integration previously required custom, bespoke code that was brittle and non-portable.
                        </p>
                        <p>
                            Before MCP, if you wanted an AI to use a new tool, a developer had to build a specific integration for that specific model. If you switched from one AI provider to another, you often had to rewrite the entire integration layer. This created a fragmented ecosystem where powerful tools were locked behind specific silos.
                        </p>
                    </section>

                    <section className="highlight-box">
                        <h3>The Solution: An Open Standard</h3>
                        <p>
                            <strong>Model Context Protocol (MCP)</strong>, introduced by Anthropic in late 2024, is an open standard that solves this fragmentation. It's often called **"USB for AI"**. Just as the USB standard allowed any peripheral to plug into any computer without custom drivers, MCP allows any AI (the "Client") to plug into any data source or tool (the "Server") using a unified language.
                        </p>
                    </section>

                    <section>
                        <h2>How it Works: Under the Hood</h2>
                        <p>
                            MCP uses **JSON-RPC 2.0** as its communication layer. This means that communication is structured, predictable, and easy to debug. Whether the server is running locally on your machine (via `stdio`) or remotely in the cloud (via `SSE/HTTP`), the message format remains identical.
                        </p>
                        <p>
                            The protocol defines a strict lifecycle for every interaction:
                        </p>
                        <ol className="step-list">
                            <li><strong>Initialization:</strong> The Client and Server agree on versioning and capabilities.</li>
                            <li><strong>Discovery:</strong> The Server tells the Client exactly what tools, resources, and prompts it has available.</li>
                            <li><strong>Execution:</strong> The AI model decides to use a tool, and the Client sends a structured request to the Server.</li>
                            <li><strong>Response:</strong> The Server executes the logic and returns the data to the AI model.</li>
                        </ol>
                    </section>

                    <section>
                        <h2>The Three Core Primitives</h2>
                        <p>
                            MCP categorizes every capability into three distinct buckets:
                        </p>
                        <div className="feature-list">
                            <div className="feature-item">
                                <span className="feature-icon">🔧</span>
                                <div>
                                    <h4>Tools (Dynamic Actions)</h4>
                                    <p>These are functions the AI can execute. Unlike static data, tools allow the AI to <em>change</em> the state of the world—like sending an email, merging a PR, or rebooting a server. They require strict JSON Schema definitions so the AI knows exactly what arguments to provide.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">📦</span>
                                <div>
                                    <h4>Resources (Static Data)</h4>
                                    <p>Resources are addressable pieces of information identified by a URI (e.g., `file:///logs/today.txt`). They are perfect for providing large chunks of context, like documentation, database rows, or system logs, which the AI can read on demand.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">💬</span>
                                <div>
                                    <h4>Prompts (Interaction Patterns)</h4>
                                    <p>Prompts are pre-defined templates that guide the AI's behavior. Think of them as "slash commands" (e.g., `/debug-code`). They can accept variables and return a set of instructions that setup the AI for a specific complex task.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Now that you know the basics, explore our comprehensive technical guide to see how MCP is architected and how to build your own production-ready servers.
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
