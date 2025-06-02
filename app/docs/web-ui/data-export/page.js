export default function DataExport() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">📤 Data Export</h1>
            <p className="text-gray-600 text-lg mb-8">
                Export table data for backup, reporting, or transfer to another system. Choose between summary and full exports.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">📝 Summary Export</h2>
                <p className="text-gray-700">
                    Export key summary details such as schema, row count, and limited row samples in CSV or JSON format.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">📦 Full Data Export</h2>
                <p className="text-gray-700">
                    Export the complete table content in full (including metadata) as SQL dump, CSV, JSON, or Excel files.
                </p>
            </section>

            <div className="mt-12 text-center">
                <a href="/web-ui/query-console" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                    ➡️ Next: Query Console
                </a>
            </div>
        </div>
    );
}
