import React from "react";
import { icons } from "../../icons/icons";
import { Link } from "react-router-dom";
import { linkedin, youtube, whatsapp, tiktok } from "../../images/image-export";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-white text-xl font-semibold mb-4">
              FG Builders
            </h2>
            <p className="text-sm">
              FG Builders is a leading construction company offering luxury
              homes and exceptional services to clients in Ghana and beyond.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/properties"
                  className="hover:text-white transition-colors"
                >
                  Listings
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                {icons.phone} <span>+233 200877944</span>
              </li>

              <li className="flex items-center space-x-2">
                {icons.location} <span>Accra, Ghana</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://youtube.com" className="hover:text-white">
                <img
                  src={youtube}
                  alt="youtube logo"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
              <Link to="https://tiktok.com" className="hover:text-white">
                <img
                  src={tiktok}
                  alt="youtube logo"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
              <Link to="https://whatsapp.com" className="hover:text-white">
                <img
                  src={whatsapp}
                  alt="youtube logo"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
              <Link to="https://linkedin.com" className="hover:text-white">
                <img
                  src={linkedin}
                  alt="youtube logo"
                  height={50}
                  width={50}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} FG Builders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







