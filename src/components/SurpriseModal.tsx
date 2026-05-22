import { useEffect, useRef } from 'react'

interface SurpriseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SurpriseModal({ isOpen, onClose }: SurpriseModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        if (contentRef.current) {
          contentRef.current.classList.remove('animate__flipInX')
          contentRef.current.classList.add('animate__flipOutY')
        }
        setTimeout(onClose, 700)
      }
    }

    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="w-full max-w-2xl">
        <div
          ref={contentRef}
          className="bg-orange-900 rounded-2xl p-8 shadow-2xl animate__animated animate__flipInX animate__faster"
        >
          <h2 className="text-3xl font-bold mb-6 text-orange-100">Surprise!!!</h2>
          <p className="text-orange-100 leading-relaxed text-lg">
            Proin nisi est, condimentum ac turpis eget, rhoncus consequat nisl. Aliquam eget dolor velit. Nunc luctus aliquet lacus. Morbi quis facilisis ante. Donec ante ante, bibendum eget tellus ut, aliquet pellentesque nisi. Proin eu magna vel nisl auctor cursus quis at quam. Aliquam a magna finibus, hendrerit augue nec, aliquam lorem. Duis tincidunt est orci, vel posuere tortor gravida nec. Vestibulum et velit vestibulum, sodales massa vel, dictum libero. Ut sollicitudin vestibulum vulputate. Pellentesque tristique neque in nibh aliquet convallis. Suspendisse semper venenatis velit, non varius sem blandit non.
          </p>
        </div>
      </div>
    </div>
  )
}