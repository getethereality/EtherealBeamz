import { useEffect, useState } from 'react';
import { Cloud } from 'lucide-react';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after page loads
    const handleLoad = () => {
      setTimeout(() => setIsVisible(false), 500);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated cloud icons */}
        <div className="flex gap-4 items-center justify-center">
          <Cloud
            className="w-12 h-12 text-white animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            style={{ animationDelay: '0s' }}
          />
          <div className="text-4xl font-bold text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">
            ETHEREAL
          </div>
          <Cloud
            className="w-12 h-12 text-white animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
            style={{ animationDelay: '0.2s' }}
          />
        </div>

        {/* Loading bar */}
        <div className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden border border-white/20">
          <div className="h-full bg-white rounded-full animate-[slideRight_2s_ease-in-out_infinite] shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
        </div>

        {/* Loading text */}
        <p className="text-white/60 text-sm tracking-widest font-light">
          Loading Experience
        </p>
      </div>

      <style>{`
        @keyframes slideRight {
          0% {
            width: 0%;
          }
          50% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }
      `}</style>
    </div>
  );
}
