export default function DatabaseManager() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">📁 Database Manager</h1>
            <p className="text-gray-600 text-lg mb-8">
                Manage your database instances effortlessly using the DBDash UI. Perform actions like creating, deleting, and inspecting databases in a visual, user-friendly manner.
            </p>

            {/* Create Database */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">➕ Create Database</h2>
                <p className="text-gray-700">
                    Add a new database by providing a name and configuration options. You can specify character set, collation, and privileges.
                </p>
            </section>

            {/* Delete Database */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🗑️ Delete Database</h2>
                <p className="text-gray-700">
                    Remove an existing database. You’ll be asked for confirmation to avoid accidental deletion.
                </p>
            </section>

            {/* Database Info */}
            <section className="mb-10">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">ℹ️ Database Info</h2>
                <p className="text-gray-700">
                    View metadata like size, number of tables, creation time, character sets, and active connections.
                </p>
            </section>

            <div className="mt-12 text-center">
                <a
                    href="/web-ui/user-manager"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
                >
                    ➡️ Next: User Manager
                </a>
            </div>
        </div>
    );
}
