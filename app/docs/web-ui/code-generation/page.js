export default function CodeGeneration() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">🛠️ Code Generation</h1>
            <p className="text-gray-600 text-lg mb-8">
                Automatically generate code snippets for working with your database in various programming languages.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🧬 Generate Code for Tables</h2>
                <p className="text-gray-700">
                    Generate SQL scripts or ORM models (e.g., Sequelize, Prisma, Mongoose) for any selected table.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">⚙️ Generate Code for Queries</h2>
                <p className="text-gray-700">
                    Quickly produce code snippets (in JavaScript, Python, etc.) to perform CRUD operations on tables.
                </p>
            </section>

            <div className="mt-12 text-center">
                <a href="/web-ui/data-export" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    ➡️ Next: Data Export
                </a>
            </div>
        </div>
    );
}
