export default function Footor() {
  return (
    <footer className="bg-yellow-200 bg-opacity-5 backdrop-blur-sm text-white py-4 px-6 mx-auto w-[82%] text-left shadow-md mt-8 border-t border-yellow-200 dark:border-yellow-500 rounded-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
        {/* Left side - About */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold mb-1">About Us</h3>
          <p className="text-xs text-gray-300">
            FreshTech Jobs connects tech job seekers with top opportunities in the industry.
          </p>
        </div>

        {/* Center - Links */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold mb-1">Quick Links</h3>
          <ul className="text-xs space-y-1">
            <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
            <li><a href="/careers" className="hover:text-yellow-500">Careers</a></li>
            <li><a href="/contact" className="hover:text-yellow-500">Contact</a></li>
            <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right side - Social Media & Newsletter */}
        <div className="text-center sm:text-left">
          <h3 className="text-sm font-semibold mb-1">Follow Us</h3>
          <div className="flex justify-center sm:justify-start space-x-3 mb-3">
            <a href="#" className="text-2xl hover:text-yellow-500"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-2xl hover:text-yellow-500"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-2xl hover:text-yellow-500"><i className="fab fa-linkedin"></i></a>
            <a href="#" className="text-2xl hover:text-yellow-500"><i className="fab fa-instagram"></i></a>
          </div>

          {/* Newsletter Signup */}
          <input
            type="email"
            placeholder="Your email"
            className="p-2 rounded-lg border border-gray-300 w-full sm:w-40 text-xs mb-3"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-4">
        <p>&copy; 2025 FreshTech Jobs. All rights reserved.</p>
      </div>
    </footer>
  );
}
