"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { ThemeToggle } from "../theme/ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Add throttling for smoother performance
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", smoothScroll);
    return () => window.removeEventListener("scroll", smoothScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Smooth scroll handler for hash links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (hash.startsWith('#')) {
      e.preventDefault();
      // If we're not on the home page, navigate to home first
      if (window.location.pathname !== '/') {
        window.location.href = `/${hash}`;
        return;
      }
      
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const Logo = () => (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-foreground px-2 py-1 relative z-20 hover:text-primary transition-colors"
    >
      <span className="font-medium text-lg  text-foreground">JobAlchemy</span>
    </Link>
  );

  const NavLinks = () => (
    <div className="lg:flex flex-row flex-1 absolute inset-0 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-muted-foreground font-medium hover:text-foreground transition duration-300">
      <Link
        href="/#benefits"
        className="text-muted-foreground relative px-4 py-2 hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
        onClick={e => handleSmoothScroll(e, '#benefits')}
      >
        <span className="relative z-20">Benefits</span>
      </Link>
      <Link
        href="/#features"
        className="text-muted-foreground relative px-4 py-2 hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
        onClick={e => handleSmoothScroll(e, '#features')}
      >
        <span className="relative z-20">Features</span>
      </Link>
      <Link
        href="/#pricing"
        className="text-muted-foreground relative px-4 py-2 hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
        onClick={e => handleSmoothScroll(e, '#pricing')}
      >
        <span className="relative z-20">Pricing</span>
      </Link>
      <Link
        href="/#faq"
        className="text-muted-foreground relative px-4 py-2 hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
        onClick={e => handleSmoothScroll(e, '#faq')}
      >
        <span className="relative z-20">FAQ</span>
      </Link>
      <Link
        href="/blogs"
        className="text-muted-foreground relative px-4 py-2 hover:text-foreground transition-all duration-300 ease-out hover:scale-105"
      >
        <span className="relative z-20">Blog</span>
      </Link>
    </div>
  );

  const ActionButtons = () => (
    <div className="flex items-center gap-4">
      <ThemeToggle />
      
    </div>
  );

  const MobileMenuButton = () => (
    <div className="flex items-center gap-2">
      <ThemeToggle />
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="p-2 rounded-md hover:bg-muted transition-colors duration-200"
        aria-label="Toggle mobile menu"
      >
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
          className={`text-foreground transition-transform duration-200 ${
            isMobileMenuOpen ? 'rotate-90' : ''
          }`}
        >
          {isMobileMenuOpen ? (
            <>
              <path d="M18 6L6 18"></path>
              <path d="M6 6l12 12"></path>
            </>
          ) : (
            <>
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </>
          )}
        </svg>
      </button>
    </div>
  );

  const MobileMenu = () => (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ 
        opacity: isMobileMenuOpen ? 1 : 0, 
        y: isMobileMenuOpen ? 0 : -20,
        display: isMobileMenuOpen ? 'block' : 'none'
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-2xl shadow-lg overflow-hidden mobile-menu-container"
    >
      <div className="flex flex-col p-4 space-y-4">
        <Link
          href="/#benefits"
          className="text-muted-foreground px-4 py-3 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          onClick={e => { handleSmoothScroll(e, '#benefits'); setIsMobileMenuOpen(false); }}
        >
          Benefits
        </Link>
        <Link
          href="/#features"
          className="text-muted-foreground px-4 py-3 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          onClick={e => { handleSmoothScroll(e, '#features'); setIsMobileMenuOpen(false); }}
        >
          Features
        </Link>
        <Link
          href="/#pricing"
          className="text-muted-foreground px-4 py-3 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          onClick={e => { handleSmoothScroll(e, '#pricing'); setIsMobileMenuOpen(false); }}
        >
          Pricing
        </Link>
        <Link
          href="/#faq"
          className="text-muted-foreground px-4 py-3 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          onClick={e => { handleSmoothScroll(e, '#faq'); setIsMobileMenuOpen(false); }}
        >
          FAQ
        </Link>
        <Link
          href="/blogs"
          className="text-muted-foreground px-4 py-3 hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Blog
        </Link>
        <div className="border-t border-border pt-4 space-y-3">
          <button
            className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-bold hover:bg-primary/90 transition-all duration-200 shadow-md"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="mt-2 w-full fixed top-0 inset-x-0 z-50">
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navbar */}
      <motion.div
        className="hidden lg:flex flex-row self-start items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full"
        style={{
          minWidth: "800px",
          willChange: "auto",
        }}
        animate={{
          backgroundColor: isScrolled ? "hsl(var(--card))" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "rgba(34, 42, 53, 0.12) 0px 0px 24px, rgba(0, 0, 0, 0.10) 0px 1px 1px, rgba(34, 42, 53, 0.08) 0px 0px 0px 1px, rgba(34, 42, 53, 0.16) 0px 0px 4px, rgba(47, 48, 55, 0.10) 0px 16px 68px, rgba(255, 255, 255, 0.15) 0px 1px 0px inset"
            : "rgba(34, 42, 53, 0.12) 0px 0px 0px, rgba(0, 0, 0, 0.10) 0px 0px 0px, rgba(34, 42, 53, 0.08) 0px 0px 0px 0px, rgba(34, 42, 53, 0.16) 0px 0px 0px, rgba(47, 48, 55, 0.10) 0px 0px 0px, rgba(255, 255, 255, 0.15) 0px 0px 0px inset",
          transform: isScrolled ? "translateY(20px)" : "none",
          width: isScrolled ? "60%" : "100%",
          border: isScrolled ? "1px solid hsl(var(--border))" : "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <Logo />
        <NavLinks />
        <ActionButtons />
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        className="flex relative flex-col lg:hidden w-full justify-between items-center max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50"
        style={{
          willChange: "auto",
          borderRadius: "2rem",
        }}
        animate={{
          backgroundColor: isScrolled ? "hsl(var(--card))" : "transparent",
          backdropFilter: isScrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: isScrolled
            ? "rgba(34, 42, 53, 0.06) 0px 0px 24px, rgba(0, 0, 0, 0.05) 0px 1px 1px, rgba(34, 42, 53, 0.04) 0px 0px 0px 1px, rgba(34, 42, 53, 0.08) 0px 0px 4px, rgba(47, 48, 55, 0.05) 0px 16px 68px, rgba(255, 255, 255, 0.1) 0px 1px 0px inset"
            : "rgba(34, 42, 53, 0.06) 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px, rgba(34, 42, 53, 0.04) 0px 0px 0px 0px, rgba(34, 42, 53, 0.08) 0px 0px 0px, rgba(47, 48, 55, 0.05) 0px 0px 0px, rgba(255, 255, 255, 0.1) 0px 0px 0px inset",
          width: isScrolled ? "90%" : "100%",
          paddingRight: isScrolled ? "12px" : "0px",
          paddingLeft: isScrolled ? "12px" : "0px",
          transform: isScrolled ? "translateY(20px)" : "none",
          border: isScrolled ? "1px solid hsl(var(--border))" : "none",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          <MobileMenuButton />
        </div>
        <MobileMenu />
      </motion.div>
    </div>
  );
}
