import { Button } from "@/components/ui/button";
import { Cloud } from "lucide-react";
import { Link } from "wouter";
import Starfield from "@/components/Starfield";
import { playClickSound } from "@/components/AudioManager";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-7xl md:text-8xl font-black mb-6 text-glow drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]">
            <Cloud className="w-16 h-16 md:w-20 md:h-20 inline-block mr-4 animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            ETHEREAL
            <Cloud className="w-16 h-16 md:w-20 md:h-20 inline-block ml-4 animate-bounce drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" style={{ animationDelay: '0.2s' }} />
          </h1>
          
          <p className="text-2xl md:text-3xl text-white font-light tracking-wide mb-8">
            Advanced Generator & Bypasser Tools
          </p>

          {/* Join Discord Button - Moved here */}
          <div className="mb-12">
            <Button
              variant="outline"
              className="bg-black text-white hover:bg-gray-900 border-2 border-white premium-button font-bold text-lg shadow-lg shadow-white/30"
              onClick={() => {
                playClickSound();
                window.open('PLACEHOLDER_DISCORD_URL', '_blank');
              }}
            >
              💬 Join Discord
            </Button>
          </div>
        </div>

        {/* Main Content Sections */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Generator Section */}
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/20">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-glow">
              <Cloud className="w-8 h-8" />
              MAIN GENERATOR
              <Cloud className="w-8 h-8" />
            </h2>
            
            <div className="grid grid-cols-2 gap-6">
              <Link href="/generator">
                <Button
                  variant="outline"
                  className="w-full h-24 text-xl border-2 border-white text-white hover:bg-white/10 premium-button font-bold shadow-lg shadow-white/20 rounded-xl"
                  onClick={playClickSound}
                >
                  ⚡ Generator
                </Button>
              </Link>
              
              <Link href="/bypasser">
                <Button
                  variant="outline"
                  className="w-full h-24 text-xl border-2 border-white text-white hover:bg-white/10 premium-button font-bold shadow-lg shadow-white/20 rounded-xl"
                  onClick={playClickSound}
                >
                  ⚡ Bypasser
                </Button>
              </Link>
            </div>

            <p className="text-center text-sm text-gray-300 mt-8 italic font-medium">
              If the Sites are down or Flagged be Patient as we are aware of this and working on fixing it asap
            </p>
          </div>

          {/* Tutorial Section */}
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/20">
            <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-glow">
              ▶️ Tutorial ▶️
            </h2>
            
            <Link href="/tutorial">
              <Button
                variant="outline"
                className="w-full h-20 text-xl bg-black text-white hover:bg-gray-900 border-2 border-white premium-button font-bold shadow-lg shadow-white/40 rounded-xl"
                onClick={playClickSound}
              >
                ▶️ Watch Tutorial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
