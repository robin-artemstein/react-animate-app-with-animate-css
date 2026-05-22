import { useEffect, useRef } from 'react'

interface HelloModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function HelloModal({ isOpen, onClose }: HelloModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // Start exit animation
        if (contentRef.current) {
          contentRef.current.classList.remove('animate__backInDown')
          contentRef.current.classList.add('animate__backOutDown')
        }

        // Close after animation finishes
        setTimeout(() => {
          onClose()
        }, 600) // Match animation duration
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div
        ref={modalRef}
        className="w-full max-w-2xl"
      >
        <div
          ref={contentRef}
          className="bg-blue-900 rounded-2xl p-8 shadow-2xl animate__animated animate__backInDown animate__faster"
        >
          <h2 className="text-3xl font-bold mb-6 text-blue-100">Hello there!</h2>
          <p className="text-blue-100 leading-relaxed text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam massa vel arcu faucibus dapibus. Cras vel rhoncus sem. Sed vel pretium lacus, vel maximus elit. Proin feugiat rutrum ante, ut maximus purus sagittis quis. Duis ac orci ac ipsum ultricies aliquet. Ut tortor sem, efficitur sed tortor accumsan, scelerisque sagittis mauris. Donec vel sem ullamcorper, dictum sem ac, tempus augue. Pellentesque sed turpis id urna blandit fermentum et at lectus. Morbi tincidunt porttitor mi, convallis vestibulum tellus. Duis posuere urna ultrices, ullamcorper justo vitae, molestie ex. Fusce fermentum, mauris eu sagittis bibendum, diam ante suscipit justo, sed accumsan dolor libero et enim.
          </p>
        </div>
      </div>
    </div>
  )
}