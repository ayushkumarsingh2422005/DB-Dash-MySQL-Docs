export default function ControlPanel() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Control Panel</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                The DBDash Control Panel provides you with an intuitive interface to manage all aspects of your database. From here, you can control user access, manage databases, and configure settings for optimal performance.
            </p>

            {/* Section: Overview of Control Panel */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🎛️ Overview of the Control Panel</h2>
                <p className="text-gray-700 mb-4">
                    The Control Panel is the main interface where you can manage your database server, configure access controls, and adjust system settings. Here’s a brief overview of the sections you'll find:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Database Management:</strong> Create, manage, and delete databases.</li>
                    <li><strong>User Management:</strong> Add, remove, and manage user access to the databases.</li>
                    <li><strong>Server Settings:</strong> Configure global settings, such as performance optimizations, logging, and backups.</li>
                    <li><strong>Security:</strong> Adjust user permissions and control access levels for different users.</li>
                </ul>
                <p className="text-gray-700 mb-4">
                    The Control Panel allows you to perform essential database administration tasks from a single web interface, making it easier to manage complex database setups.
                </p>
            </section>

            {/* Section: Accessing the Control Panel */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🔐 Accessing the Control Panel</h2>
                <p className="text-gray-700 mb-4">
                    To access the DBDash Control Panel, follow these steps:
                </p>
                <ol className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Open the DBDash Web UI in your browser at <code className="bg-gray-100 px-1 py-0.5 rounded">http://localhost:3000</code>.</li>
                    <li>Login with your administrator credentials.</li>
                    <li>Once logged in, navigate to the "Control Panel" from the sidebar or dashboard.</li>
                </ol>
                <p className="text-gray-700 mb-4">
                    You will now have access to all administrative functionalities of the Control Panel.
                </p>
            </section>

            {/* Section: Key Features of the Control Panel */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">⚙️ Key Features of the Control Panel</h2>

                {/* Database Management */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">📊 Database Management</h3>
                <p className="text-gray-700 mb-4">
                    From the Control Panel, you can:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Create new databases by clicking on the "Create Database" button.</li>
                    <li>View and manage existing databases, including modifying their configurations or deleting them.</li>
                    <li>Perform database backups and restores with ease using built-in tools.</li>
                </ul>

                {/* User Management */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">👥 User Management</h3>
                <p className="text-gray-700 mb-4">
                    The Control Panel also allows you to manage users who have access to your databases. Here’s what you can do:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Create and assign roles to users for specific access levels (e.g., Admin, Read-Only, or Write).</li>
                    <li>Remove or edit user access whenever needed.</li>
                    <li>Set up user permissions to ensure that only authorized users can perform specific actions on databases.</li>
                </ul>

                {/* Server Settings */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">⚡ Server Settings</h3>
                <p className="text-gray-700 mb-4">
                    In this section, you can manage the following server settings:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Adjust performance settings, including cache and connection pooling options.</li>
                    <li>View server logs to diagnose any issues with the database or server.</li>
                    <li>Set up scheduled backups to ensure that your data is always safe.</li>
                </ul>

                {/* Security */}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">🔐 Security</h3>
                <p className="text-gray-700 mb-4">
                    The Control Panel enables you to secure your databases through:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Configuring SSL/TLS for encrypted connections to the database.</li>
                    <li>Managing user roles and permissions to limit access to sensitive data.</li>
                    <li>Enabling two-factor authentication (2FA) for added security.</li>
                </ul>
            </section>

            {/* Section: Support and Help */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-red-700 mb-4">❓ Need Help?</h2>
                <p className="text-gray-700 mb-4">
                    If you're having trouble using the Control Panel or have any questions, refer to the following resources:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Check out the <a href="/docs/troubleshooting" className="text-blue-600 underline">Troubleshooting Guide</a> for common issues.</li>
                    <li>Visit the <a href="/docs/contact-support" className="text-blue-600 underline">Support Page</a> for more ways to get in touch with our team.</li>
                    <li>Join the DBDash community forums for discussions and solutions from fellow users.</li>
                </ul>
            </section>

            {/* Next Step */}
            <div className="text-center">
                <a
                    href="/docs/advanced-usage"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    🚀 Learn Advanced Features
                </a>
            </div>
        </div>
    );
}
