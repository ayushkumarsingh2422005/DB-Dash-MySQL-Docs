export default function UserManager() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">👥 User Manager</h1>
            <p className="text-gray-600 text-lg mb-8">
                The User Manager lets you create and manage database users, control their privileges, and handle authentication configurations.
            </p>

            {/* Create Users */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">➕ Create Users</h2>
                <p className="text-gray-700">
                    Add new users with a username and password. You can assign them roles and privileges immediately.
                </p>
            </section>

            {/* Delete Users */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🗑️ Delete Users</h2>
                <p className="text-gray-700">
                    Permanently remove users from the database system. Ensure you review privilege dependencies before deletion.
                </p>
            </section>

            {/* View Privileges */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🔍 View Privileges</h2>
                <p className="text-gray-700">
                    Inspect existing user permissions for databases, tables, and actions like SELECT, INSERT, UPDATE, etc.
                </p>
            </section>

            {/* Grant Privileges */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">✅ Grant Privileges</h2>
                <p className="text-gray-700">
                    Assign specific privileges to a user (e.g., SELECT, INSERT, CREATE). Multiple privileges can be granted at once.
                </p>
            </section>

            {/* Revoke Privileges */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🚫 Revoke Privileges</h2>
                <p className="text-gray-700">
                    Remove user access or actions on a database/table without deleting the user.
                </p>
            </section>

            {/* Flush Privileges */}
            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🔄 Flush Privileges</h2>
                <p className="text-gray-700">
                    Apply changes to user privileges in real-time by flushing the privileges table. Useful after manual edits or grants.
                </p>
            </section>

            <div className="mt-12 text-center">
                <a
                    href="/web-ui"
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition"
                >
                    🔙 Back to Web UI Overview
                </a>
            </div>
        </div>
    );
}
