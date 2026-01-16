'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './Container'
import { Button } from '@/components/ui/Button'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/locations', label: 'Locations' },
  { href: '/resources', label: 'Resources' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={closeMobileMenu}
          >
            <Image
              src="/logo.png"
              alt="Zenvora Tiling"
              width={240}
              height={80}
              className="h-12 sm:h-14 lg:h-16 w-auto"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-800 hover:text-[var(--accent)] font-medium text-base transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button href="/request-pricing" variant="primary" size="md">
              Request Pricing / Send BOQ
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-neutral-800 hover:text-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-white rounded-md"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle mobile menu"
            onClick={toggleMobileMenu}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-neutral-200 py-4"
            role="menu"
            aria-label="Mobile navigation"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-neutral-800 hover:text-[var(--accent)] font-medium py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-white rounded-md px-2"
                  onClick={closeMobileMenu}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  href="/request-pricing"
                  variant="primary"
                  size="md"
                  fullWidth
                  onClick={closeMobileMenu}
                >
                  Request Pricing / Send BOQ
                </Button>
              </div>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}

