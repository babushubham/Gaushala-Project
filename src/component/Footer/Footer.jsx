import { Link } from "react-router-dom";



const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white">About Us</h2>
          <p className="mt-2 text-gray-400">
            Dedicated to the welfare and care of cows, promoting ethical and sustainable practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white">Quick Links</h2>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="text-gray-400 hover:text-gray-100 transition">Home</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-gray-100 transition">About</Link></li>
            <li><Link to="/donate" className="text-gray-400 hover:text-gray-100 transition">Donate</Link></li>
            <li><Link to="/gallery" className="text-gray-400 hover:text-gray-100 transition">Gallery</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-gray-100 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="mt-2 text-gray-400">Email: support@goshala.org</p>
          <p className="text-gray-400">Phone: +91 XXXXXXXXXX</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            <Link href="#" className="text-gray-400 hover:text-gray-100 transition">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100 transition">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-gray-100 transition">
              <i className="fab fa-instagram"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
        &copy; {new Date().getFullYear()} Goshala. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;