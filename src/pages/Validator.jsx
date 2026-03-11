import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ExpandableTextarea from '../components/ExpandableTextarea';
import './Validator.css';

export default function Validator() {
    const location = useLocation();
    const [jsonInput, setJsonInput] = useState('');
    const [isValidating, setIsValidating] = useState(false);
    const [validationResult, setValidationResult] = useState(null); // { valid: bool, errors: [], tools: [] }
    const [selectedTool, setSelectedTool] = useState(null);
    const [testInputs, setTestInputs] = useState({});
    const [testResult, setTestResult] = useState(null);

    // Load passed data if any
    useEffect(() => {
        if (location.state?.serverData) {
            const data = typeof location.state.serverData === 'string'
                ? location.state.serverData
                : JSON.stringify(location.state.serverData, null, 2);
            setJsonInput(data);
            // Auto run validation for passed data
            handleValidate(data);
        }
    }, [location.state]);

    const handleValidate = (input = jsonInput) => {
        setIsValidating(true);
        setValidationResult(null);
        setSelectedTool(null);

        setTimeout(() => {
            try {
                const data = JSON.parse(input);
                const errors = [];

                // 1. Basic Metadata
                if (!data.name) errors.push("Missing 'name' field.");
                if (!data.version) errors.push("Missing 'version' field.");
                if (!data.description) errors.push("Missing 'description' field.");

                // 2. Transport
                if (!data.server?.transport) {
                    errors.push("Missing 'server.transport' configuration.");
                }

                // 3. Tools
                const tools = data.server?.tools || [];
                if (tools.length === 0) {
                    errors.push("No tools defined in 'server.tools'.");
                } else {
                    tools.forEach((tool, idx) => {
                        if (!tool.name) errors.push(`Tool [${idx}] is missing a name.`);
                        if (!tool.description) errors.push(`Tool [${tool.name || idx}] is missing a description.`);
                        if (!tool.inputSchema) errors.push(`Tool [${tool.name || idx}] is missing 'inputSchema'.`);
                    });
                }

                setValidationResult({
                    valid: errors.length === 0,
                    errors,
                    tools: tools
                });
            } catch (e) {
                setValidationResult({
                    valid: false,
                    errors: [`Invalid JSON: ${e.message}`],
                    tools: []
                });
            }
            setIsValidating(false);
        }, 800);
    };

    const handleToolSelect = (tool) => {
        setSelectedTool(tool);
        setTestResult(null);
        // Initialize inputs based on schema
        const initialInputs = {};
        if (tool.inputSchema?.properties) {
            Object.keys(tool.inputSchema.properties).forEach(key => {
                initialInputs[key] = "";
            });
        }
        setTestInputs(initialInputs);
    };

    const runTest = () => {
        const required = selectedTool.inputSchema?.required || [];
        const errors = [];

        required.forEach(key => {
            if (!testInputs[key]) {
                errors.push(`'${key}' is a required parameter.`);
            }
        });

        if (errors.length > 0) {
            setTestResult({ success: false, message: errors.join(" ") });
        } else {
            setTestResult({ success: true, message: "Input validation successful! Simulator ready." });
        }
    };

    return (
        <div className="validator-page">
            <div className="validator__bg">
                <div className="validator__blob validator__blob--1"></div>
                <div className="validator__blob validator__blob--2"></div>
                <div className="validator__grid"></div>
            </div>

            <div className="container validator__container animate-fade-in">
                <header className="validator__header">
                    <h1 className="validator__title">
                        MCP <span className="text-gradient">Validator</span> & Simulator
                    </h1>
                    <p className="validator__subtitle">
                        Ensure your server definition adheres to the protocol standards and test tool schemas in real-time.
                    </p>
                </header>

                <div className="validator__layout">
                    {/* Input Area */}
                    <div className="validator__input-section">
                        <div className="glass-card">
                            <div className="card-header">
                                <h3>Server Definition (JSON)</h3>
                                <button
                                    className="btn btn-primary btn-small"
                                    onClick={() => handleValidate()}
                                    disabled={isValidating || !jsonInput}
                                >
                                    {isValidating ? "Validating..." : "Validate Schema"}
                                </button>
                            </div>
                            <ExpandableTextarea
                                className="validator-textarea"
                                title="MCP Definition JSON"
                                value={jsonInput}
                                onChange={(e) => setJsonInput(e.target.value)}
                                placeholder='Paste your MCP Server JSON here...'
                                rows={15}
                            />
                        </div>

                        {validationResult && (
                            <div className={`status-box animate-fade-in ${validationResult.valid ? 'success' : 'error'}`}>
                                <div className="status-header">
                                    <span className="status-icon">
                                        {validationResult.valid ? "✓" : "!"}
                                    </span>
                                    <h4>{validationResult.valid ? "Valid Definition" : "Validation Failed"}</h4>
                                </div>
                                {validationResult.errors.length > 0 && (
                                    <ul className="error-list">
                                        {validationResult.errors.map((err, i) => <li key={i}>{err}</li>)}
                                    </ul>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Simulation Area */}
                    <div className="validator__sim-section">
                        {validationResult?.valid ? (
                            <div className="glass-card tool-simulator animate-fade-in">
                                <div className="card-header">
                                    <h3>Tool Simulator</h3>
                                </div>

                                <div className="tool-selector-grid">
                                    {validationResult.tools.map((tool, i) => (
                                        <button
                                            key={i}
                                            className={`tool-pill ${selectedTool?.name === tool.name ? 'active' : ''}`}
                                            onClick={() => handleToolSelect(tool)}
                                        >
                                            {tool.name}
                                        </button>
                                    ))}
                                </div>

                                {selectedTool && (
                                    <div className="sim-form animate-fade-in">
                                        <div className="sim-tool-meta">
                                            <h4>{selectedTool.name}</h4>
                                            <p>{selectedTool.description}</p>
                                        </div>

                                        <div className="dynamic-form">
                                            {Object.keys(selectedTool.inputSchema?.properties || {}).map(key => {
                                                const prop = selectedTool.inputSchema.properties[key];
                                                const isRequired = selectedTool.inputSchema.required?.includes(key);

                                                return (
                                                    <div className="sim-group" key={key}>
                                                        <label>
                                                            {key} {isRequired && <span className="req">*</span>}
                                                            <small>{prop.description}</small>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="sim-control"
                                                            value={testInputs[key] || ""}
                                                            onChange={(e) => setTestInputs({ ...testInputs, [key]: e.target.value })}
                                                            placeholder={prop.type || "string"}
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <button className="btn btn-glow btn-full" onClick={runTest}>
                                            Run Test Simulation
                                        </button>

                                        {testResult && (
                                            <div className={`test-result animate-fade-in ${testResult.success ? 'pass' : 'fail'}`}>
                                                {testResult.message}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {!selectedTool && (
                                    <div className="empty-sim">
                                        <div className="empty-icon">⚡</div>
                                        <p>Select a tool above to start the simulation</p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="glass-card empty-state">
                                <div className="empty-icon">🔍</div>
                                <h3>No Server Loaded</h3>
                                <p>Validate a valid server definition to unlock the tool simulator.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
