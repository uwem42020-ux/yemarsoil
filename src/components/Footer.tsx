import Link from "next/link";

export default function Footer() {
  const services = [
    { name: "Pipeline Maintenance", href: "/services/pipeline-maintenance" },
    { name: "Pipeline Construction", href: "/services/pipeline-construction" },
    { name: "Underwater & Topside Maintenance", href: "/services/underwater-maintenance" },
    { name: "Online Leak Repair", href: "/services/online-leak-repair" },
    { name: "Facility Integrity Survey", href: "/services/facility-integrity" },
    { name: "Intelligent Pigging", href: "/services/intelligent-pigging" },
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Trends", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main footer area */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Company info */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-red-500">Yemars Oil and Gas</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Delivering reliable energy solutions, engineering, procurement, and
            construction services across Nigeria and beyond.
          </p>
          <div className="mt-4 flex gap-3">
            {/* Social icons (placeholders) */}
            <a href="#" className="text-gray-300 hover:text-red-400" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 12.27h-3v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96v5.7h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 1.99 3.59 4.58v6.48z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-red-400" aria-label="Twitter">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 4.86c-.81.36-1.68.61-2.59.72.93-.56 1.64-1.45 1.98-2.51-.87.52-1.83.89-2.86 1.09-.82-.87-1.99-1.42-3.28-1.42-2.49 0-4.51 2.02-4.51 4.51 0 .35.04.69.11 1.02-3.75-.19-7.08-1.99-9.31-4.73-.39.67-.61 1.45-.61 2.28 0 1.57.8 2.95 2.01 3.76-.74-.02-1.44-.23-2.05-.57v.06c0 2.19 1.56 4.02 3.62 4.44-.38.1-.78.16-1.19.16-.29 0-.57-.03-.85-.08.57 1.79 2.23 3.09 4.19 3.13-1.54 1.21-3.48 1.93-5.58 1.93-.36 0-.72-.02-1.07-.06 2.01 1.29 4.4 2.04 6.96 2.04 8.35 0 12.91-6.92 12.91-12.91 0-.2 0-.39-.01-.58.89-.64 1.66-1.44 2.27-2.35z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-red-400" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.64l.36-4h-4v-1.28c0-1.03.21-1.44 1.22-1.44h2.78v-4h-3.55c-3.22 0-5.45 1.96-5.45 5.27v1.45z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="text-sm text-gray-300 hover:text-red-400 transition">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Our Services</h4>
          <ul className="space-y-2">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="text-sm text-gray-300 hover:text-red-400 transition">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>123 Energy Drive, Port Harcourt, Nigeria</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+234 123 456 7890</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@yemars.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Yemars Oil and Gas. All rights reserved.</p>
          <p>Designed with <span className="text-red-500">&hearts;</span> for the energy sector.</p>
        </div>
      </div>
    </footer>
  );
}