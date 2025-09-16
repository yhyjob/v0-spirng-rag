export function AIIllustration() {
  return (
    <div className="relative w-full max-w-lg h-96 flex items-center justify-center">
      {/* Main 3D Container */}
      <div className="relative w-full h-full perspective-1000">
        {/* Central AI Cube */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 transform-gpu">
          <div className="relative w-full h-full transform rotate-12 hover:rotate-6 transition-transform duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl shadow-2xl flex items-center justify-center">
              <span className="text-white text-3xl font-bold">A</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 rounded-xl transform translate-x-2 translate-y-2 -z-10"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-16 left-16 w-12 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-lg animate-bounce-slow"></div>

        <div className="absolute top-20 right-20 w-8 h-8 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-lg shadow-lg transform rotate-45 animate-pulse"></div>

        <div className="absolute bottom-20 left-20 w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg transform -rotate-12"></div>

        <div className="absolute bottom-16 right-16 w-14 h-14 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full shadow-lg"></div>

        {/* Database Icons */}
        <div className="absolute top-32 left-32 w-16 h-12 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <div className="w-8 h-1 bg-white/80 rounded-full mb-1"></div>
          <div className="w-6 h-1 bg-white/60 rounded-full mb-1"></div>
          <div className="w-8 h-1 bg-white/80 rounded-full"></div>
        </div>

        <div className="absolute bottom-32 right-32 w-16 h-12 bg-gradient-to-br from-cyan-300 to-cyan-500 rounded-lg shadow-lg flex flex-col justify-center items-center">
          <div className="w-8 h-1 bg-white/80 rounded-full mb-1"></div>
          <div className="w-6 h-1 bg-white/60 rounded-full mb-1"></div>
          <div className="w-8 h-1 bg-white/80 rounded-full"></div>
        </div>

        {/* Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          <path
            d="M100 100 Q200 150 300 100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M100 300 Q200 250 300 300"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>

        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
    </div>
  )
}
