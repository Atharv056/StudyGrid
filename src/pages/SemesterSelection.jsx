import { Link, useParams } from 'react-router-dom'
import { SEMESTERS, BRANCHES } from '../data/constants.js'
import { ChevronLeft } from 'lucide-react'

export default function SemesterSelection() {
  const { branchId } = useParams()
  const branch = BRANCHES.find((b) => b.id === branchId)

  if (!branch) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Branch not found.</p>
        <Link to="/branch" className="text-indigo-600 dark:text-indigo-400 mt-2 inline-block min-h-[44px] inline-flex items-center">
          Back to branches
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to="/branch"
        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 min-h-[44px] items-center"
      >
        <ChevronLeft className="w-4 h-4 shrink-0" /> Back to branches
      </Link>
      <h1 className="section-title mb-1 sm:mb-2">{branch.name}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">Select semester</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4">
        {SEMESTERS.map((sem) => (
          <Link
            key={sem.id}
            to={`/branch/${branchId}/semester/${sem.id}`}
            className="card-hover block p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg text-center font-semibold text-gray-900 dark:text-white min-h-[72px] sm:min-h-0 flex items-center justify-center"
          >
            {sem.name}
          </Link>
        ))}
      </div>
    </div>
  )
}
