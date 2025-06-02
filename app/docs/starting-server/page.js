export default function StartingServer() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Starting the Server</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                DBDash connects to your MySQL server seamlessly. Follow the steps below to launch and connect to your database server.
            </p>

            {/* Section: Requirements */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Prerequisites</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>MySQL or MariaDB installed and running</li>
                    <li>Username and password credentials for your database</li>
                    <li>Ensure the port (default: <code className="bg-gray-100 px-1 py-0.5 rounded">3306</code>) is open</li>
                </ul>
            </section>

            {/* Section: Start MySQL Server */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🟢 Starting the MySQL Server</h2>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">🔹 On Windows</h3>
                    <p className="text-gray-700">Use the Services app:</p>
                    <ul className="list-disc list-inside text-gray-700 ml-4">
                        <li>Open <code className="bg-gray-100 px-1 py-0.5 rounded">services.msc</code></li>
                        <li>Find <strong>MySQL</strong> service and click "Start"</li>
                    </ul>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">🔹 On macOS</h3>
                    <p className="text-gray-700">If installed via Homebrew:</p>
                    <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                        brew services start mysql
                    </pre>
                </div>

                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-gray-700">🔹 On Linux</h3>
                    <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                        sudo systemctl start mysql
                    </pre>
                    <p className="text-gray-700 mt-2">Or for older systems:</p>
                    <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                        sudo service mysql start
                    </pre>
                </div>
            </section>

            {/* Section: Connecting via DBDash */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">🔗 Connect to MySQL with DBDash</h2>
                <p className="text-gray-700 mb-4">
                    After starting the server, open DBDash and enter your connection details:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Host:</strong> 127.0.0.1 or your DB server IP</li>
                    <li><strong>Port:</strong> 3306 (or custom port if configured)</li>
                    <li><strong>User:</strong> root (or another MySQL user)</li>
                    <li><strong>Password:</strong> Your database password</li>
                    <li><strong>Database:</strong> Optional (leave blank to explore all)</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                    ✅ Once connected, your schema will load automatically in the dashboard.
                </p>
            </section>

            {/* Next Step */}
            <div className="text-center">
                <a
                    href="/docs/usage"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    🚀 Go to Usage Guide
                </a>
            </div>
        </div>
    );
}  