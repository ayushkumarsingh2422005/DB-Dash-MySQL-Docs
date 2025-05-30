import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to DBDash Documentation</h1>
      <p className="text-lg text-gray-700 mb-6">
        Use the sidebar to navigate through the documentation sections and examples.
      </p>
      <div className="mt-8">
        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
          Start by selecting a topic from the left
        </span>
      </div>
    </div>
  );
}
