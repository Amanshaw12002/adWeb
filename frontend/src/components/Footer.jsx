// Footer.tsx
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-lg font-semibold mb-4">MyBrand</h3>
          <p className="text-white text-sm">
            Building user-friendly digital experiences.
          </p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-3">Services</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><Link to="/service/web" className="hover:text-white">Web Development</Link></li>
            <li><Link to="/service/design" className="hover:text-white">UI/UX Design</Link></li>
            <li><Link to="/service/seo" className="hover:text-white">SEO</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-3">Follow Us</h4>
          <ul className="space-y-2 text-sm text-white">
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black text-center py-4 text-sm text-white">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
}
