'use client'

const navLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tech', href: '#tech' },
  { name: 'Contact', href: '#contact' },
]

export default function MobileNavLinks() {
  const closeMenu = () => {
    const checkbox = document.getElementById('mobile-menu-toggle') as HTMLInputElement
    if (checkbox) checkbox.checked = false
  }

  return (
    <>
      {navLinks.map((link, index) => (
        <a
          key={link.name}
          href={link.href}
          className="mobile-nav-link text-3xl font-bold text-text-primary hover:text-primary transition-all duration-300"
          style={{ animationDelay: `${index * 0.1}s` }}
          onClick={closeMenu}
        >
          {link.name}
        </a>
      ))}
      <a
        href="#contact"
        className="mobile-nav-link mt-4 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-xl font-bold transition-all duration-300 hover:scale-105"
        onClick={closeMenu}
      >
        Get in Touch
      </a>
    </>
  )
}
