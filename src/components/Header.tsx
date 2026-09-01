"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: "Pipeline Maintenance", href: "/services/pipeline-maintenance" },
    { name: "Pipeline Construction", href: "/services/pipeline-construction" },
    { name: "Underwater & Topside Facility Maintenance", href: "/services/underwater-maintenance" },
    { name: "Online Leak Repair", href: "/services/online-leak-repair" },
    { name: "Facility Integrity Survey", href: "/services/facility-integrity" },
    { name: "Intelligent Pigging", href: "/services/intelligent-pigging" },
    { name: "PRMS Manufacturing & Installation", href: "/services/prms" },
    { name: "Cofferdam Services", href: "/services/cofferdam" },
  ];

  return (
    <>
      {/* Top bar – NOT sticky */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex gap-4">
            <Link href="/about" className="hover:text-red-400">
              About Us
            </Link>
            <Link href="/blog" className="hover:text-red-400">
              Trends
            </Link>
            <Link href="/contact" className="hover:text-red-400">
              Contact
            </Link>
          </div>
          <div className="flex items-center gap-1">
            <span>🇳🇬</span>
            <span>Nigeria</span>
          </div>
        </div>
      </div>

      {/* Sticky header with glass effect */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/yemarslogo.png"
              alt="Yemars Oil and Gas logo"
              width={100}
              height={50}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="font-semibold text-gray-800 hover:text-red-600 transition">
              Home
            </Link>
            <Link href="/about" className="font-semibold text-gray-800 hover:text-red-600 transition">
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-semibold text-gray-800 hover:text-red-600 transition flex items-center gap-1">
                Services
                <svg
                  className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-md border-t-4 border-red-600 py-2 z-50">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/projects" className="font-semibold text-gray-800 hover:text-red-600 transition">
              Projects
            </Link>
            <Link href="/contact" className="font-semibold text-gray-800 hover:text-red-600 transition">
              Contact
            </Link>
          </nav>

          {/* Desktop Right side buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Contact Us
            </Link>
            <Link
              href="/brochure.pdf"
              target="_blank"
              rel="noopener"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-md transition flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Brochure
            </Link>
          </div>

          {/* Mobile Right side: only Brochure button + hamburger */}
          <div className="lg:hidden flex items-center gap-2">
            <Link
              href="/brochure.pdf"
              target="_blank"
              rel="noopener"
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-3 py-2 rounded-md text-sm flex items-center gap-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Brochure
            </Link>
            <button
              className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-800 transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 flex flex-col gap-2">
              <Link href="/" className="py-2 text-gray-800 font-semibold hover:text-red-600" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="py-2 text-gray-800 font-semibold hover:text-red-600" onClick={() => setMobileOpen(false)}>
                About
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="w-full flex justify-between items-center py-2 text-gray-800 font-semibold hover:text-red-600"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services
                  <svg
                    className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {servicesOpen && (
                  <div className="ml-4 border-l-2 border-red-600 pl-4 mt-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block py-1.5 text-sm text-gray-600 hover:text-red-600"
                        onClick={() => setMobileOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" className="py-2 text-gray-800 font-semibold hover:text-red-600" onClick={() => setMobileOpen(false)}>
                Projects
              </Link>
              <Link href="/contact" className="py-2 text-gray-800 font-semibold hover:text-red-600" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>

              {/* Buttons also in drawer for convenience (optional) */}
              <div className="mt-4 flex flex-col gap-2">
                <Link
                  href="/contact"
                  className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener"
                  className="bg-gray-900 text-white font-semibold py-2 px-4 rounded-md text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Brochure
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}