"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false)

  const isActive = (path) => pathname === path;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Contact Us', href: '/contact-us' },
    { label: 'API Data', href: '/api-data' },
  ]

  return (
    <header className="bg-background/80 backdrop-blur-lg sticky top-0 z-50 shadow-lg">
      <div className="flex justify-between items-center p-4">
        <div>
          <Link href='/' className="font-bold text-2xl">InsightHub</Link>
        </div>
        <div className="hidden sm:block">
          <div className="flex items-center gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={`hover:text-green-600 text-sm font-semibold ${isActive(link.href) ? 'text-green-600' : ''}`} >{link.label}</Link>
            ))}
          </div>
        </div>
        <div className="sm:hidden flex items-center space-x-4">
          <button
            className="md:hidden hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} className="animate-rotate-in" /> : <Menu size={24} className="animate-rotate-in" />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-background shadow-lg animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 px-4 text-sm font-semibold hover:text-green-600 ${pathname === link.href ? 'text-green-600' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}

export default Header
