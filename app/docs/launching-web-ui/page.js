export default function LaunchingWebUI() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Launching the Web UI</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                After setting up DBDash and your MySQL server, you can easily launch the Web UI to manage your database visually. Follow the steps below to start the Web UI and access it from your browser.
            </p>

            {/* Section: Web UI Requirements */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Web UI Prerequisites</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Ensure that DBDash server is running (refer to the <a href="/docs/starting-server" className="text-blue-600 underline">Starting the Server</a> page if needed).</li>
                    <li>A modern browser such as Chrome, Firefox, or Safari.</li>
                    <li>Ensure your firewall settings allow inbound connections on port 3000 (or the port configured for the Web UI).</li>
                </ul>
            </section>

            {/* Section: Launching the Web UI */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🚀 Launch the Web UI</h2>
                <p className="text-gray-700 mb-4">
                    Once the server is running, you can access the Web UI by navigating to the following address in your browser:
                </p>
                <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                    http://localhost:3000
                </pre>
                <p className="text-gray-700 mb-4 mt-4">
                    If you’ve configured a different port for the Web UI, replace <code className="bg-gray-100 px-1 py-0.5 rounded">3000</code> with your custom port number in the URL.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    ✅ The Web UI will prompt you for connection credentials if you haven't logged in yet.
                </p>
            </section>

            {/* Section: Login to Web UI */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">🔐 Login to Web UI</h2>
                <p className="text-gray-700 mb-4">
                    Once you've accessed the Web UI, you'll need to log in using your credentials to connect to your MySQL database. The login screen will prompt you for the following:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Username:</strong> Your MySQL username (e.g., root, admin, or a user you’ve configured)</li>
                    <li><strong>Password:</strong> The corresponding password for the username</li>
                    <li><strong>Database:</strong> Optional (you can leave this blank to view all available databases)</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    After entering your credentials, click the "Login" button to proceed.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    ✅ The Web UI will remember your connection details for future use, unless you choose to log out.
                </p>
            </section>

            {/* Section: Navigating the Web UI */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-purple-700 mb-4">📊 Navigating the Web UI</h2>
                <p className="text-gray-700 mb-4">
                    After logging in, you’ll be taken to the main dashboard. Here are some key sections of the Web UI:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Schema Explorer:</strong> View and manage your database schemas with an intuitive, drag-and-drop interface.</li>
                    <li><strong>Query Editor:</strong> Write, execute, and test SQL queries with a built-in editor.</li>
                    <li><strong>Data Viewer:</strong> Inspect and edit data in tables, rows, and columns easily.</li>
                    <li><strong>Settings:</strong> Configure the Web UI settings, including appearance and connection preferences.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    You can start interacting with your database right from the Web UI, whether it's running queries or visualizing your schema.
                </p>
            </section>

            {/* Section: Troubleshooting */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-red-700 mb-4">⚠️ Troubleshooting</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>If you can’t access the Web UI, check if the DBDash server is running properly.</li>
                    <li>If you're seeing a "Connection Refused" error, ensure that the correct port is open and not blocked by your firewall.</li>
                    <li>Make sure you're using the correct MySQL username and password to log in.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    If the issue persists, visit the <a href="/docs/troubleshooting" className="text-blue-600 underline">Troubleshooting</a> page for more in-depth solutions.
                </p>
            </section>

            {/* Next Step */}
            <div className="text-center">
                <a
                    href="/docs/usage"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    🚀 Proceed to Usage Guide
                </a>
            </div>
        </div>
    );
}
