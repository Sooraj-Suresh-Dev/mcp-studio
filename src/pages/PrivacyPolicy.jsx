import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function PrivacyPolicy() {
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
                    <span className="topic-badge">Legal</span>
                    <h1 className="topic-title">
                        Privacy <span className="text-gradient">Policy</span>
                    </h1>
                    <p className="topic-lead">
                        Last updated: March 05, 2026
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>1. Introduction</h2>
                        <p>
                            At MCP Studio, we value your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and MCP tools.
                        </p>
                    </section>

                    <section>
                        <h2>2. Information We Collect</h2>
                        <p>
                            We collect very limited information to provide and improve our services:
                        </p>
                        <ul>
                            <li><strong>Device Information:</strong> We may collect basic information about your device and browser to optimize our UI.</li>
                            <li><strong>Usage Data:</strong> We analyze how you interact with our generators to improve the efficiency of our code generation.</li>
                            <li><strong>Generated Configurations:</strong> Configurations generated through our tools are processed locally in your browser whenever possible. We do not store your private API keys or sensitive environment variables.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. How We Use Your Information</h2>
                        <p>
                            The information we collect is used solely to:
                        </p>
                        <ul>
                            <li>Maintain and improve our MCP toolkit features.</li>
                            <li>Understand user preferences to prioritize new server templates.</li>
                            <li>Ensure the security and reliability of our platform.</li>
                        </ul>
                    </section>

                    <section className="highlight-box">
                        <h3>Our Commitment to Your Data</h3>
                        <p>
                            <strong>We never sell your data.</strong> MCP Studio is built with a "Privacy First" mindset. Since most of our tools run on <code>npx</code> or local browser logic, your sensitive configurations stay where they belong: on your machine.
                        </p>
                    </section>

                    <section>
                        <h2>4. Cookies</h2>
                        <p>
                            We use essential cookies to remember your preferences (like theme settings) and for basic analytics. You can disable cookies in your browser settings, though some parts of the site may not function as intended.
                        </p>
                    </section>

                    <section>
                        <h2>5. Third-Party Services</h2>
                        <p>
                            Our service may link to third-party sites (like GitHub or Anthropic). We are not responsible for the privacy practices of those external services.
                        </p>
                    </section>

                    <section>
                        <h2>6. Contact Us</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at soorajsuresh9597@gmail.com
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
