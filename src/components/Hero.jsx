import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
    const orbRef = useRef(null);

    useEffect(() => {
        const handleMouse = (e) => {
            if (!orbRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 30;
            const y = (e.clientY / window.innerHeight - 0.5) * 30;
            orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    return (
        <section className="hero" id="hero">
            {/* Animated background */}
            <div className="hero__bg">
                <div className="hero__orb hero__orb--1" ref={orbRef} />
                <div className="hero__orb hero__orb--2" />
                <div className="hero__orb hero__orb--3" />
                <div className="hero__grid" />
            </div>

            <div className="container hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot" />
                    Open Source MCP Platform
                </div>

                <h1 className="hero__title">
                    Generate <span className="hero__accent">MCP Servers</span>
                    <br />
                    & Tools in Seconds
                </h1>

                <p className="hero__subtitle">
                    Describe your integration, configure the schema, and deploy production-ready
                    MCP servers — all from a single, intuitive interface.
                    Plus, explore tutorials and docs to master the MCP ecosystem.
                </p>

                <div className="hero__actions" id="cta">
                    <a href="#features" className="btn btn-primary">
                        <span>Start Building</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#learn" className="btn btn-secondary">
                        Learn MCP
                    </a>
                </div>

                {/* Floating code preview */}
                <div className="hero__preview">
                    <div className="hero__preview-bar">
                        <span className="hero__preview-dot" style={{ background: '#ff5f57' }} />
                        <span className="hero__preview-dot" style={{ background: '#febc2e' }} />
                        <span className="hero__preview-dot" style={{ background: '#28c840' }} />
                        <span className="hero__preview-label">mcp-server.config.json</span>
                    </div>
                    <pre className="hero__code"><code>{`{
  "name": "my-mcp-server",
  "version": "1.0.0",
  "tools": [
    {
      "name": "search_docs",
      "description": "Search documentation",
      "inputSchema": {
        "type": "object",
        "properties": {
          "query": { "type": "string" }
        }
      }
    }
  ]
}`}</code></pre>
                </div>
            </div>
        </section>
    );
}
