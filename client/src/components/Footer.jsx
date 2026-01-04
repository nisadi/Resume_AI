export default function Footer() {
  return (
    <footer className="bg-white border-t px-6 py-10">
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold mb-2">Product</h4>
          <p className="text-gray-600">Home</p>
          <p className="text-gray-600">Pricing</p>
          <p className="text-gray-600">Affiliate</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <p className="text-gray-600">Blogs</p>
          <p className="text-gray-600">Careers (We’re hiring!)</p>
          <p className="text-gray-600">About</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Legal</h4>
          <p className="text-gray-600">Privacy</p>
          <p className="text-gray-600">Terms</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10 text-sm">© 2025 Resume Builder</p>
    </footer>
  );
}
