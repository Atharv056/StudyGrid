import { Link } from 'react-router-dom'
import { GraduationCap, ArrowRight } from 'lucide-react'

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
          <Link
            to="/branch"
            className="btn-primary w-full sm:w-auto gap-2"
          >
            Start Learning
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
        </div>
      </div>
    </div>
  )
}
