import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ExpandableTextarea.css';

const ExpandableTextarea = ({ value, onChange, placeholder, rows = 8, className = '', id, title = "Editing Text", ...props }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = (e) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        setIsExpanded(!isExpanded);
    };


    // Handle ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && isExpanded) {
                setIsExpanded(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [isExpanded]);

    return (
        <div className={`expandable-textarea-wrapper ${isExpanded ? 'is-expanded' : ''}`}>
            <div className="expandable-textarea-container">
                <textarea
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    rows={rows}
                    className={`form-control ${className}`}
                    {...props}
                />
                <button 
                    type="button"
                    className="expand-toggle-btn" 
                    onClick={toggleExpand}
                    title={isExpanded ? "Minimize" : "Maximize Input"}
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                </button>
            </div>
            
            {isExpanded && createPortal(
                <div className="expand-overlay" onClick={() => setIsExpanded(false)}>
                    <div className="expand-modal animate-scale-in" onClick={(e) => e.stopPropagation()}>
                        <div className="expand-modal__header">
                            <h3>{title}</h3>
                            <button className="close-btn" onClick={() => setIsExpanded(false)}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            </button>
                        </div>
                        <div className="expand-modal__body">
                            <textarea
                                value={value}
                                onChange={onChange}
                                placeholder={placeholder}
                                className="form-control modal-textarea"
                                autoFocus
                                spellCheck="false"
                                {...props}
                            />
                        </div>
                        <div className="expand-modal__footer">  
                            <button className="btn btn-primary btn-small" onClick={() => setIsExpanded(false)}>
                                Done
                            </button>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ExpandableTextarea;
