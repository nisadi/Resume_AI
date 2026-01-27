export default function Footer() {
  return (
    <footer
      className="
        bg-white border-t px-6 py-10
        transition-colors duration-300 ease-in-out
        hover:bg-green-50
      "
    >
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Product */}
        <div>
          <h4 className="font-bold mb-3 text-gray-900">Product</h4>
          <p className="footer-link">Home</p>
          <p className="footer-link">Pricing</p>
          <p className="footer-link">Affiliate</p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3 text-gray-900">Company</h4>
          <p className="footer-link">Blogs</p>
          <p className="footer-link">Careers (We’re hiring!)</p>
          <p className="footer-link">About</p>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold mb-3 text-gray-900">Legal</h4>
          <p className="footer-link">Privacy</p>
          <p className="footer-link">Terms</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10 text-sm transition-colors duration-300 hover:text-green-600">
        © 2025 Resume Builder
      </p>
    </footer>
  );
}
