// pages/docs/about.jsx

export default function AboutDBDash() {
    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">About DBDash</h1>
            <p className="text-lg text-gray-700 text-center mb-12">
                DBDash is redefining how you work with MySQL databases — fast, visual, and effortless.
            </p>

            {/* Overview Section */}
            <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Simplified, Visual MySQL Management</h2>
                    <p className="text-gray-600 mb-4">
                        Whether you're a developer, analyst, or student, DBDash provides a clean, intuitive interface to explore and manage your MySQL databases without diving deep into repetitive SQL queries.
                    </p>
                    <p className="text-gray-600">
                        Think of it as your database's visual command center — cross-platform, smart, and optimized for productivity.
                    </p>
                </div>
                <img
                    src="/about/db-overview.png"
                    alt="DBDash Dashboard Screenshot"
                    className="rounded-xl shadow-lg"
                />
            </div>

            {/* Features Section */}
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-10">Why Choose DBDash?</h2>
            <div className="space-y-16">

                {/* Feature 1 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src="/about/schema-visualization.png"
                        alt="Schema Visualization"
                        className="rounded-xl shadow-md"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">🔍 Total Visualization</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Instantly view your schema structure and table relationships.</li>
                            <li>Interactive ER diagrams for intuitive navigation.</li>
                            <li>Data preview and live filtering built-in.</li>
                        </ul>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">⚡ Powerful Simplicity</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Execute queries with fewer clicks and minimal syntax.</li>
                            <li>Smart autocompletion and quick command actions.</li>
                            <li>No more struggling with clunky native clients.</li>
                        </ul>
                    </div>
                    <img
                        src="/about/simple-ui.png"
                        alt="Simple UI"
                        className="rounded-xl shadow-md"
                    />
                </div>

                {/* Feature 3 */}
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <img
                        src="/about/modern-workflow.png"
                        alt="Modern Workflow"
                        className="rounded-xl shadow-md"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-blue-700 mb-3">🚀 Built for Modern Workflows</h3>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Cross-platform app optimized for speed and scalability.</li>
                            <li>Responsive design with a modern dark/light theme.</li>
                            <li>Regular updates with the latest database tech trends.</li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Journey Section */}
            <div className="mt-20 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Journey</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                    DBDash was born out of frustration with complex database tools and unnecessary repetition. We set out to create a clean, fast, and reliable platform that focuses on what really matters — helping you interact with your data effortlessly. Our mission is to make database management productive and even enjoyable.
                </p>
            </div>
        </div>
    );
}
