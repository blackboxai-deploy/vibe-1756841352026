export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hello World
        </h1>
        <p className="text-xl text-gray-600 max-w-md mx-auto">
          Welcome to your Next.js application! This is a simple Hello World page built with modern web technologies.
        </p>
        <div className="mt-8">
          <div className="inline-flex items-center px-6 py-3 bg-white rounded-full shadow-lg border border-gray-200">
            <span className="text-sm text-gray-700 font-medium">
              Built with Next.js + Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}