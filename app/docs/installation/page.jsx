export default function Installation() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Installation Guide</h1>
            <p className="text-lg text-gray-600 text-center mb-12">
                Follow these steps to install DBDash on your operating system. It's simple and takes just a few minutes.
            </p>

            {/* Windows Installation */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-blue-700 mb-4">🪟 Windows</h2>
                <ul className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Download the latest <code className="bg-gray-100 px-1 py-0.5 rounded">.exe</code> file from the <a href="https://www.dbdash.live/download" className="text-blue-600 underline">official website</a>.</li>
                    <li>Double-click the installer and follow the setup wizard.</li>
                    <li>Once installed, launch DBDash from the Start Menu.</li>
                    <li>Allow firewall access when prompted for network connectivity.</li>
                </ul>
            </section>

            {/* macOS Installation */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-pink-700 mb-4">🍎 macOS</h2>
                <ul className="list-decimal list-inside text-gray-700 space-y-2">
                    <li>Download the <code className="bg-gray-100 px-1 py-0.5 rounded">.dmg</code> file from the <a href="https://www.dbdash.live/download" className="text-blue-600 underline">official website</a>.</li>
                    <li>Open the file and drag the DBDash icon into your <code className="bg-gray-100 px-1 py-0.5 rounded">Applications</code> folder.</li>
                    <li>Launch the app from Spotlight or Applications folder.</li>
                    <li>If macOS blocks the app, go to <code className="bg-gray-100 px-1 py-0.5 rounded">System Preferences → Security & Privacy</code> and click "Open Anyway".</li>
                </ul>
            </section>

            {/* Linux Installation */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-green-700 mb-4">🐧 Linux</h2>
                <p className="text-gray-700 mb-2">Choose a package based on your distribution:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                    <li><strong>Debian/Ubuntu:</strong> Download the <code className="bg-gray-100 px-1 py-0.5 rounded">.deb</code> package</li>
                    <li><strong>Fedora/RHEL:</strong> Download the <code className="bg-gray-100 px-1 py-0.5 rounded">.rpm</code> package</li>
                    <li><strong>Arch-based:</strong> Use AUR or extract the tarball manually</li>
                </ul>
                <p className="text-gray-700 mb-2">To install manually using terminal:</p>
                <pre className="bg-gray-100 text-sm p-4 rounded-md overflow-auto text-gray-800">
                    sudo dpkg -i dbdash-latest.deb
                    sudo apt-get install -f  # To fix dependencies
                </pre>
                <p className="text-sm text-gray-500 mt-2">⚠️ You may need to give executable permissions using <code>chmod +x</code>.</p>
            </section>

            {/* Post Installation */}
            <section className="mb-16">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">✅ After Installation</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Open DBDash and connect to your MySQL server using credentials.</li>
                    <li>Explore schema visually or start writing queries right away.</li>
                    <li>Enable auto-sync for real-time schema updates.</li>
                </ul>
            </section>

            <div className="text-center">
                <a
                    href="/docs/usage"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl"
                >
                    🚀 Proceed to Usage Guide
                </a>
            </div>
        </div>
    );
}
