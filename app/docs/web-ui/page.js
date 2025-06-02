export default function WebUI() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Web UI Overview</h1>
            <p className="text-lg text-gray-600 mb-10 text-center">
                The Web UI of DBDash provides a graphical interface to manage your database visually, offering features like code generation, user management, table design, and real-time queries – all accessible from your browser.
            </p>

            {/* Section: Overview */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🌐 Getting Started with the Web UI</h2>
                <p className="text-gray-700 mb-4">
                    Once your DBDash server is running, access the Web UI at <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000</code> in your browser.
                </p>
                <p className="text-gray-700">
                    From the sidebar, you can explore different tools for managing your database environment efficiently:
                </p>
            </section>

            {/* Section: Database Manager */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🗃️ Database Manager</h3>
                <p className="text-gray-700 mb-2">
                    Create, delete, or connect to multiple databases with ease. You can also view connection strings, metadata, and status reports.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Create new database instances</li>
                    <li>Manage connection configurations</li>
                    <li>See DB status and version info</li>
                </ul>
            </section>

            {/* Section: User Manager */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">👤 User Manager</h3>
                <p className="text-gray-700 mb-2">
                    Manage user roles, permissions, and database access securely through a graphical role assignment UI.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Add or remove users</li>
                    <li>Assign roles like Admin, Editor, Viewer</li>
                    <li>Enable/disable access to specific tables</li>
                </ul>
            </section>

            {/* Section: Table Manager */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📋 Table Manager</h3>
                <p className="text-gray-700 mb-2">
                    View, create, and modify tables directly from the UI. The Table Manager also lets you define column types, indexes, constraints, and more.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Design tables and set primary keys</li>
                    <li>Modify schema with visual column editor</li>
                    <li>Auto-generate migration scripts</li>
                </ul>
            </section>

            {/* Section: Code Generation */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🧠 Code Generation</h3>
                <p className="text-gray-700 mb-2">
                    Automatically generate backend code (CRUD APIs, models, and DB access logic) based on your current schema using our AI-assisted engine.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Generate Node.js, Python, or Go boilerplates</li>
                    <li>Download code snippets for integration</li>
                    <li>Use generated routes in your REST API</li>
                </ul>
            </section>

            {/* Section: Data Export */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📦 Data Export</h3>
                <p className="text-gray-700 mb-2">
                    Export your data in CSV, JSON, or SQL formats for backups, migrations, or offline analysis.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Selective export by table or database</li>
                    <li>Choose export formats: CSV / JSON / SQL</li>
                    <li>Set filters before export</li>
                </ul>
            </section>

            {/* Section: Query Console */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🧮 Query Console</h3>
                <p className="text-gray-700 mb-2">
                    Run custom SQL queries directly in the browser with instant result previews, syntax highlighting, and history tracking.
                </p>
                <ul className="list-disc list-inside text-gray-700">
                    <li>Write and execute raw SQL</li>
                    <li>View result tables in real time</li>
                    <li>Save query history for reuse</li>
                </ul>
            </section>

            {/* Section: Next Steps */}
            <div className="text-center mt-16">
                <a
                    href="/docs/control-panel"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    ➡️ Go to Control Panel Docs
                </a>
            </div>
        </div>
    );
}
