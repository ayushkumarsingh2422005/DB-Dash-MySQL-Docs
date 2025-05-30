import React from 'react'

export default function notFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <div className="mb-6">
                <span className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100">
                    <svg className="w-16 h-16 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
                    </svg>
                </span>
            </div>
            <h1 className="text-6xl font-extrabold text-blue-700 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Oops! The page you are looking for doesn&apos;t exist or has been moved.<br />
                Try using the sidebar to find your way, or return to the homepage.
            </p>
            <a
                href="/"
                className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors font-semibold"
            >
                Go to Homepage
            </a>
        </div>
    );
}
