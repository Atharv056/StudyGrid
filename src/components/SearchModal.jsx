import { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { BRANCHES, SEMESTERS, SAMPLE_SUBJECTS } from '../data/constants.js'

export default function SearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const results = []
  if (query.trim().length >= 2) {
    const q = query.toLowerCase()
    BRANCHES.forEach((branch) => {
      if (branch.name.toLowerCase().includes(q)) {
        results.push({ type: 'branch', ...branch })
      }
    })
    Object.keys(SAMPLE_SUBJECTS).forEach((branchId) => {
      Object.keys(SAMPLE_SUBJECTS[branchId]).forEach((semId) => {
        SAMPLE_SUBJECTS[branchId][semId].forEach((sub) => {
          if (sub.name.toLowerCase().includes(q) || (sub.teacher && sub.teacher.toLowerCase().includes(q))) {
            results.push({
              type: 'subject',
              ...sub,
              branchId,
              semId,
              branchName: BRANCHES.find((b) => b.id === branchId)?.name,
              semName: SEMESTERS.find((s) => s.id === semId)?.name,
            })
          }
        })
      })
    })
  }

  const handleSelect = (item) => {
    if (item.type === 'branch') {
      navigate(`/branch/${item.id}`)
    } else if (item.type === 'subject') {
      navigate(`/branch/${item.branchId}/semester/${item.semId}/subject/${item.id}`)
    }
    setQuery('')
    onClose()
  }

  useEffect(() => {
    if (!open) setQuery('')
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col sm:block sm:flex-none sm:items-start sm:justify-center sm:pt-[15vh] px-0 sm:px-4 bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Mobile: full-height sheet */}
      <div
        className="w-full h-full sm:h-auto sm:max-h-[70vh] sm:max-w-xl bg-white dark:bg-gray-900 sm:rounded-2xl shadow-2xl border-0 sm:border border-gray-200 dark:border-gray-700 overflow-hidden animate-slide-up flex flex-col pt-[env(safe-area-inset-top)] sm:pt-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 dark:border-gray-700 shrink-0">
          <Search className="w-5 h-5 text-gray-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search branches or subjects..."
            className="flex-1 min-w-0 min-h-[44px] bg-transparent border-0 outline-none text-gray-900 dark:text-white placeholder-gray-400 text-base"
            autoFocus
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="tap-target p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto min-h-0 max-h-[60vh] sm:max-h-none">
          {query.trim().length < 2 ? (
            <p className="p-6 text-center text-gray-500 dark:text-gray-400 text-sm">
              Type at least 2 characters to search
            </p>
          ) : results.length === 0 ? (
            <p className="p-6 text-center text-gray-500 dark:text-gray-400">No results found</p>
          ) : (
            <ul className="py-2">
              {results.slice(0, 15).map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => handleSelect(item)}
                    className="w-full flex flex-col xs:flex-row xs:items-center gap-1 xs:gap-3 px-4 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-800 active:bg-gray-100 dark:active:bg-gray-700 transition-colors min-h-[56px]"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.type === 'branch' ? item.name : item.name}
                    </span>
                    {item.type === 'subject' && (
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {item.branchName} · {item.semName}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
