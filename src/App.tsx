import { useState } from 'react'
import HelloModal from './components/HelloModal'
import SurpriseModal from './components/SurpriseModal'
import ByeModal from './components/ByeModal'

function App() {
  const [showHello, setShowHello] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)
  const [showBye, setShowBye] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold mb-12 text-center animate__animated animate__fadeIn">
        Welcome to the React testing app
      </h1>

      {/* 3-column grid for buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        {/* Button 1 */}
        <button
          onClick={() => setShowHello(true)}
          className="bg-blue-600 hover:bg-blue-700 transition-colors px-8 py-6 rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Say hello
        </button>

        {/* Button 2 */}
        <button
          onClick={() => setShowSurprise(true)}
          className="bg-orange-600 hover:bg-orange-700 transition-colors px-8 py-6 rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Get surprised
        </button>

        {/* Button 3 */}
        <button
          onClick={() => setShowBye(true)}
          className="bg-violet-600 hover:bg-violet-700 transition-colors px-8 py-6 rounded-xl text-xl font-semibold shadow-lg hover:shadow-xl active:scale-95 transition-all"
        >
          Kiss bye
        </button>
      </div>

      {/* Modals */}
      <HelloModal isOpen={showHello} onClose={() => setShowHello(false)} />
      <SurpriseModal isOpen={showSurprise} onClose={() => setShowSurprise(false)} />
      <ByeModal isOpen={showBye} onClose={() => setShowBye(false)} />
    </div>
  )
}

export default App