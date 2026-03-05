import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './TopicDetail.css';

export default function SchemaDesign() {
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
                    <Link to="/learn" className="back-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Learn
                    </Link>
                    <span className="topic-badge">Advanced</span>
                    <h1 className="topic-title">
                        Schema <span className="text-gradient">Design Patterns</span>
                    </h1>
                    <p className="topic-lead">
                        Learn how to architect robust, self-documenting JSON schemas that help AI models use your tools with zero friction.
                    </p>
                </header>

                <div className="topic-content">
                    <section>
                        <h2>The Power of Semantic Discovery</h2>
                        <p>
                            In the Model Context Protocol, your schema is your API's documentation and its user interface combined. Because AI models use these schemas to generate tool calls, the precision of your `inputSchema` directly determines the "intelligence" of the tool's usage.
                        </p>
                    </section>

                    <section>
                        <h2>1. Precision in Descriptions</h2>
                        <p>
                            The <code>description</code> field is the most important part of any MCP tool definition. It is the only signal the AI has to understand the context of the tool.
                        </p>
                        <div className="highlight-box">
                            <h3>Bad vs. Good Descriptions</h3>
                            <p><strong>❌ Bad:</strong> "Search for customers."</p>
                            <p><strong>✅ Good:</strong> "Search the CRM database for customer profiles by name, email, or company ID. Use this when the user needs contact details or purchase history for a specific client."</p>
                        </div>
                    </section>

                    <section>
                        <h2>2. Leveraging JSON Schema Primitives</h2>
                        <p>
                            Don't just use `string` for everything. Use the full power of JSON Schema to constrain the model's output and reduce the need for backend validation.
                        </p>
                        <ul>
                            <li><strong>Enums:</strong> Use <code>enum</code> for fixed sets of choices (e.g., <code>priority: ["low", "medium", "high"]</code>).</li>
                            <li><strong>Formats:</strong> Use <code>format: "date-time"</code> or <code>format: "email"</code> to guide the model toward valid strings.</li>
                            <li><strong>Defaults:</strong> Provide <code>default</code> values so the model knows what happens if it omits a field.</li>
                        </ul>
                    </section>

                    <section>
                        <h2>3. Handling Complex & Nested Inputs</h2>
                        <p>
                            For sophisticated tools, nesting objects is often cleaner than a flat list of 20 parameters. This helps the AI model understand the relationship between different inputs.
                        </p>
                        <pre className="code-snippet">
                            {`"properties": {
  "metadata": {
    "type": "object",
    "description": "Optional tagging for the record",
    "properties": {
      "tags": { "type": "array", "items": { "type": "string" } },
      "category": { "type": "string", "enum": ["IT", "HR", "Sales"] }
    }
  },
  "content": { "type": "string", "minLength": 10 }
}`}
                        </pre>
                    </section>

                    <section>
                        <h2>4. Required vs. Optional Fields</h2>
                        <p>
                            Always explicitly define which fields are <code>required</code>. If a field is optional, provide a clear description of what the tool will do if that field is missing. AI models are much more reliable when the boundaries of valid input are clearly marked.
                        </p>
                    </section>

                    <section className="cta-section">
                        <div className="cta-banner">
                            <div className="cta-banner__content">
                                <h3 className="cta-banner__title">Ready for the deep dive?</h3>
                                <p className="cta-banner__text">
                                    Explore the full technical article to see how these schemas are parsed by the MCP Client.
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
