import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ChevronLeft, Download, FileText } from 'lucide-react'
import { renderAsync } from 'docx-preview'

function useQuery() {
  const { search } = useLocation()
  return useMemo(() => new URLSearchParams(search), [search])
}

function getExt(nameOrUrl = '') {
  const clean = nameOrUrl.split('?')[0].split('#')[0]
  const parts = clean.split('.')
  return parts.length > 1 ? parts.pop().toLowerCase() : ''
}

export default function Viewer() {
  const query = useQuery()
  const navigate = useNavigate()
  const url = query.get('url') || ''
  const name = query.get('name') || url.split('/').pop() || 'file'
  const ext = getExt(name || url)

  const previewUrl = useMemo(() => {
    if (!url) return ''
    if (ext !== 'pdf') return url
    // Hint the browser PDF viewer to fit to width on load.
    if (url.includes('#')) return url
    return `${url}#view=FitH&zoom=page-width`
  }, [url, ext])

  const docxContainerRef = useRef(null)
  const docxScaleTargetRef = useRef(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
    if (!url) return

    if (ext === 'docx') {
      let cancelled = false
      setLoading(true)
      ;(async () => {
        try {
          const res = await fetch(url)
          if (!res.ok) throw new Error(`Failed to load file (${res.status})`)
          const buffer = await res.arrayBuffer()
          if (cancelled) return
          if (!docxContainerRef.current) return
          docxContainerRef.current.innerHTML = ''
          await renderAsync(buffer, docxContainerRef.current, undefined, {
            ignoreWidth: false,
            ignoreHeight: false,
            inWrapper: false,
          })

          // Make docx preview responsive by scaling to container width.
          const scaleToFit = () => {
            const container = docxContainerRef.current
            if (!container) return

            // Wrap the rendered content so we can scale + center it reliably.
            let wrap = container.querySelector('[data-docx-scale-wrap="true"]')
            if (!wrap) {
              wrap = document.createElement('div')
              wrap.setAttribute('data-docx-scale-wrap', 'true')
              wrap.style.display = 'block'
              wrap.style.marginLeft = 'auto'
              wrap.style.marginRight = 'auto'
              wrap.style.transformOrigin = 'top center'
              wrap.style.maxWidth = 'none'

              while (container.firstChild) wrap.appendChild(container.firstChild)
              container.appendChild(wrap)
            }

            docxScaleTargetRef.current = wrap

            // If docx-preview created an inner "page" element, use its width as the natural width.
            const inner =
              wrap.querySelector('.docx-wrapper') ||
              wrap.querySelector('.docx') ||
              wrap.firstElementChild

            const available = Math.max(1, container.clientWidth)
            const natural = Math.max(1, (inner?.scrollWidth || wrap.scrollWidth || available))
            const scale = Math.min(1, available / natural)

            wrap.style.width = `${Math.round(natural)}px`
            wrap.style.transform = `scale(${scale})`

            container.style.setProperty('--docx-scale', String(scale))
            // Keep container height consistent with scaled content (so outer scroll works nicely).
            container.style.height = `${Math.ceil(wrap.scrollHeight * scale)}px`
          }

          scaleToFit()
          // Defer once more (fonts/images) for better first render on mobile.
          requestAnimationFrame(scaleToFit)
        } catch (e) {
          if (!cancelled) setError(e?.message || 'Failed to render document')
        } finally {
          if (!cancelled) setLoading(false)
        }
      })()
      return () => {
        cancelled = true
      }
    }
  }, [url, ext])

  useEffect(() => {
    if (ext !== 'docx') return
    const container = docxContainerRef.current
    if (!container) return

    const onResize = () => {
      const wrap = docxScaleTargetRef.current
      if (!wrap) return
      const inner =
        wrap.querySelector('.docx-wrapper') ||
        wrap.querySelector('.docx') ||
        wrap.firstElementChild
      const available = Math.max(1, container.clientWidth)
      const natural = Math.max(1, (inner?.scrollWidth || wrap.scrollWidth || available))
      const scale = Math.min(1, available / natural)
      wrap.style.width = `${Math.round(natural)}px`
      wrap.style.transformOrigin = 'top center'
      wrap.style.transform = `scale(${scale})`
      container.style.setProperty('--docx-scale', String(scale))
      container.style.height = `${Math.ceil(wrap.scrollHeight * scale)}px`
    }

    const ro = new ResizeObserver(onResize)
    ro.observe(container)
    window.addEventListener('orientationchange', onResize)
    return () => {
      ro.disconnect()
      window.removeEventListener('orientationchange', onResize)
    }
  }, [ext])

  if (!url) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <p className="text-gray-600 dark:text-gray-400">No file selected.</p>
        <button onClick={() => navigate(-1)} className="mt-3 text-indigo-600 dark:text-indigo-400 hover:underline min-h-[44px] inline-flex items-center">
          Go back
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-[calc(100vh-3.5rem)] sm:min-h-[calc(100vh-4rem)] bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex items-center justify-between gap-3 mb-4">
          <Link
            to={-1}
            className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 min-h-[44px]"
          >
            <ChevronLeft className="w-4 h-4 shrink-0" />
            Back
          </Link>
          <a
            href={url}
            download={name}
            className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-gray-100"
            aria-label="Download file"
          >
            <Download className="w-5 h-5" />
            <span className="hidden xs:inline">Download</span>
          </a>
        </div>

        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-100 dark:border-gray-800">
            <FileText className="w-4 h-4 text-indigo-500 shrink-0" />
            <h1 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white truncate">
              {name}
            </h1>
          </div>

          {ext === 'pdf' ? (
            <iframe
              title={name}
              src={previewUrl}
              className="w-full bg-white min-h-[60vh] h-[calc(100dvh-12rem)] sm:h-[75vh]"
            />
          ) : ext === 'docx' ? (
            <div className="p-4 sm:p-6 docx-viewer overflow-auto max-h-[calc(100dvh-12rem)] sm:max-h-[75vh]">
              {loading && (
                <p className="text-gray-500 dark:text-gray-400 text-sm">Loading document…</p>
              )}
              {error && (
                <p className="text-red-600 dark:text-red-400 text-sm">{error}</p>
              )}
              <div
                ref={docxContainerRef}
                className="prose prose-indigo dark:prose-invert max-w-none min-w-0"
              />
            </div>
          ) : (
            <div className="p-6 text-center">
              <p className="text-gray-600 dark:text-gray-400">
                Preview not available for this file type.
              </p>
              <a
                href={url}
                download={name}
                className="mt-3 inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline min-h-[44px]"
              >
                <Download className="w-5 h-5" /> Download
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

