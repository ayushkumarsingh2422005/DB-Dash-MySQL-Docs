export default function UsesPage() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">🛠️ Uses</h1>
            <p className="text-lg text-gray-600 mb-10">
                Here’s a list of the tools, tech, and gear I use for development, design, and productivity.
            </p>

            <Section title="💻 Development Setup">
                <Item title="Editor">Visual Studio Code (with Tailwind, GitLens, Prettier)</Item>
                <Item title="Terminal">Warp & Zsh with Oh-My-Zsh</Item>
                <Item title="Theme">Catppuccin Mocha (VS Code + Warp)</Item>
                <Item title="Extensions">ESLint, Prettier, Tailwind IntelliSense, GitHub Copilot</Item>
                <Item title="Fonts">Fira Code (with ligatures)</Item>
            </Section>

            <Section title="🌐 Web Tech Stack">
                <Item title="Frontend">React, Next.js, Tailwind CSS</Item>
                <Item title="Backend">Node.js, Express, MongoDB</Item>
                <Item title="Auth">JWT, OAuth 2.0 (Google/LinkedIn), EmailJS</Item>
                <Item title="Storage">Cloudinary, Firebase</Item>
                <Item title="Styling">Tailwind, NativeWind (React Native)</Item>
            </Section>

            <Section title="📱 Mobile Development">
                <Item title="Frameworks">React Native, Flutter, Android (Java)</Item>
                <Item title="Tools">Expo, NativeWind, VS Code</Item>
                <Item title="Testing">Emulators, real devices, Expo Go</Item>
            </Section>

            <Section title="🎨 Design Tools">
                <Item title="Primary">Figma (auto layout, components, prototyping)</Item>
                <Item title="Assets">Icons8, Heroicons, Feather Icons</Item>
            </Section>

            <Section title="⚙️ Misc & Productivity">
                <Item title="Note Taking">Notion, Obsidian</Item>
                <Item title="Task Mgmt">Linear, Trello, Google Tasks</Item>
                <Item title="Browsers">Brave (dev), Chrome (testing), Firefox (privacy)</Item>
                <Item title="Communication">Discord, Telegram, Slack</Item>
                <Item title="OS">Windows 11 & Ubuntu (dual boot)</Item>
            </Section>
        </div>
    );
}

function Section({ title, children }) {
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">{title}</h2>
            <ul className="space-y-2">{children}</ul>
        </section>
    );
}

function Item({ title, children }) {
    return (
        <li>
            <span className="font-semibold text-gray-800">{title}:</span>{" "}
            <span className="text-gray-700">{children}</span>
        </li>
    );
}
