import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GraduationCap, Lock, Mail } from 'lucide-react'

const ADMIN_EMAIL = 'admin@smartclassroom.com'
const ADMIN_PASS = 'admin123'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    if (email === ADMIN_EMAIL && password === ADMIN_PASS) {
      sessionStorage.setItem('smart-classroom-admin', 'true')
      navigate('/admin/dashboard')
    } else {
      setError('Invalid email or password.')
    }
  }

  return (
    <div className="min-h-screen min-h-[100dvh] flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-950 px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-6 sm:mb-8">
          <span className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-4 shadow-lg">
            <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8" />
          </span>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Admin Login</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">Smart Classroom Portal</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl"
        >
          {error && (
            <p className="mb-4 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 text-sm">
              {error}
            </p>
          )}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base min-h-[48px]"
                  placeholder="admin@smartclassroom.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-base min-h-[48px]"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>
          <button type="submit" className="btn-primary w-full mt-6">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            Demo: admin@smartclassroom.com / admin123
          </p>
        </form>
        <p className="text-center mt-6">
          <a href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline font-medium min-h-[44px] inline-flex items-center">
            ← Back to Smart Classroom
          </a>
        </p>
      </div>
    </div>
  )
}
