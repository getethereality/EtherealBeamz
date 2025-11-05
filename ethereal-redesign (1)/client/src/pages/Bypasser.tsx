import { Cloud } from "lucide-react";
import { Link } from "wouter";
import Starfield from "@/components/Starfield";
import { playClickSound } from "@/components/AudioManager";

export default function Bypasser() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-4 flex items-center justify-center gap-6 text-glow tracking-widest">
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            BYPASSER
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          </h1>
        </div>

        {/* Bypass Tools Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20">
            <h2 className="text-2xl font-bold text-center mb-10 flex items-center justify-center gap-3 text-glow">
              <Cloud className="w-7 h-7" />
              BYPASS TOOLS
              <Cloud className="w-7 h-7" />
            </h2>

            {/* 13+ To <13 Tool */}
            <div className="mb-6">
              <button
                onClick={() => {
                  playClickSound();
                  window.open('https://rbx-tool.com/BypassAge/EtherealAgeBypass', '_blank');
                }}
                className="w-full card-premium bg-black/60 backdrop-blur-lg rounded-xl p-8 border-2 border-white/20 hover:border-white/60 premium-button transition-all"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Cloud className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  <h3 className="text-2xl font-bold">13+ To &lt;13</h3>
                  <Cloud className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </div>
                <p className="text-gray-300 text-sm font-medium">Bypass age restrictions</p>
              </button>
            </div>

            {/* Dual Hook Tool */}
            <div>
              <button
                onClick={() => {
                  playClickSound();
                  window.open('https://rbx-tool.com/CreateBypass/Agebypass', '_blank');
                }}
                className="w-full card-premium bg-black/60 backdrop-blur-lg rounded-xl p-8 border-2 border-white/20 hover:border-white/60 premium-button transition-all"
              >
                <div className="flex items-center justify-center gap-3 mb-3">
                  <Cloud className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                  <h3 className="text-2xl font-bold">Dual Hook</h3>
                  <Cloud className="w-6 h-6 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                </div>
                <p className="text-gray-300 text-sm font-medium">Advanced bypass creation</p>
              </button>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <Link href="/">
            <button className="text-white hover:text-gray-200 text-lg transition-all font-bold hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              ← Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
