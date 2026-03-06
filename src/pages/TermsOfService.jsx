import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function TermsOfService() {
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
                        Terms of <span className="text-gradient">Service</span>
                    </h1>
                    <p className="topic-lead">
                        Last updated: March 05, 2026
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using MCP Studio (the "Service"), you agree to be bound by these Terms of Service. If you do not agree, please do not use our Service.
                        </p>
                    </section>

                    <section>
                        <h2>2. Use of License</h2>
                        <p>
                            Permission is granted to use our MCP generators and templates for your own projects (personal or commercial). You may not:
                        </p>
                        <ul>
                            <li>Sell, lease, or sub-license our generators or core toolkit source code as your own product.</li>
                            <li>Use our Service for any illegal or unauthorized purpose.</li>
                            <li>Attempt to decompile or reverse engineer any software contained on the MCP Studio website.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Disclaimer</h2>
                        <p>
                            Our Service and all content are provided on an "as is" and "as available" basis. MCP Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                        </p>
                    </section>

                    <section className="highlight-box">
                        <h3>No Liability for AI Errors</h3>
                        <p>
                            <strong>Important Notice:</strong> Since our tools are used to help AI models like Claude or GPT interact with your data, we are not responsible for the actions taken by those AI models or for any data loss, security breaches, or system failures resulting from the use of configurations generated here. Always test your MCP servers in a safe environment first.
                        </p>
                    </section>

                    <section>
                        <h2>4. Limitations</h2>
                        <p>
                            In no event shall MCP Studio or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on MCP Studio's website.
                        </p>
                    </section>

                    <section>
                        <h2>5. Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which MCP Studio operates. You irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                        </p>
                    </section>

                    <section>
                        <h2>6. Changes to Terms</h2>
                        <p>
                            We reserve the right to revise these Terms of Service at any time without notice. By using this website, you are agreeing to be bound by the then current version of these Terms of Service.
                        </p>
                    </section>

                    <section>
                        <h2>7. Contact</h2>
                        <p>
                            If you have questions about these Terms, feel free to reach out to soorajsuresh9597@gmail.com
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
