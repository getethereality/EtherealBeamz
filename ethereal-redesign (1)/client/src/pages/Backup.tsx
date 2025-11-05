import { Shield, Star, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Starfield from "@/components/Starfield";
import { playClickSound } from "@/components/AudioManager";

export default function Backup() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back to Generators Link */}
        <div className="mb-8">
          <Link href="/generator">
            <button className="text-white hover:text-gray-200 text-lg flex items-center gap-2 transition-all font-bold hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]">
              <ArrowLeft className="w-5 h-5" />
              Back to Generators
            </button>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-4 flex items-center justify-center gap-6 text-glow tracking-widest">
            <Shield className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            BACKUP
            <Shield className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          </h1>
        </div>

        {/* Splunk Option */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Splunk</h2>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Secure Connection</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>24/7 Uptime</span>
              </div>
            </div>

            <Button
              className="w-full h-16 text-lg bg-white text-black hover:bg-gray-100 font-bold premium-button border-2 border-white shadow-xl shadow-white/40 rounded-xl"
              onClick={() => {
                playClickSound();
                window.open('PLACEHOLDER_BACKUP_OPTION_1', '_blank');
              }}
            >
              BACKUP OPTION 1
            </Button>
          </div>
        </div>

        {/* Injury Option (replacing Immortal) */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-10 border-2 border-white/20">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Injury</h2>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-7 h-7 fill-white text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Ultimate Reliability</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Advanced Security</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Lightning Fast</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full shadow-sm shadow-white/50"></div>
                <span>Never Down</span>
              </div>
            </div>

            <Button
              className="w-full h-16 text-lg bg-white text-black hover:bg-gray-100 font-bold premium-button border-2 border-white shadow-xl shadow-white/40 rounded-xl"
              onClick={() => {
                playClickSound();
                window.open('PLACEHOLDER_BACKUP_OPTION_2', '_blank');
              }}
            >
              BACKUP OPTION 2
            </Button>
          </div>
        </div>

        {/* Back to Home */}
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
