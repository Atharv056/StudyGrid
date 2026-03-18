import { Link, useLocation } from 'react-router-dom'
import { Moon, Sun, Search, Bookmark, GraduationCap, Menu, X } from 'lucide-react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useState, useEffect } from 'react'
import SearchModal from './SearchModal.jsx'

export default function Layout({ children }) {
  const { darkMode, toggleTheme } = useTheme()
  const location = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isAdmin = location.pathname.startsWith('/admin')

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])

  if (isAdmin) return children

  const navActions = (
    <>
      <button
        onClick={() => { setSearchOpen(true); setMobileMenuOpen(false); }}
        className="flex items-center gap-3 w-full sm:w-auto min-h-[44px] sm:min-h-0 px-4 sm:p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
        aria-label="Search"
      >
        <Search className="w-5 h-5 shrink-0" />
        <span className="sm:sr-only">Search</span>
      </button>
      <Link
        to="/bookmarks"
        onClick={() => setMobileMenuOpen(false)}
        className="flex items-center gap-3 w-full sm:w-auto min-h-[44px] sm:min-h-0 px-4 sm:p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Bookmarks"
      >
        <Bookmark className="w-5 h-5 shrink-0" />
        <span className="sm:sr-only">Bookmarks</span>
      </Link>
      <button
        onClick={toggleTheme}
        className="flex items-center gap-3 w-full sm:w-auto min-h-[44px] sm:min-h-0 px-4 sm:p-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-left"
        aria-label="Toggle theme"
      >
        {darkMode ? <Sun className="w-5 h-5 shrink-0" /> : <Moon className="w-5 h-5 shrink-0" />}
        <span className="sm:sr-only">{darkMode ? 'Light mode' : 'Dark mode'}</span>
      </button>
      <Link
        to="/admin"
        onClick={() => setMobileMenuOpen(false)}
        className="flex items-center justify-center sm:ml-2 min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      >
        Admin
      </Link>
    </>
  )

  return (
    <div className="min-h-screen flex flex-col min-h-[100dvh]">
      <header className="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl supports-[padding:env(safe-area-inset-top)]:pt-[env(safe-area-inset-top)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <Link
              to="/"
              className="flex items-center gap-2 font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white min-w-0"
            >
              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
              </span>
              <span className="hidden xs:inline truncate">Smart Classroom</span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-1">
              {navActions}
            </nav>

            {/* Mobile menu button */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] sm:hidden animate-fade-in"
          aria-hidden
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-[280px] bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-800 shadow-2xl animate-slide-left flex flex-col pt-[env(safe-area-inset-top)]">
            <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800">
              <span className="font-semibold text-gray-900 dark:text-white">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-1 p-4">
              {navActions}
            </nav>
          </div>
        </div>
      )}

      <main className="flex-1 pb-[env(safe-area-inset-bottom)]">{children}</main>
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}
