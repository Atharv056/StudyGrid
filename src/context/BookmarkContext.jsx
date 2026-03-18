import { createContext, useContext, useEffect, useState } from 'react'

const BookmarkContext = createContext()

export function BookmarkProvider({ children }) {
  const [bookmarks, setBookmarks] = useState(() => {
    try {
      const saved = localStorage.getItem('smart-classroom-bookmarks')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('smart-classroom-bookmarks', JSON.stringify(bookmarks))
  }, [bookmarks])

  const toggleBookmark = (item) => {
    const key = item.id || `${item.subjectId}-${item.type}-${item.name}`
    setBookmarks((prev) => {
      const exists = prev.some((b) => (b.id || `${b.subjectId}-${b.type}-${b.name}`) === key)
      if (exists) return prev.filter((b) => (b.id || `${b.subjectId}-${b.type}-${b.name}`) !== key)
      return [...prev, { ...item, id: key }]
    })
  }

  const isBookmarked = (item) => {
    const key = item?.id || (item && `${item.subjectId}-${item.type}-${item.name}`)
    return bookmarks.some((b) => (b.id || `${b.subjectId}-${b.type}-${b.name}`) === key)
  }

  return (
    <BookmarkContext.Provider value={{ bookmarks, toggleBookmark, isBookmarked }}>
      {children}
    </BookmarkContext.Provider>
  )
}

export function useBookmarks() {
  const context = useContext(BookmarkContext)
  if (!context) throw new Error('useBookmarks must be used within BookmarkProvider')
  return context
}
