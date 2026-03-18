import { Link } from 'react-router-dom'
import { useBookmarks } from '../context/BookmarkContext.jsx'
import { Bookmark, FileText } from 'lucide-react'

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks()

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="section-title mb-1 sm:mb-2">Bookmarks</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
        Your saved notes and resources. Tap the bookmark icon on any resource to add it here.
      </p>
      {bookmarks.length === 0 ? (
        <div className="text-center py-12 sm:py-16 rounded-2xl border-2 border-dashed border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900/50">
          <Bookmark className="w-14 h-14 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500 dark:text-gray-400 px-4">No bookmarks yet.</p>
          <Link
            to="/branch"
            className="mt-3 inline-block text-indigo-600 dark:text-indigo-400 font-medium min-h-[44px] inline-flex items-center"
          >
            Browse subjects and bookmark resources
          </Link>
        </div>
      ) : (
        <ul className="space-y-3">
          {bookmarks.map((item) => (
            <li
              key={item.id}
              className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3 p-4 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-sm"
            >
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <FileText className="w-5 h-5 text-indigo-500 shrink-0" />
                <div className="min-w-0">
                  <span className="text-gray-900 dark:text-white block truncate">{item.name}</span>
                  {item.type && (
                    <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{item.type}</span>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {item.branchId && item.semId && item.subjectId && (
                  <Link
                    to={`/branch/${item.branchId}/semester/${item.semId}/subject/${item.subjectId}`}
                    className="min-h-[44px] px-4 inline-flex items-center justify-center rounded-xl text-sm font-medium bg-indigo-600 text-white hover:bg-indigo-500 transition-colors"
                  >
                    Open
                  </Link>
                )}
                <button
                  onClick={() => toggleBookmark(item)}
                  className="tap-target p-2 rounded-xl text-amber-500 hover:bg-amber-500/10"
                  aria-label="Remove bookmark"
                >
                  <Bookmark className="w-5 h-5 fill-current" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
