import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight, BookOpen, Search, Bookmark } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 md:py-28">
        <div className="text-center animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl mb-6 sm:mb-8 animate-float">
            <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10" />
          </div>
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold font-display text-gray-900 dark:text-white mb-3 sm:mb-4 tracking-tight">
            Smart Classroom
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 sm:mb-10 px-1">
            Access all your engineering study materials in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link to="/branch" className="btn-primary w-full sm:w-auto gap-2">
              Start Learning
              <ArrowRight className="w-5 h-5 shrink-0" />
            </Link>
            <Link
              to="/bookmarks"
              className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl font-semibold inline-flex items-center justify-center gap-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            >
              Bookmarks
              <Bookmark className="w-5 h-5 shrink-0" />
            </Link>
          </div>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { title: 'Organized notes', desc: 'Branch → semester → subject', icon: BookOpen },
            { title: 'Quick search', desc: 'Find materials faster', icon: Search },
            { title: 'Bookmarks', desc: 'Save important resources', icon: Bookmark },
          ].map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/70 backdrop-blur p-5"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600/10 dark:bg-indigo-500/15 text-indigo-700 dark:text-indigo-300">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-white">{f.title}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-8 sm:mt-12 text-gray-700 dark:text-gray-300 text-lg sm:text-xl">
          <p className="font-semibold">Atharv Pokale</p>
          <p className="text-sm opacity-75 mb-4">Pune, India</p>
          <div className="text-sm bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-xl inline-block">
            <p className="font-bold text-indigo-600 dark:text-indigo-400">Demo Steps:</p>
            <p>Start Learning → Computer Engineering → Semester 6 → Data Analytics → Theory Notes → Unit 1</p>
          </div>
        </div>
      </div>
    </div>
  )
}
