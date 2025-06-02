export default function QueryConsole() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-10">💻 Query Console</h1>
            <p className="text-gray-600 text-lg mb-8">
                Write, run, and manage SQL queries directly from the console. Built-in features assist with productivity and accuracy.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">✨ Autocompletion</h2>
                <p className="text-gray-700">
                    Get intelligent suggestions for table names, column names, functions, and SQL syntax as you type.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold text-blue-700 mb-2">🤖 AI Suggestions</h2>
                <p className="text-gray-700">
                    Use AI-powered assistance to generate queries, fix syntax, optimize performance, or translate natural language to SQL.
                </p>
            </section>

            <div className="mt-12 text-center">
                <a href="/web-ui" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition">
                    🔙 Back to Web UI Overview
                </a>
            </div>
        </div>
    );
}
