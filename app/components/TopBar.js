export default function TopBar({ onMenuClick }) {
  return (
    <header className="sticky top-0 z-20 bg-white border-b shadow-sm flex items-center justify-between px-6 py-3">
      <div className="flex items-center space-x-3">
        <button
          className="md:hidden p-2 rounded hover:bg-gray-100 focus:outline-none"
          onClick={onMenuClick}
          aria-label="Open sidebar menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="font-bold text-xl text-blue-700">DBDash Docs</span>
      </div>
      <div className="flex-1 mx-6 max-w-md">
        <input
          type="text"
          placeholder="Search docs..."
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 hover:text-gray-900"
      >
        <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
        </svg>
      </a>
    </header>
  );
} 