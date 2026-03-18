import { useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Upload, BookOpen, User, Layers, Building2, FileText, LogOut } from 'lucide-react'

export default function AdminDashboard() {
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem('smart-classroom-admin') !== 'true') {
      navigate('/admin')
    }
  }, [navigate])

  const handleLogout = () => {
    sessionStorage.removeItem('smart-classroom-admin')
    navigate('/admin')
  }

  const cards = [
    { title: 'Upload notes (PDF)', icon: Upload, desc: 'Add theory, practical notes, question bank' },
    { title: 'Add subjects', icon: BookOpen, desc: 'Create subjects for a semester' },
    { title: 'Add teachers', icon: User, desc: 'Manage faculty names' },
    { title: 'Semesters & branches', icon: Layers, desc: 'Configure semesters and branches' },
    { title: 'Manage files', icon: FileText, desc: 'Edit or remove uploaded resources' },
  ]

  return (
    <div className="min-h-screen min-h-[100dvh] bg-gray-50 dark:bg-gray-950">
      <header className="sticky top-0 z-10 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 py-3 sm:py-4 flex items-center justify-between gap-2">
          <Link
            to="/"
            className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 min-w-0 truncate text-sm sm:text-base"
          >
            <Building2 className="w-5 h-5 shrink-0" />
            <span className="truncate">Smart Classroom Admin</span>
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium min-h-[44px] shrink-0"
          >
            <LogOut className="w-4 h-4" /> <span className="hidden xs:inline">Logout</span>
          </button>
        </div>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-2">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Manage study materials, subjects, teachers, and files. Connect Firebase to enable uploads.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
              >
                <span className="inline-flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-3 sm:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </span>
                <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                  {card.title}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
