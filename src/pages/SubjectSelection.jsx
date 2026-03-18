import { Link, useParams } from 'react-router-dom'
import { BRANCHES, SEMESTERS, SAMPLE_SUBJECTS } from '../data/constants.js'
import { ChevronLeft, User } from 'lucide-react'

export default function SubjectSelection() {
  const { branchId, semId } = useParams()
  const branch = BRANCHES.find((b) => b.id === branchId)
  const sem = SEMESTERS.find((s) => s.id === semId)
  const subjects = SAMPLE_SUBJECTS[branchId]?.[semId] || []

  if (!branch || !sem) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Branch or semester not found.</p>
        <Link to="/branch" className="text-indigo-600 dark:text-indigo-400 mt-2 inline-block min-h-[44px] inline-flex items-center">
          Back to branches
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to={`/branch/${branchId}`}
        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 min-h-[44px] items-center text-sm sm:text-base"
      >
        <ChevronLeft className="w-4 h-4 shrink-0" /> {branch.name} · {sem.name}
      </Link>
      <h1 className="section-title mb-1 sm:mb-2">Subjects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
        Select a subject to open notes, assignments, and question bank.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {subjects.map((sub) => (
          <Link
            key={sub.id}
            to={`/branch/${branchId}/semester/${semId}/subject/${sub.id}`}
            className="card-hover block p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800/50"
          >
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
              {sub.name}
            </h2>
            {sub.teacher && (
              <p className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <User className="w-4 h-4 shrink-0" />
                {sub.teacher}
              </p>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
