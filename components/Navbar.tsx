import ThemeToggle from './ThemeToggle'
import NavbarScroll from './NavbarScroll'
import MobileNavLinks from './MobileNavLinks'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <>
      {/* Checkbox for CSS-only mobile menu - works without JavaScript */}
      <input
        type="checkbox"
        id="mobile-menu-toggle"
        className="mobile-menu-checkbox"
        aria-hidden="true"
      />

      {/* Client component for scroll-based background */}
      <NavbarScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2 z-50">
              <span className="text-xl font-bold font-mono gradient-text">
                CoreBit Ops
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="nav-link relative text-text-secondary hover:text-primary transition-colors duration-200 text-sm font-medium"
                >
                  {link.name}
                </a>
              ))}

              <ThemeToggle />

              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-primary/25"
              >
                Get in Touch
              </a>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center space-x-2 md:hidden relative pointer-events-auto">
              <ThemeToggle />

              {/* Hamburger - Pure CSS, works instantly without JavaScript */}
              <label
                htmlFor="mobile-menu-toggle"
                className="mobile-menu-btn p-2 cursor-pointer text-text-primary relative pointer-events-auto"
              >
                <svg className="hamburger w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="close w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </NavbarScroll>

      {/* Mobile Menu Overlay - Pure CSS */}
      <div className="mobile-menu-overlay md:hidden">
        <div className="mobile-menu-content">
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-6">
            <MobileNavLinks />
          </div>
        </div>
      </div>
    </>
  )
}
