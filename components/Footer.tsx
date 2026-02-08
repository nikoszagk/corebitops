const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Tech Stack', href: '#tech' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-mono gradient-text">
              CoreBit Ops
            </span>
            <p className="text-text-secondary text-xs mt-1">
              Made with <span className="text-red-500">♥</span> and running on{' '}
              <span className="text-[#0078D4] font-medium">Azure</span>
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-text-secondary text-sm">
            © {currentYear} CoreBit Ops. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
