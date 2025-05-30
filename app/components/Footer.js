export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 px-6 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between">
      <div>
        © {new Date().getFullYear()} DBDash. All rights reserved.
      </div>
      <div className="space-x-4 mt-2 md:mt-0">
        <a href="/docs/introduction" className="hover:underline">Docs</a>
        <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href="mailto:contact@dbdash.com" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
} 