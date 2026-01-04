export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
      <h1 className="text-2xl font-bold">resume.</h1>
      <div className="space-x-4">
        <button className="text-gray-700">Try demo</button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-md">Get Started</button>
      </div>
    </nav>
  );
}
