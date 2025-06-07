"use client"
import Link from 'next/link'
// import { Button } from '../ui/button'
import { useState } from 'react';
import { ThemeToggle } from '../theme/ThemeToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="navbar" className="fixed max-w-7xl w-full left-1/2 -translate-x-1/2 top-3 z-50 backdrop-blur-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-4 bg-transparent mt-1 border-2 rounded-lg border-primary/30 dark:border-primary/10">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="#" onClick={(e) => handleScrollToSection(e, "home")} className="text-2xl font-bold text-foreground">
              JobAlchemy
            </Link>
          </div>          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <NavLink to="#benefits" onClick={(e) => handleScrollToSection(e, "benefits")}>Benefits</NavLink>
            <NavLink to="#features" onClick={(e) => handleScrollToSection(e, "features")}>Features</NavLink>
            <NavLink to="#pricing" onClick={(e) => handleScrollToSection(e, "pricing")}>Pricing</NavLink>
            <NavLink to="#faq" onClick={(e) => handleScrollToSection(e, "faq")}>FAQ</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {/* <Link href={"/auth/login"}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Login</Button>
            </Link> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              id="mobile-menu-button"
              className="text-foreground hover:text-primary"
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
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleScrollToSection(e, "benefits");
                }}
              >
                Benefits
              </MobileNavLink>
              <MobileNavLink
                to="#features"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleScrollToSection(e, "features");
                }}
              >
                Features
              </MobileNavLink>
              <MobileNavLink
                to="#solutions"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleScrollToSection(e, "solutions");
                }}
              >
                Services
              </MobileNavLink>              <MobileNavLink
                to="#pricing"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleScrollToSection(e, "pricing");
                }}
              >
                Pricing
              </MobileNavLink>
              <MobileNavLink
                to="/blogs"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </MobileNavLink>
              {/* <div className="pt-4 space-y-2">
                <Link href={"/auth/login"}>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">Login</Button>
                </Link>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function NavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  return (
    <Link
      href={to}
      className="text-foreground hover:text-secondary duration-100 transition-colors"
      onClick={onClick}
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
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={to}
      className="block px-3 py-2 text-foreground hover:text-secondary transition-colors"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}


