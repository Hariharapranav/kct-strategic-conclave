import React from "react";
import { Mail, MapPin, Phone, CalendarDays } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-gray-800 text-gray-300 border-t border-gray-600"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="mb-4">
              <img
                src="/logo.png"
                alt="Kumaraguru Strategic Conclave Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Kumaraguru College of Liberal Arts and Science & RISET Foundation.
              Reconciling Evolving Global Dynamics into Strategic Opportunities
              for India.
            </p>
          </div>

          {/* Contact 1 */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact KCLAS</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span>Coimbatore – 641049, India</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:principal@kclas.ac.in"
                  className="hover:text-red-300"
                >
                  principal@kclas.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <GlobeIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a
                  href="https://www.kclas.ac.in"
                  className="hover:text-red-300"
                >
                  www.kclas.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Contact 2 */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact RISET</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a
                  href="mailto:reachus@risetfoundation.com"
                  className="hover:text-red-300"
                >
                  reachus@risetfoundation.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <GlobeIcon className="w-5 h-5 text-red-400 flex-shrink-0" />
                <a
                  href="https://www.risetfoundation.com"
                  className="hover:text-red-300"
                >
                  www.risetfoundation.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-16 pt-8 text-center text-sm">
          <p>&copy; 2025 Kumaraguru Institutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Helper for Footer
const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

export default Footer;
