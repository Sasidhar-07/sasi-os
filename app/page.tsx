'use client'
export default function Home() {
  const styles = `
@keyframes walk {
  0% {
    transform: translateX(-250px);
  }

  100% {
    transform: translateX(calc(100vw + 250px));
  }
}

@keyframes scanline {
  0% {
    transform: translateY(-100px);
  }

  100% {
    transform: translateY(100vh);
  }
}
`
  return (
    <div className="h-screen w-screen bg-black overflow-hidden relative text-white">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-black to-purple-500/20 animate-pulse"></div>

      {/* Animated Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-cyan-400 rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Moving Character */}
      {/* Real Animated Cyber Character */}
<div className="absolute bottom-6 left-[-220px] animate-[walk_14s_linear_infinite] z-50">
  <div className="relative flex flex-col items-center">

    {/* Aura */}
    <div className="absolute inset-0 w-40 h-40 bg-cyan-400/20 blur-[60px] rounded-full animate-pulse"></div>

    {/* Head */}
    <div className="relative w-20 h-20 rounded-full bg-gradient-to-b from-cyan-200 to-cyan-500 shadow-[0_0_40px_cyan] border-2 border-cyan-100">

      {/* Eyes */}
      <div className="absolute top-7 left-4 w-4 h-2 bg-black rounded-full animate-pulse"></div>
      <div className="absolute top-7 right-4 w-4 h-2 bg-black rounded-full animate-pulse"></div>

      {/* Visor */}
      <div className="absolute top-10 left-2 right-2 h-3 bg-black/70 rounded-full border border-cyan-300"></div>
    </div>

    {/* Body */}
    <div className="relative w-16 h-24 bg-gradient-to-b from-cyan-400 to-blue-600 rounded-2xl mt-1 shadow-[0_0_25px_cyan] border border-cyan-200 overflow-hidden">

      {/* Reactor */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-cyan-200 shadow-[0_0_20px_cyan] animate-ping"></div>

      {/* Chest Lines */}
      <div className="absolute bottom-3 left-2 right-2 h-[2px] bg-cyan-100"></div>
      <div className="absolute bottom-6 left-2 right-2 h-[2px] bg-cyan-100"></div>
    </div>

    {/* Arms */}
    <div className="absolute top-24 -left-4 w-3 h-16 bg-cyan-300 rounded-full origin-top animate-[armLeft_1s_ease-in-out_infinite]"></div>

    <div className="absolute top-24 -right-4 w-3 h-16 bg-cyan-300 rounded-full origin-top animate-[armRight_1s_ease-in-out_infinite]"></div>

    {/* Legs */}
    <div className="flex gap-6 mt-1">
      <div className="w-4 h-20 bg-cyan-300 rounded-full origin-top animate-[legLeft_0.8s_ease-in-out_infinite]"></div>

      <div className="w-4 h-20 bg-cyan-300 rounded-full origin-top animate-[legRight_0.8s_ease-in-out_infinite]"></div>
    </div>

    {/* Shadow */}
    <div className="w-24 h-4 bg-cyan-500/20 blur-xl rounded-full mt-2"></div>

  </div>
</div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        <h1 className="text-7xl md:text-9xl font-black tracking-[10px] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 animate-pulse">
          SASI.OS
        </h1>

        <p className="mt-6 text-cyan-200 text-xl md:text-2xl tracking-widest">
          FUTURISTIC DEVELOPER INTERFACE
        </p>

        {/* Terminal */}
        <div className="mt-12 bg-black/60 border border-cyan-400/20 rounded-3xl p-6 max-w-3xl text-left shadow-[0_0_40px_rgba(0,255,255,0.2)] backdrop-blur-xl">

          <p className="text-green-400">&gt; boot_sequence</p>
          <p>Initializing neural systems...</p>
          <p>Loading GitHub universe...</p>
          <p>Injecting caffeine...</p>

          <p className="text-red-400 mt-2">
            WARNING: sleep.exe missing
          </p>

          <p className="text-cyan-300 mt-4 animate-pulse">
            ACCESS GRANTED
          </p>

        </div>

      </div>

      {/* Floating Text */}
      <div className="absolute top-10 left-10 text-cyan-400/40 tracking-[8px] animate-pulse text-sm">
        SYSTEM ACTIVE
      </div>

      <div className="absolute bottom-10 right-10 text-red-400/40 tracking-[8px] animate-bounce text-sm">
        UNKNOWN SIGNAL
      </div>

      <style jsx>{`
     
      `}</style>

    </div>
  )
}