import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function InteractiveTutorials() {
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
                    <Link to="/" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </Link>
                    <span className="topic-badge">Hands-On</span>
                    <h1 className="topic-title">
                        Interactive <span className="text-gradient">Tutorials</span>
                    </h1>
                    <p className="topic-lead">
                        Step-by-step, interactive guides designed to take you from a curious beginner to an advanced MCP developer.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>Learning by Doing</h2>
                        <p>
                            We believe the best way to understand the Model Context Protocol is to build with it. These interactive tutorials provide you with live code environments where you can test your servers and observe the JSON-RPC communication in real time.
                        </p>
                    </section>

                    <section className="highlight-box">
                        <h3>Available Courses</h3>
                        <div className="feature-list">
                            <div className="feature-item">
                                <span className="feature-icon">🟢</span>
                                <div>
                                    <h4>Level 1: The Basics of Tools</h4>
                                    <p>Build your very first MCP server with a single tool. Learn how to define `inputSchema` correctly and handle standard inputs.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🟡</span>
                                <div>
                                    <h4>Level 2: Serving Resources</h4>
                                    <p>Learn how to expose static data to the AI model by creating custom URI schemes and returning complex resources.</p>
                                </div>
                            </div>
                            <div className="feature-item">
                                <span className="feature-icon">🔴</span>
                                <div>
                                    <h4>Level 3: Protocol Prompts</h4>
                                    <p>Master dynamic templates by writing your own prompts, accepting parameters, and orchestrating multi-step AI workflows.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2>What to Expect</h2>
                        <p>
                            Each tutorial provides a browser-based simulator. You write the server logic in JavaScript or TypeScript, and an AI Client simulator will attempt to interact with your server based strictly on your definitions. It's the ultimate sandbox for MCP development!
                        </p>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready to jump in?</h3>
                                <p className="cta-banner__text">
                                    Start with Level 1, or brush up on your theory by exploring the technical guide first.
                                </p>
                            </div>
                            <Link to="/article" className="btn btn-primary cta-banner__btn">
                                Read the Theory
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
