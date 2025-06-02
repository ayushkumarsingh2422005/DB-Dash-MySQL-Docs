export default function ConnectingMySQL() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Connecting MySQL</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                DBDash connects seamlessly to MySQL to provide real-time database management via the Web UI. This page will guide you through the process of establishing a connection to your MySQL server.
            </p>

            {/* Section: Preparing MySQL */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📋 Preparing MySQL</h2>
                <p className="text-gray-700 mb-4">
                    Before connecting DBDash to MySQL, make sure the following prerequisites are in place:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>MySQL is installed and running on your local machine or a remote server.</li>
                    <li>Ensure your MySQL user has sufficient privileges to access the database (e.g., SELECT, INSERT, UPDATE, DELETE).</li>
                    <li>Confirm that the MySQL server’s port (default: <code className="bg-gray-100 px-1 py-0.5 rounded">3306</code>) is open and accessible.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    You can verify the MySQL server is running by connecting to it via the command line:
                </p>
                <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                    mysql -u root -p
                </pre>
                <p className="text-sm text-gray-500 mt-2">
                    ✅ If you can connect without issues, you're ready to proceed.
                </p>
            </section>

            {/* Section: Configure Connection in DBDash */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔗 Configure MySQL Connection</h2>
                <p className="text-gray-700 mb-4">
                    Now, let’s configure the connection in DBDash. To do this, follow these steps:
                </p>

                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>
                        Open the DBDash Web UI in your browser at <code className="bg-gray-100 px-1 py-0.5 rounded">http://localhost:3000</code>.
                    </li>
                    <li>
                        On the login screen, click on the "Add New Connection" button.
                    </li>
                    <li>
                        In the connection settings form, fill in the following fields:
                        <ul className="list-inside list-disc text-gray-700 ml-6">
                            <li><strong>Host:</strong> The IP address or hostname of your MySQL server (e.g., <code className="bg-gray-100 px-1 py-0.5 rounded">localhost</code> for local setup or the IP address of a remote server).</li>
                            <li><strong>Port:</strong> Default is <code className="bg-gray-100 px-1 py-0.5 rounded">3306</code>. If you are using a custom port, enter that.</li>
                            <li><strong>User:</strong> The MySQL username you want to use (e.g., <code className="bg-gray-100 px-1 py-0.5 rounded">root</code> or another user).</li>
                            <li><strong>Password:</strong> The corresponding password for the MySQL user.</li>
                            <li><strong>Database (optional):</strong> You can specify a database here or leave it blank to connect to the MySQL server and view all databases.</li>
                        </ul>
                    </li>
                    <li>
                        Click "Save" to store the connection settings.
                    </li>
                </ol>

                <p className="text-gray-700 mb-4">
                    After saving, you will be able to see your connection listed on the dashboard.
                </p>
            </section>

            {/* Section: Troubleshooting Connection Issues */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-red-700 mb-4">⚠️ Troubleshooting Connection Issues</h2>
                <p className="text-gray-700 mb-4">
                    If you're having trouble connecting to MySQL, check the following:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>If you see a "Connection Refused" error, make sure MySQL is running and listening on the correct port.</li>
                    <li>If you’re connecting remotely, ensure that your firewall or cloud security settings allow inbound connections on port <code className="bg-gray-100 px-1 py-0.5 rounded">3306</code>.</li>
                    <li>Check that the MySQL user you're using has the necessary permissions and that the username/password is correct.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    If the issue persists, check the MySQL logs or refer to the <a href="/docs/troubleshooting" className="text-blue-600 underline">Troubleshooting</a> guide for more detailed solutions.
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
