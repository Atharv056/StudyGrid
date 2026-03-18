import { useParams, Link } from 'react-router-dom'
import { BRANCHES, SEMESTERS, SAMPLE_SUBJECTS, RESOURCE_TYPES } from '../data/constants.js'
import { ChevronLeft, FileText, Bookmark } from 'lucide-react'
import { useBookmarks } from '../context/BookmarkContext.jsx'

const LOCAL_FILES = {
  computer: {
    '6': {
      da: {
        theory_notes: [
          { name: 'Theory Notes - Unit 1.docx', url: '/pdfs/data-analytics/theory-unit-1.docx' },
        ],
      },
    },
  },
}

function ResourceSection({ typeId, subjectId, branchId, semId }) {
  const type = RESOURCE_TYPES.find((t) => t.id === typeId)
  const { toggleBookmark, isBookmarked } = useBookmarks()
  if (!type) return null

  const Icon = type.icon
  const sampleFiles =
    LOCAL_FILES?.[branchId]?.[semId]?.[subjectId]?.[typeId] ??
    [
      { name: `${type.label} - Unit 1.pdf`, url: '#' },
      { name: `${type.label} - Unit 2.pdf`, url: '#' },
    ]
  const item = { subjectId, type: typeId, name: type.label }

  return (
    <section className="p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        <span className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${type.color} text-white shrink-0`}>
          <Icon className="w-5 h-5" />
        </span>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white truncate">
          {type.label}
        </h2>
      </div>
      <ul className="space-y-0">
        {sampleFiles.map((file, i) => {
          const fileItem = { ...item, name: file.name }
          return (
            <li
              key={i}
              className="flex items-center gap-2 py-3 sm:py-2 border-b border-gray-100 dark:border-gray-800 last:border-0 min-h-[52px]"
            >
              <a
                href={file.url === '#' ? '#' : `/viewer?url=${encodeURIComponent(file.url)}&name=${encodeURIComponent(file.name)}`}
                className="flex-1 flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline min-w-0 text-sm sm:text-base"
              >
                <FileText className="w-4 h-4 shrink-0" />
                <span className="truncate">{file.name}</span>
              </a>
              <button
                onClick={(e) => { e.preventDefault(); toggleBookmark(fileItem); }}
                className={`tap-target p-2 rounded-xl transition-colors shrink-0 ${isBookmarked(fileItem) ? 'text-amber-500 bg-amber-500/10' : 'text-gray-400 hover:text-amber-500 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                aria-label={isBookmarked(fileItem) ? 'Remove bookmark' : 'Bookmark'}
              >
                <Bookmark className={`w-5 h-5 ${isBookmarked(fileItem) ? 'fill-current' : ''}`} />
              </button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default function SubjectDashboard() {
  const { branchId, semId, subjectId } = useParams()
  const branch = BRANCHES.find((b) => b.id === branchId)
  const sem = SEMESTERS.find((s) => s.id === semId)
  const subject = SAMPLE_SUBJECTS[branchId]?.[semId]?.find((s) => s.id === subjectId)

  if (!branch || !sem || !subject) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-500">Subject not found.</p>
        <Link to="/branch" className="text-indigo-600 dark:text-indigo-400 mt-2 inline-block min-h-[44px] inline-flex items-center">
          Back to branches
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <Link
        to={`/branch/${branchId}/semester/${semId}`}
        className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-6 min-h-[44px] items-center text-sm sm:text-base"
      >
        <ChevronLeft className="w-4 h-4 shrink-0" /> {subject.name}
      </Link>
      <h1 className="section-title mb-1 sm:mb-2">{subject.name}</h1>
      {subject.teacher && (
        <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Teacher: {subject.teacher}
        </p>
      )}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {RESOURCE_TYPES.map((t) => (
          <ResourceSection
            key={t.id}
            typeId={t.id}
            subjectId={subjectId}
            branchId={branchId}
            semId={semId}
          />
        ))}
      </div>
    </div>
  )
}
