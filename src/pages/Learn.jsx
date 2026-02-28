import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';

const featuredResource = {
    title: 'The Ultimate Guide to Model Context Protocol',
    description: 'A deep dive into how MCP works under the hood, why conversational AI needs it, and how you can architect a highly scalable server from scratch.',
    readTime: '15 min read',
    tag: 'Featured',
    image: 'https://images.unsplash.com/photo-1620825937374-87fc7d628285?auto=format&fit=crop&w=800&q=80'
};

const resources = [
    {
        category: 'Getting Started',
        icon: '🚀',
        items: [
            {
                title: 'What is MCP?',
                description: 'Understand the core concepts behind the Model Context Protocol and why it matters.',
                readTime: '5 min read',
                tag: 'Beginner',
                color: '#6366f1'
            },
            {
                title: 'Quick Start Guide',
                description: 'Get your first MCP server running in under 5 minutes with our guided setup wizard.',
                readTime: '10 min read',
                tag: 'Tutorial',
                color: '#ec4899'
            }
        ]
    },
    {
        category: 'Advanced Concepts',
        icon: '🧠',
        items: [
            {
                title: 'Schema Design Patterns',
                description: 'Learn how to structure precise and effective input schemas for complex tool integrations.',
                readTime: '12 min read',
                tag: 'Advanced',
                color: '#8b5cf6'
            },
            {
                title: 'Security & Authentication',
                description: 'Best practices for securing your MCP endpoints and managing safe authentication passes.',
                readTime: '15 min read',
                tag: 'Security',
                color: '#10b981'
            }
        ]
    },
    {
        category: 'Ecosystem & Tools',
        icon: '🛠️',
        items: [
            {
                title: 'Integrating with Claude Desktop',
                description: 'A complete walkthrough on how to bind your MCP server to Anthropic’s Claude Desktop client.',
                readTime: '8 min read',
                tag: 'Integration',
                color: '#f59e0b'
            },
            {
                title: 'Troubleshooting Common Issues',
                description: 'A comprehensive list of common MCP errors, debugging strategies, and solutions.',
                readTime: '7 min read',
                tag: 'Guide',
                color: '#ef4444'
            }
        ]
    }
];

export default function Learn() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="learn-hub">
            {/* Ambient Background */}
            <div className="learn-hub__bg">
                <div className="learn-hub__blob learn-hub__blob--1"></div>
                <div className="learn-hub__blob learn-hub__blob--2"></div>
                <div className="learn-hub__grid"></div>
            </div>

            <div className="container learn-hub__container">
                <header className="learn-hub__header">
                    <h1 className="learn-hub__title">
                        Master the <span className="text-gradient">Protocol</span>
                    </h1>
                    <p className="learn-hub__subtitle">
                        Explore our curated library of guides, tutorials, and architectural patterns to help you build world-class AI integrations.
                    </p>
                </header>

                <main className="learn-hub__main">
                    {/* Featured Article */}
                    <section className="featured-article">
                        <div className="featured-article__image" style={{ backgroundImage: `url(${featuredResource.image})` }}>
                            <div className="featured-article__overlay"></div>
                        </div>
                        <div className="featured-article__content">
                            <div className="featured-article__meta">
                                <span className="tag-premium">{featuredResource.tag}</span>
                                <span className="read-time">{featuredResource.readTime}</span>
                            </div>
                            <h2 className="featured-article__title">{featuredResource.title}</h2>
                            <p className="featured-article__desc">{featuredResource.description}</p>
                            <Link to="#" className="btn btn-primary featured-article__btn">Read Article</Link>
                        </div>
                    </section>

                    {/* Resources Grid */}
                    <div className="resources-masonry">
                        {resources.map((section, idx) => (
                            <section key={idx} className="resource-section">
                                <h3 className="resource-section__title">
                                    <span className="resource-section__icon">{section.icon}</span>
                                    {section.category}
                                </h3>
                                <div className="resource-cards-list">
                                    {section.items.map((item, itemIdx) => (
                                        <Link to="#" className="interactive-card" key={itemIdx}>
                                            <div className="interactive-card__glow" style={{ background: item.color }}></div>
                                            <div className="interactive-card__inner">
                                                <div className="interactive-card__top">
                                                    <span className="tag-standard" style={{ color: item.color, backgroundColor: `${item.color}1A` }}>
                                                        {item.tag}
                                                    </span>
                                                    <span className="time">{item.readTime}</span>
                                                </div>
                                                <h4 className="interactive-card__title">{item.title}</h4>
                                                <p className="interactive-card__desc">{item.description}</p>
                                                <div className="interactive-card__bottom">
                                                    <span className="read-more" style={{ color: item.color }}>
                                                        Learn more <span className="arrow">→</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}
