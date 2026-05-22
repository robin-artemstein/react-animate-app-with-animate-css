import { useEffect, useRef } from 'react'

interface ByeModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ByeModal({ isOpen, onClose }: ByeModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Handle click outside to close with exit animation
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        // Start exit animation
        if (contentRef.current) {
          contentRef.current.classList.remove('animate__rotateIn')
          contentRef.current.classList.add('animate__rotateOut')
        }

        // Close modal after animation completes
        setTimeout(() => {
          onClose()
        }, 700) // Slightly longer delay to match rotateOut animation
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Don't render anything if modal is closed
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="w-full max-w-2xl">
        <div
          ref={contentRef}
          className="bg-violet-900 rounded-2xl p-8 shadow-2xl 
                     animate__animated animate__rotateIn animate__faster"
        >
          <h2 className="text-3xl font-bold mb-6 text-violet-100">
            Kiss Bye 👋
          </h2>
          
          <p className="text-violet-100 leading-relaxed text-lg">
            Nunc viverra mollis dui, finibus commodo nisi sagittis a. 
            Pellentesque volutpat vel turpis vitae vulputate. In hac habitasse 
            platea dictumst. In convallis, ex eu fermentum iaculis, orci erat 
            tincidunt est, sed pulvinar lectus metus vel diam. Curabitur at ante 
            ac diam tempor varius ut pharetra leo. Mauris et leo at sem consectetur 
            ullamcorper. Nullam maximus viverra tincidunt. Fusce sit amet pretium 
            sapien. Mauris at arcu et massa iaculis hendrerit quis nec nisi. 
            Vivamus quis est non nibh dignissim fringilla eu vel tellus. 
            Vestibulum sollicitudin lorem sapien, nec semper sem sagittis id. 
            Quisque fermentum lectus ac nibh eleifend gravida. Nam dictum eros 
            urna, iaculis pellentesque nisl fringilla eget. Sed ultrices, mauris 
            sit amet porttitor ornare, diam augue ornare quam, vitae aliquam dui 
            nulla in velit. Curabitur mollis enim augue, non fermentum risus 
            malesuada id.
          </p>
        </div>
      </div>
    </div>
  )
}