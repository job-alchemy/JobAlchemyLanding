"use client"
import Link from 'next/link'
import { Button } from '../ui/button'
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section id="navbar" className="fixed w-full max-w-7xl top-3 z-50 backdrop-blur-md sm:-translate-x-8">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-4 bg-transparent mt-1 border-2 rounded-lg border-[#9addd4]/30">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="#" className="text-2xl font-bold text-[#4a4a4a]">
              Yarooo
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="#features">Benefits</NavLink>
            <NavLink to="#howItWorks">Features</NavLink>
            <NavLink to="#pricing">Services</NavLink>
            {/* <NavLink to="#contact">Contact</NavLink> */}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link href={"/auth/login"}>
              <Button className="bg-[#4a4a4a] hover:bg-[#4a4a4a]/90 text-[#faf9f5]">Login</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              className="text-[#4a4a4a] hover:text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <MobileNavLink
                to="#benefits"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </MobileNavLink>
              <MobileNavLink
                to="#features"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </MobileNavLink>
              <MobileNavLink
                to="#services"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </MobileNavLink>
              <div className="pt-4 space-y-2">
                <Link href={"/auth/login"}>
                  <Button className="bg-[#4a4a4a] hover:bg-[#4a4a4a]/90 text-[#faf9f5] w-full">Login</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
    href={to}
      className="text-[#4a4a4a] hover:text-[#e7b38c] duration-100 transition-colors"
    >
      {children}
    </Link>
  );
}

function MobileNavLink({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
    href={to}
      className="block px-3 py-2 text-[#4a4a4a] hover:text-[#e7b38c] transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}


