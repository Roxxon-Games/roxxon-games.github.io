import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Games', href: '#games' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/90 backdrop-blur-xl transition-colors duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-lg font-semibold tracking-tight transition-all duration-200 hover:text-primary"
        >
          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(168,85,247,0.28)]">
            <img src="/logo.jpg" alt="ROXXON logo" className="h-9 w-9 rounded-xl object-cover transition-transform duration-300 group-hover:scale-110" />
          </div>
          <span className="brand-text-glow flex items-baseline gap-1.5 text-white transition-all duration-300 hover:scale-103">
            <span className="font-semibold">ROXXON</span>
            <span className="font-normal">Games</span>
          </span>
        </a>

        <div className="hidden md:flex md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-foreground/80 transition-all duration-200 hover:text-primary hover:neon-text-purple"
            >
              {link.name}
            </a>
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block rounded-lg px-3 py-2 text-base font-medium text-foreground/80 transition-all duration-200 hover:bg-muted hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;