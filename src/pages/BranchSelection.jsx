import { Link } from 'react-router-dom'
import { BRANCHES } from '../data/constants.js'

export default function BranchSelection() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="section-title mb-1 sm:mb-2">Choose your branch</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
        Select your engineering branch to view semesters and subjects.
      </p>
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {BRANCHES.map((branch) => {
          const Icon = branch.icon
          return (
            <Link
              key={branch.id}
              to={`/branch/${branch.id}`}
              className="card-hover block p-5 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg hover:border-indigo-200 dark:hover:border-indigo-800/50"
            >
              <span
                className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${branch.color} text-white mb-3 sm:mb-4 shadow-md`}
              >
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </span>
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white leading-snug">
                {branch.name}
              </h2>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
