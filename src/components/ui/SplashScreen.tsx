"use client";

import { useEffect, useState } from "react";

export function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = "hidden";

    // Simulate progress
    const duration = 1500;
    const interval = 30;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Add some easing-like non-linear progress
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(currentProgress);

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsFadingOut(true);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = "unset";
        }, 800); // Wait for the fade out animation
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0e0e13] text-[#f9f5fd] font-body overflow-hidden transition-opacity duration-700 ${isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[#0e0e13]"></div>
        <div className="absolute inset-0 grid-overlay"></div>
        <div className="absolute inset-0 vignette"></div>
        {/* Abstract Atmospheric Glows */}
        <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#81ecff]/5 blur-[120px]"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#e966ff]/5 blur-[120px]"></div>
      </div>

      {/* Main Content Canvas */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        {/* The Monolith Monogram */}
        <div className="relative mb-16 flex items-center justify-center group">
          {/* Signature Neon Glow */}
          <div className="absolute inset-0 bg-[#81ecff]/20 rounded-full blur-[40px] animate-pulse-glow"></div>

          {/* Logo Construction */}
          <div className="relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Overlapping Path Logic */}
              <div className="relative flex items-baseline">
                <span className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-[#81ecff] z-20 drop-shadow-[0_0_15px_rgba(129,236,255,0.6)]">N</span>
                <span className="font-headline text-7xl md:text-8xl font-bold tracking-tighter text-[#e966ff] -ml-6 md:-ml-8 z-10 opacity-80 mix-blend-screen">T</span>
              </div>
            </div>
            {/* Technical Ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90 opacity-40" viewBox="0 0 100 100">
              <circle className="text-[#48474d]" cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray="4 8" strokeWidth="0.5"></circle>
              <circle className="text-[#81ecff]" cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray={`${progress * 3} 300`} strokeWidth="1.5" style={{ transition: 'stroke-dasharray 0.05s linear' }}></circle>
            </svg>
          </div>
        </div>

        {/* System Status Module */}
        <div className="w-full max-w-sm space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-y-1 flex-col">
              <span className="font-label text-xs uppercase tracking-[0.3em] text-[#81ecff]/80 font-medium">Boot Sequence Active</span>
              <h1 className="font-headline text-lg font-bold tracking-tight text-[#f9f5fd] text-center">T.N. Tan Portfolio v1.0</h1>
            </div>

            {/* Linear Progress Engine */}
            <div className="w-full h-[3px] bg-[#25252d] rounded-full overflow-hidden relative border border-white/5">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#81ecff] via-[#00e3fd] to-[#e966ff] shadow-[0_0_10px_rgba(129,236,255,0.8)]"
                style={{ width: `${progress}%`, transition: 'width 0.05s linear' }}
              ></div>
            </div>

            <div className="flex justify-between w-full items-center">
              <div className="flex items-center space-x-2 text-slate-500">
                <span className="material-symbols-outlined text-[14px]">terminal</span>
                <span className="font-label text-[10px] uppercase tracking-widest">
                  {progress < 30 ? "Initializing Application..." : progress < 70 ? "Loading Components..." : "Verifying Connections..."}
                </span>
              </div>
              <span className="font-label text-[10px] text-[#81ecff] font-bold tracking-widest">{Math.floor(progress)}%</span>
            </div>
          </div>

          {/* Terminal Metadata Overlay */}
          <div className="p-4 bg-[#131319]/40 backdrop-blur-xl rounded-xl border border-white/5 space-y-2">
            <div className="flex justify-between items-center opacity-60">
              <span className="font-label text-[9px] uppercase tracking-tighter text-[#acaab1]">UI_Components</span>
              <span className={`font-label text-[9px] uppercase tracking-tighter ${progress > 20 ? 'text-[#81ecff]' : 'text-[#acaab1]'}`}>
                {progress > 20 ? 'Loaded' : 'Mounting...'}
              </span>
            </div>
            <div className="flex justify-between items-center opacity-60">
              <span className="font-label text-[9px] uppercase tracking-tighter text-[#acaab1]">Backend_API</span>
              <span className={`font-label text-[9px] uppercase tracking-tighter ${progress > 60 ? 'text-[#81ecff]' : 'text-[#acaab1]'}`}>
                {progress > 60 ? 'Connected' : 'Connecting...'}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-label text-[9px] uppercase tracking-tighter text-[#acaab1]">Security_Protocols</span>
              <span className={`font-label text-[9px] uppercase tracking-tighter ${progress > 90 ? 'text-[#81ecff]' : 'text-[#e966ff] animate-pulse'}`}>
                {progress > 90 ? 'Secured' : 'Verifying...'}
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* UI Perimeter Details */}
      <footer className="fixed bottom-10 left-0 w-full px-10 flex justify-between items-end pointer-events-none">
        <div className="flex flex-col">
          <span className="font-label text-[9px] uppercase tracking-[0.2em] text-[#48474d] mb-1">Coordinates</span>
          <span className="font-label text-[10px] text-slate-400">10.7626° N, 106.6823° E</span>
        </div>
        <div className="flex space-x-6">
          <div className="flex flex-col items-end">
            <span className="font-label text-[9px] uppercase tracking-[0.2em] text-[#48474d] mb-1">Status</span>
            <div className="flex items-center space-x-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#81ecff] shadow-[0_0_8px_rgba(129,236,255,0.8)]"></div>
              <span className="font-label text-[10px] text-slate-400 uppercase tracking-widest">Encrypted</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Edge Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full border-[1px] border-white/5 pointer-events-none m-4 md:m-8 rounded-xl"></div>
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#81ecff]/30 to-transparent"></div>
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#e966ff]/30 to-transparent"></div>
    </div>
  );
}
