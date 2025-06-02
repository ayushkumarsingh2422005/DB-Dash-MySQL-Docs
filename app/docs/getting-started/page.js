export default function GettingStarted() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">Getting Started with DBDash</h1>
            <p className="text-lg text-gray-600 text-center mb-10">
                Begin your journey with DBDash in just a few minutes. Here's how to get your first setup running.
            </p>

            {/* Section: Download DBDash */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">📦 Download DBDash</h2>
                <p className="text-gray-700 mb-4">
                    DBDash is available for macOS, Windows, and Linux. You can download the latest version from our official website or GitHub releases page.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    <a
                        href="https://www.dbdash.live/download"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-xl text-center"
                    >
                        🌐 Download from Official Site
                    </a>
                    <a
                        href="https://github.com/your-repo/dbdash/releases"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-5 rounded-xl text-center"
                    >
                        🐙 Download from GitHub
                    </a>
                </div>

                <p className="text-sm text-gray-500 mt-4">
                    ⚠️ Ensure you download the correct version for your operating system.
                </p>
            </section>

            {/* Section: System Requirements */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🖥️ System Requirements</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>OS:</strong> Windows 10+, macOS 11+, or any modern Linux distro</li>
                    <li><strong>RAM:</strong> Minimum 4GB (8GB recommended)</li>
                    <li><strong>Disk Space:</strong> ~200MB</li>
                    <li><strong>Node.js:</strong> (optional, only for advanced custom builds)</li>
                </ul>
            </section>

            {/* Section: What’s Next */}
            <section>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">🚀 What’s Next?</h2>
                <p className="text-gray-700 mb-4">
                    Once you’ve downloaded the package, the next step is to install and set it up on your machine. We support all major platforms with step-by-step instructions.
                </p>
                <a
                    href="/docs/installation"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    👉 Go to Installation Guide
                </a>
            </section>
        </div>
    );
}
