import { useEffect } from 'react';
import './Article.css';

export default function Article() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="article-page">
            {/* Ambient Background */}
            <div className="article-page__bg">
                <div className="article-page__blob article-page__blob--1"></div>
                <div className="article-page__blob article-page__blob--2"></div>
                <div className="article-page__grid"></div>
            </div>

            {/* HERO */}
            <header className="article-hero">
                <div className="container">
                    <span className="article-badge">Featured</span>
                    <h1 className="article-title">
                        The <span className="text-gradient">Ultimate Guide</span> to Model Context Protocol
                    </h1>
                    <div className="article-hero__meta">
                        <span>⏱ 15 min read</span>
                        <span>•</span>
                        <span>Advanced Architecture</span>
                    </div>
                    <p>A deep dive into how MCP works under the hood, why conversational AI needs it, and how you can architect a highly scalable server from scratch.</p>
                    <nav className="article-toc">
                        <a href="#why">Why We Need It</a>
                        <a href="#architecture">Architecture</a>
                        <a href="#lifecycle">Lifecycle</a>
                        <a href="#tools">Primitives</a>
                        <a href="#build">Build Server</a>
                        <a href="#scale">Scaling</a>
                    </nav>
                </div>
            </header>

            {/* ARTICLE BODY */}
            <main className="article-content container">
                {/* SECTION 1 */}
                <section id="what">
                    <h2>🤔 What is Model Context Protocol?</h2>
                    <p>Imagine you hired a brilliant new employee — super smart, knows everything. But they sit in a sealed room with no phone, no computer, no internet. All they can do is answer questions based on what they already know. That's a standard AI model.</p>
                    <p><strong>Model Context Protocol (MCP)</strong> is the "door" you cut in that wall. It's an open standard that lets AI models securely connect to external tools, data sources, and services — in real time.</p>

                    <div className="article-highlight">
                        MCP is to AI what USB is to computers: a universal, standardized way to plug in external capabilities without needing custom wiring every single time.
                    </div>

                    <p>Introduced by Anthropic in late 2024, MCP gives AI assistants like Claude a structured, safe, and scalable way to interact with the outside world — whether that's reading a file, querying a database, calling an API, or running code.</p>

                    {/* FIGURE 1 */}
                    <div className="article-fig-wrap">
                        <svg viewBox="0 0 780 260" xmlns="http://www.w3.org/2000/svg">
                            <rect width="780" height="260" fill="transparent" />
                            <circle cx="140" cy="130" r="70" fill="none" stroke="#6366f1" strokeWidth="2" strokeDasharray="6 3" />
                            <circle cx="140" cy="130" r="50" fill="rgba(99, 102, 241, 0.12)" />
                            <text x="140" y="122" textAnchor="middle" fill="#a78bfa" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">AI</text>
                            <text x="140" y="140" textAnchor="middle" fill="#a78bfa" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">MODEL</text>
                            <circle cx="110" cy="108" r="4" fill="#6366f1" opacity="0.6" />
                            <circle cx="165" cy="108" r="4" fill="#6366f1" opacity="0.6" />
                            <circle cx="125" cy="152" r="4" fill="#6366f1" opacity="0.6" />
                            <circle cx="155" cy="152" r="4" fill="#6366f1" opacity="0.6" />
                            <line x1="110" y1="108" x2="140" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                            <line x1="165" y1="108" x2="140" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                            <line x1="125" y1="152" x2="140" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                            <line x1="155" y1="152" x2="140" y2="130" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
                            <rect x="245" y="100" width="290" height="60" rx="30" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="2" />
                            <text x="390" y="126" textAnchor="middle" fill="#ec4899" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="14">MCP</text>
                            <text x="390" y="146" textAnchor="middle" fill="#f472b6" fontFamily="DM Sans,sans-serif" fontSize="11">Model Context Protocol</text>
                            <path d="M210 130 L245 130" stroke="#ec4899" strokeWidth="2" fill="none" />
                            <polygon points="244,124 256,130 244,136" fill="#ec4899" />
                            <path d="M535 130 L570 130" stroke="#ec4899" strokeWidth="2" fill="none" />
                            <polygon points="569,124 581,130 569,136" fill="#ec4899" />
                            <rect x="580" y="40" width="100" height="36" rx="8" fill="rgba(45,212,191,0.12)" stroke="#2dd4bf" strokeWidth="1.5" />
                            <text x="630" y="63" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontSize="12" fontWeight="600">📁 Files</text>
                            <rect x="580" y="88" width="100" height="36" rx="8" fill="rgba(244,114,182,0.12)" stroke="#f472b6" strokeWidth="1.5" />
                            <text x="630" y="111" textAnchor="middle" fill="#f472b6" fontFamily="Syne,sans-serif" fontSize="12" fontWeight="600">🗄️ DB</text>
                            <rect x="580" y="136" width="100" height="36" rx="8" fill="rgba(99, 102, 241, 0.12)" stroke="#6366f1" strokeWidth="1.5" />
                            <text x="630" y="159" textAnchor="middle" fill="#a78bfa" fontFamily="Syne,sans-serif" fontSize="12" fontWeight="600">🌐 APIs</text>
                            <rect x="580" y="184" width="100" height="36" rx="8" fill="rgba(245, 158, 11, 0.12)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="630" y="207" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontSize="12" fontWeight="600">⚙️ Services</text>
                            <line x1="580" y1="58" x2="550" y2="110" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                            <line x1="580" y1="106" x2="551" y2="118" stroke="#f472b6" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                            <line x1="580" y1="154" x2="551" y2="140" stroke="#a78bfa" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                            <line x1="580" y1="202" x2="550" y2="152" stroke="#f59e0b" strokeWidth="1" strokeDasharray="4 3" opacity="0.6" />
                            <text x="140" y="225" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="11">AI Brain</text>
                            <text x="390" y="185" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="11">Universal Bridge</text>
                            <text x="630" y="238" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="11">External World</text>
                        </svg>
                        <p className="article-fig-caption"><strong>Figure 1:</strong> MCP acts as a universal bridge between an AI model and the outside world — files, databases, APIs, and more.</p>
                    </div>
                </section>

                {/* SECTION 2 */}
                <section id="why">
                    <h2>😤 Why Do We Need MCP?</h2>
                    <p>Before MCP, if you wanted your AI assistant to use a specific tool — say, search your company's internal database — a developer had to write custom integration code. Every. Single. Time.</p>
                    <p>This was painful because:</p>

                    <table className="article-compare">
                        <thead>
                            <tr>
                                <th>Problem</th>
                                <th>Without MCP</th>
                                <th>With MCP</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Adding a new tool</td>
                                <td className="bad">Custom code for every AI + every tool</td>
                                <td className="good">One MCP server, works with any client</td>
                            </tr>
                            <tr>
                                <td>Security</td>
                                <td className="bad">Ad-hoc, inconsistent permissions</td>
                                <td className="good">Standardized access control</td>
                            </tr>
                            <tr>
                                <td>Maintenance</td>
                                <td className="bad">N × M integrations to maintain</td>
                                <td className="good">N + M (servers + clients)</td>
                            </tr>
                            <tr>
                                <td>Portability</td>
                                <td className="bad">Locked to one AI system</td>
                                <td className="good">Works across any MCP-compatible AI</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>Think of it like this: before USB was invented, every device needed its own unique plug. MCP is the USB standard for AI tools.</p>
                </section>

                {/* SECTION 3 */}
                <section id="architecture">
                    <h2>🏗️ The Architecture: Three Key Players</h2>
                    <p>MCP has a clean, three-layer architecture. Understanding these three roles is the foundation of everything else.</p>

                    {/* FIGURE 2 */}
                    <div className="article-fig-wrap">
                        <svg viewBox="0 0 780 320" xmlns="http://www.w3.org/2000/svg">
                            <rect width="780" height="320" fill="transparent" />
                            <rect x="30" y="60" width="180" height="200" rx="12" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" strokeWidth="2" />
                            <text x="120" y="90" textAnchor="middle" fill="#a78bfa" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="14">HOST</text>
                            <text x="120" y="107" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">(Claude Desktop, VS Code)</text>
                            <rect x="55" y="120" width="130" height="32" rx="6" fill="rgba(99, 102, 241, 0.15)" />
                            <text x="120" y="141" textAnchor="middle" fill="#a78bfa" fontFamily="DM Sans,sans-serif" fontSize="12">MCP Client 1</text>
                            <rect x="55" y="162" width="130" height="32" rx="6" fill="rgba(99, 102, 241, 0.15)" />
                            <text x="120" y="183" textAnchor="middle" fill="#a78bfa" fontFamily="DM Sans,sans-serif" fontSize="12">MCP Client 2</text>
                            <rect x="55" y="204" width="130" height="32" rx="6" fill="rgba(99, 102, 241, 0.15)" />
                            <text x="120" y="225" textAnchor="middle" fill="#a78bfa" fontFamily="DM Sans,sans-serif" fontSize="12">MCP Client 3</text>
                            <path d="M210 136 L310 136" stroke="#2dd4bf" strokeWidth="2" fill="none" markerEnd="url(#arr-teal)" />
                            <path d="M310 148 L210 148" stroke="#2dd4bf" strokeWidth="2" fill="none" markerEnd="url(#arr-teal2)" />
                            <text x="260" y="130" textAnchor="middle" fill="#2dd4bf" fontSize="9" fontFamily="DM Sans,sans-serif">JSON-RPC 2.0</text>
                            <path d="M210 178 L310 225" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#arr-pink)" />
                            <path d="M310 237 L210 190" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#arr-pink2)" />
                            <rect x="310" y="90" width="180" height="110" rx="12" fill="rgba(45, 212, 191, 0.08)" stroke="#2dd4bf" strokeWidth="2" />
                            <text x="400" y="118" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="14">MCP SERVER A</text>
                            <text x="400" y="136" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">File System Server</text>
                            <text x="400" y="158" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontFamily="DM Sans,sans-serif">🔧 Tools</text>
                            <text x="400" y="175" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontFamily="DM Sans,sans-serif">📦 Resources</text>
                            <text x="400" y="192" textAnchor="middle" fill="#2dd4bf" fontSize="11" fontFamily="DM Sans,sans-serif">💬 Prompts</text>
                            <rect x="310" y="210" width="180" height="90" rx="12" fill="rgba(236, 72, 153, 0.08)" stroke="#ec4899" strokeWidth="2" />
                            <text x="400" y="237" textAnchor="middle" fill="#ec4899" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="14">MCP SERVER B</text>
                            <text x="400" y="255" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">GitHub Server</text>
                            <text x="400" y="276" textAnchor="middle" fill="#f472b6" fontSize="11" fontFamily="DM Sans,sans-serif">🔧 Tools  📦 Resources</text>
                            <path d="M490 145 L570 100" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <path d="M490 155 L570 155" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <path d="M490 255 L570 210" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <path d="M490 265 L570 265" stroke="#4b5563" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <rect x="570" y="70" width="90" height="36" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="615" y="93" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontSize="11" fontWeight="600">Local Files</text>
                            <rect x="570" y="120" width="90" height="36" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="615" y="143" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontSize="11" fontWeight="600">DB</text>
                            <rect x="570" y="185" width="90" height="36" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="615" y="208" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontSize="11" fontWeight="600">GitHub API</text>
                            <rect x="570" y="235" width="90" height="36" rx="8" fill="rgba(245, 158, 11, 0.1)" stroke="#f59e0b" strokeWidth="1.5" />
                            <text x="615" y="258" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontSize="11" fontWeight="600">Webhooks</text>
                            <text x="615" y="296" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Data Sources</text>
                            <defs>
                                <marker id="arr-teal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L8,3 z" fill="#2dd4bf" />
                                </marker>
                                <marker id="arr-teal2" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                                    <path d="M8,0 L8,6 L0,3 z" fill="#2dd4bf" />
                                </marker>
                                <marker id="arr-pink" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L8,3 z" fill="#ec4899" />
                                </marker>
                                <marker id="arr-pink2" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto">
                                    <path d="M8,0 L8,6 L0,3 z" fill="#ec4899" />
                                </marker>
                            </defs>
                        </svg>
                        <p className="article-fig-caption"><strong>Figure 2:</strong> The three-layer MCP architecture — Host contains Clients, Clients talk to Servers, Servers talk to data sources.</p>
                    </div>

                    <h3>1. The Host</h3>
                    <p>The <strong>Host</strong> is the application the user actually interacts with — Claude Desktop, VS Code with an AI extension, or a custom chatbot. The host manages the user experience and contains one or more MCP Clients.</p>

                    <h3>2. The Client</h3>
                    <p>Each <strong>MCP Client</strong> lives inside the host and maintains a 1:1 connection with exactly one MCP Server. It's the "socket" on the host's side. Clients handle the raw protocol communication — they send requests, receive responses, and translate them for the host.</p>

                    <h3>3. The Server</h3>
                    <p>The <strong>MCP Server</strong> is a lightweight program that exposes specific capabilities (tools, data, prompts) to any client that connects to it. A server for GitHub, for example, can expose tools like <em>create_issue</em>, <em>list_repos</em>, or <em>read_file</em>.</p>

                    <div className="article-callout">
                        <div className="article-callout-title">💡 Key Insight</div>
                        The genius of MCP is this separation: <strong>build one server for a tool, and it works with any host</strong> — Claude, GPT wrappers, your own app. Write once, connect everywhere.
                    </div>
                </section>

                {/* SECTION 4 */}
                <section id="lifecycle">
                    <h2>🔄 The Message Lifecycle</h2>
                    <p>Here's exactly what happens when you ask Claude "search my emails for invoices from last month":</p>

                    {/* FIGURE 3 */}
                    <div className="article-fig-wrap">
                        <svg viewBox="0 0 780 380" xmlns="http://www.w3.org/2000/svg">
                            <rect width="780" height="380" fill="transparent" />
                            <rect x="0" y="0" width="780" height="44" fill="rgba(255,255,255,0.03)" />
                            <line x1="195" y1="0" x2="195" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                            <line x1="390" y1="0" x2="390" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                            <line x1="585" y1="0" x2="585" y2="380" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                            <text x="97" y="26" textAnchor="middle" fill="#a89cf8" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">USER</text>
                            <text x="292" y="26" textAnchor="middle" fill="#a89cf8" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">AI (Claude)</text>
                            <text x="487" y="26" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">MCP CLIENT</text>
                            <text x="682" y="26" textAnchor="middle" fill="#f472b6" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">MCP SERVER</text>
                            <line x1="97" y1="44" x2="97" y2="380" stroke="#6366f1" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                            <line x1="292" y1="44" x2="292" y2="380" stroke="#6366f1" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                            <line x1="487" y1="44" x2="487" y2="380" stroke="#2dd4bf" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                            <line x1="682" y1="44" x2="682" y2="380" stroke="#ec4899" strokeWidth="1" strokeDasharray="6 4" opacity="0.4" />
                            <path d="M97 75 L292 75" stroke="#a78bfa" strokeWidth="2" fill="none" markerEnd="url(#a1)" />
                            <rect x="130" y="60" width="130" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="195" y="74" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">"Search invoices..."</text>
                            <rect x="240" y="90" width="104" height="30" rx="6" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="1" />
                            <text x="292" y="110" textAnchor="middle" fill="#a78bfa" fontFamily="DM Sans,sans-serif" fontSize="11">Tool calling...</text>
                            <path d="M292 135 L487 135" stroke="#2dd4bf" strokeWidth="2" fill="none" markerEnd="url(#a2)" />
                            <rect x="330" y="120" width="120" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="390" y="134" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">tool_call: search</text>
                            <path d="M487 165 L682 165" stroke="#ec4899" strokeWidth="2" fill="none" markerEnd="url(#a3)" />
                            <rect x="520" y="150" width="130" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="585" y="164" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">JSON-RPC: tools/call</text>
                            <rect x="626" y="180" width="112" height="30" rx="6" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="1" />
                            <text x="682" y="200" textAnchor="middle" fill="#f472b6" fontFamily="DM Sans,sans-serif" fontSize="11">Executing logic</text>
                            <path d="M682 225 L487 225" stroke="#ec4899" strokeWidth="2" fill="none" strokeDasharray="5 3" markerEnd="url(#a4)" />
                            <rect x="520" y="210" width="130" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="585" y="224" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">Result: [invoices]</text>
                            <path d="M487 260 L292 260" stroke="#2dd4bf" strokeWidth="2" fill="none" strokeDasharray="5 3" markerEnd="url(#a5)" />
                            <rect x="330" y="245" width="120" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="390" y="259" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">tool_result</text>
                            <rect x="240" y="275" width="104" height="30" rx="6" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="1" />
                            <text x="292" y="295" textAnchor="middle" fill="#a78bfa" fontFamily="DM Sans,sans-serif" fontSize="11">Final response</text>
                            <path d="M292 320 L97 320" stroke="#a78bfa" strokeWidth="2" fill="none" strokeDasharray="5 3" markerEnd="url(#a6)" />
                            <rect x="130" y="305" width="130" height="20" rx="4" fill="rgba(0,0,0,0.4)" />
                            <text x="195" y="319" textAnchor="middle" fill="#e5e7eb" fontFamily="DM Sans,sans-serif" fontSize="11">"Here are your..."</text>
                            <defs>
                                <marker id="a1" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" /></marker>
                                <marker id="a2" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2dd4bf" /></marker>
                                <marker id="a3" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ec4899" /></marker>
                                <marker id="a4" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ec4899" /></marker>
                                <marker id="a5" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#2dd4bf" /></marker>
                                <marker id="a6" markerWidth="8" markerHeight="6" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#a78bfa" /></marker>
                            </defs>
                        </svg>
                        <p className="article-fig-caption"><strong>Figure 3:</strong> Full sequence of a single MCP tool call — from user message to final response. Solid = request, dashed = response.</p>
                    </div>

                    <p>The whole flow is synchronous from the user's perspective, but under the hood it's a chain of structured JSON-RPC 2.0 messages. The protocol is transport-agnostic — it works over <strong>stdio</strong> (for local servers) or <strong>SSE/HTTP</strong> (for remote servers).</p>
                </section>

                {/* SECTION 5 */}
                <section id="tools">
                    <h2>🔧 The Three Primitives: Tools, Resources & Prompts</h2>
                    <p>Every MCP server exposes capabilities through exactly three types of primitives. Think of these as the vocabulary of MCP.</p>

                    {/* FIGURE 4 */}
                    <div className="article-fig-wrap">
                        <svg viewBox="0 0 780 200" xmlns="http://www.w3.org/2000/svg">
                            <rect width="780" height="200" fill="transparent" />
                            <rect x="30" y="30" width="220" height="140" rx="12" fill="rgba(245, 158, 11, 0.08)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="60" y="64" fill="#f59e0b" fontSize="28">🔧</text>
                            <text x="100" y="68" fill="#fbbf24" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="18">Tools</text>
                            <text x="40" y="95" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">What the AI can DO.</text>
                            <text x="40" y="113" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">Functions with inputs &amp;</text>
                            <text x="40" y="131" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">outputs. AI decides when</text>
                            <text x="40" y="149" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">to call them.</text>
                            <rect x="280" y="30" width="220" height="140" rx="12" fill="rgba(45, 212, 191, 0.08)" stroke="#2dd4bf" strokeWidth="2" />
                            <text x="310" y="64" fill="#2dd4bf" fontSize="28">📦</text>
                            <text x="350" y="68" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="18">Resources</text>
                            <text x="290" y="95" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">What the AI can READ.</text>
                            <text x="290" y="113" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">Files, DB rows, API data</text>
                            <text x="290" y="131" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">exposed as URI-addressed</text>
                            <text x="290" y="149" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">content.</text>
                            <rect x="530" y="30" width="220" height="140" rx="12" fill="rgba(99, 102, 241, 0.08)" stroke="#6366f1" strokeWidth="2" />
                            <text x="560" y="64" fill="#a78bfa" fontSize="28">💬</text>
                            <text x="600" y="68" fill="#a78bfa" fontFamily="Syne,sans-serif" fontWeight="800" fontSize="18">Prompts</text>
                            <text x="540" y="95" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">Interaction patterns.</text>
                            <text x="540" y="113" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">Reusable templates that</text>
                            <text x="540" y="131" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">can accept arguments</text>
                            <text x="540" y="149" fill="#9ca3af" fontFamily="DM Sans,sans-serif" fontSize="12">from the user.</text>
                        </svg>
                        <p className="article-fig-caption"><strong>Figure 4:</strong> The three MCP primitives — Tools (actions), Resources (data), and Prompts (templates).</p>
                    </div>

                    <h3>Tools — The Powerhouse</h3>
                    <p>Tools are functions the AI can call. Each tool has a name, a description (so the AI knows when to use it), and a JSON Schema defining its inputs. The result is returned as structured content.</p>

                    <pre className="article-code-block">
                        <code>
                            <span className="cmt">// Example: A tool definition in an MCP server</span>{'\n'}
                            {'{'}{'\n'}
                            {'  '}<span className="str">"name"</span>: <span className="str">"search_emails"</span>,{'\n'}
                            {'  '}<span className="str">"description"</span>: <span className="str">"Search Gmail inbox"</span>,{'\n'}
                            {'  '}<span className="str">"inputSchema"</span>: {'{'}{'\n'}
                            {'    '}<span className="str">"type"</span>: <span className="str">"object"</span>,{'\n'}
                            {'    '}<span className="str">"properties"</span>: {'{'}{'\n'}
                            {'      '}<span className="str">"query"</span>: {'{'} <span className="str">"type"</span>: <span className="str">"string"</span> {'}'}{'\n'}
                            {'    '}{'}'},{'\n'}
                            {'    '}<span className="str">"required"</span>: [<span className="str">"query"</span>]{'\n'}
                            {'  '}{'}'}{'\n'}
                            {'}'}
                        </code>
                    </pre>

                    <h3>Resources — The Data Layer</h3>
                    <p>Resources are addressable pieces of data identified by URI. For example, a local file or a GitHub repository path. The host/user decides when to include resources in context.</p>

                    <h3>Prompts — The Templates</h3>
                    <p>Prompts are server-defined interaction patterns — like slash commands that users can invoke. They can accept arguments and return a structured conversation template. For example: <em>/summarize-pr</em>.</p>
                </section>

                {/* SECTION 6 */}
                <section id="build">
                    <h2>🛠️ Build & Validate with MCP Studio</h2>
                    <p>Building an MCP server used to require deep protocol knowledge. With <strong>MCP Studio</strong>, we've integrated the entire lifecycle into a single, seamless workflow.</p>

                    <div className="article-steps">
                        <div className="article-step">
                            <div className="article-step-num">1</div>
                            <div className="article-step-content">
                                <h4>Generate with AI</h4>
                                <p>Head to our <a href="/options-selection" style={{ color: '#a78bfa', fontWeight: '600' }}>Generator</a>. Describe your tools in plain English, and our AI will architect the full JSON-RPC schema, including complex tool definitions and input schemas.</p>
                            </div>
                        </div>
                        <div className="article-step">
                            <div className="article-step-num">2</div>
                            <div className="article-step-content">
                                <h4>Review & Download</h4>
                                <p>Instantly review your server definition. You can customize tools, add descriptions, and download your <code>mcp-config.json</code> once the structure feels right.</p>
                            </div>
                        </div>
                        <div className="article-step">
                            <div className="article-step-num">3</div>
                            <div className="article-step-content">
                                <h4>Validate in Real-Time</h4>
                                <p>Click <strong>"Validate & Test"</strong> to send your configuration to our Validator. We check for protocol compliance and ensure your schemas follow the MCP v1.0 standard.</p>
                            </div>
                        </div>
                        <div className="article-step">
                            <div className="article-step-num">4</div>
                            <div className="article-step-content">
                                <h4>Simulate Tool Logic</h4>
                                <p>Use our built-in <strong>Simulator</strong> to test individual tools. Enter sample inputs and see if your schema correctly handles the data before you even write a single line of backend code.</p>
                            </div>
                        </div>
                    </div>

                    <div className="article-callout">
                        <div className="article-callout-title">⚡ The MCP Studio Workflow</div>
                        <p style={{ fontSize: '1rem', color: '#9ca3af', marginTop: '10px' }}>
                            <strong>Idea</strong> → <strong>Generator</strong> → <strong>Validator</strong> → <strong>Simulator</strong> → <strong>Deployment</strong>
                        </p>
                    </div>

                    <pre className="article-code-block">
                        <code>
                            <span className="cmt">// mcp-config.json (Sample Output from Generator)</span>{'\n'}
                            {'{'}{'\n'}
                            {'  '}<span className="str">"name"</span>: <span className="str">"mcp-file-explorer"</span>,{'\n'}
                            {'  '}<span className="str">"version"</span>: <span className="str">"1.0.0"</span>,{'\n'}
                            {'  '}<span className="str">"server"</span>: {'{'}{'\n'}
                            {'    '}<span className="str">"transport"</span>: <span className="str">"stdio"</span>,{'\n'}
                            {'    '}<span className="str">"tools"</span>: [{'\n'}
                            {'      '}{'{'}{'\n'}
                            {'        '}<span className="str">"name"</span>: <span className="str">"read_markdown"</span>,{'\n'}
                            {'        '}<span className="str">"description"</span>: <span className="str">"Read and parse .md files"</span>,{'\n'}
                            {'        '}<span className="str">"inputSchema"</span>: {'{'}...{'}'}{'\n'}
                            {'      '}{'}'}{'\n'}
                            {'    '}{']'}{'\n'}
                            {'  '}{'}'}{'\n'}
                            {'}'}
                        </code>
                    </pre>
                </section>

                {/* SECTION 7 */}
                <section id="scale">
                    <h2>📈 Architecting for Scale</h2>
                    <p>A toy server works great locally. But what does a production-grade, scalable MCP architecture look like?</p>

                    {/* FIGURE 5 */}
                    <div className="article-fig-wrap">
                        <svg viewBox="0 0 780 340" xmlns="http://www.w3.org/2000/svg">
                            <rect width="780" height="340" fill="transparent" />
                            <rect x="310" y="20" width="160" height="50" rx="10" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="2" />
                            <text x="390" y="42" textAnchor="middle" fill="#fbbf24" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">Load Balancer</text>
                            <text x="390" y="60" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">nginx / AWS ALB</text>
                            <rect x="310" y="100" width="160" height="50" rx="10" fill="rgba(99, 102, 241, 0.15)" stroke="#6366f1" strokeWidth="2" />
                            <text x="390" y="122" textAnchor="middle" fill="#a78bfa" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">MCP Gateway</text>
                            <text x="390" y="140" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Auth + Rate Limiting</text>
                            <path d="M390 70 L390 100" stroke="#f59e0b" strokeWidth="2" fill="none" markerEnd="url(#da1)" />
                            <path d="M390 150 L390 175" stroke="#6366f1" strokeWidth="2" fill="none" markerEnd="url(#da2)" />
                            <rect x="80" y="175" width="140" height="50" rx="10" fill="rgba(45, 212, 191, 0.12)" stroke="#2dd4bf" strokeWidth="1.5" />
                            <text x="150" y="197" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="12">Server Pod A</text>
                            <text x="150" y="215" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Files + DB tools</text>
                            <rect x="320" y="175" width="140" height="50" rx="10" fill="rgba(45, 212, 191, 0.12)" stroke="#2dd4bf" strokeWidth="1.5" />
                            <text x="390" y="197" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="12">Server Pod B</text>
                            <text x="390" y="215" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Search + API tools</text>
                            <rect x="560" y="175" width="140" height="50" rx="10" fill="rgba(45, 212, 191, 0.12)" stroke="#2dd4bf" strokeWidth="1.5" />
                            <text x="630" y="197" textAnchor="middle" fill="#2dd4bf" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="12">Server Pod C</text>
                            <text x="630" y="215" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Code execution</text>
                            <path d="M360 175 L190 175" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <path d="M420 175 L590 175" stroke="#6366f1" strokeWidth="1.5" strokeDasharray="5 3" fill="none" />
                            <rect x="210" y="270" width="360" height="45" rx="10" fill="rgba(236, 72, 153, 0.1)" stroke="#ec4899" strokeWidth="1.5" />
                            <text x="390" y="290" textAnchor="middle" fill="#ec4899" fontFamily="Syne,sans-serif" fontWeight="700" fontSize="13">Shared Cache (Redis)</text>
                            <text x="390" y="307" textAnchor="middle" fill="#4b5563" fontFamily="DM Sans,sans-serif" fontSize="10">Deduplicates tool calls • Speeds up repeated queries</text>
                            <defs>
                                <marker id="da1" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" /></marker>
                                <marker id="da2" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#6366f1" /></marker>
                            </defs>
                        </svg>
                        <p className="article-fig-caption"><strong>Figure 5:</strong> A production-ready MCP architecture with load balancing, a gateway layer, and shared caching.</p>
                    </div>

                    <p>In a production environment, you don't just run a single process. You use an <strong>MCP Gateway</strong> to handle authentication and route requests to various "worker" pods. Use <strong>Redis</strong> to cache expensive tool results.</p>
                </section>
            </main>

            <footer className="article-footer container">
                <p>© 2026 MCP Studio • Ultimate Protocol Guide</p>
            </footer>
        </div>
    );
}
