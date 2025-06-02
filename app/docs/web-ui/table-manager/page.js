export default function TableManager() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">📋 Table Manager</h1>
            <p className="text-gray-600 text-lg mb-8">
                Manage database tables — from creation to deletion — and handle operations like inserting data, modifying structures, and applying constraints.
            </p>

            {[
                ["Table Info", "View table schema, number of rows, indexes, foreign keys, and table engine details."],
                ["Add New Table", "Create a new table with custom column definitions and constraints."],
                ["Rename Table", "Change the table name without affecting its structure or data."],
                ["View Table Data", "Browse existing records in a structured format with pagination and filters."],
                ["Drop Table", "Permanently delete a table and all of its data from the database."],
                ["Clear Table Data", "Remove all rows from a table without deleting the table itself."],
                ["Delete Row", "Delete specific records using filters or row selectors."],
                ["Delete Column", "Remove a column and its data from a table."],
                ["Insert Data", "Add one or more new rows to a table through a visual or raw SQL interface."],
                ["Sort Table Data", "Sort table content by column in ascending or descending order."],
                ["Add Constraints", "Add primary keys, foreign keys, unique or not-null constraints to a table."],
                ["Add Column", "Add new columns with custom data types, default values, and constraints."]
            ].map(([title, desc]) => (
                <section className="mb-8" key={title}>
                    <h2 className="text-2xl font-semibold text-blue-700 mb-2">🧩 {title}</h2>
                    <p className="text-gray-700">{desc}</p>
                </section>
            ))}

            <div className="mt-12 text-center">
                <a href="/web-ui/code-generation" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    ➡️ Next: Code Generation
                </a>
            </div>
        </div>
    );
}
