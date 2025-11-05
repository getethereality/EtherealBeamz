import { Cloud, Play } from "lucide-react";
import { Link } from "wouter";
import Starfield from "@/components/Starfield";
import { playClickSound } from "@/components/AudioManager";

const tutorials = [
  { title: "Tutorial Beam Main Site", url: "PLACEHOLDER_URL_1" },
  { title: "Tutorial Beam Backup Site", url: "PLACEHOLDER_URL_2" },
  { title: "Tutorial Email Bypasser", url: "PLACEHOLDER_URL_3" },
  { title: "Tutorial Webhooks", url: "PLACEHOLDER_URL_4" },
  { title: "Cookie Log Mobile", url: "PLACEHOLDER_URL_5" },
  { title: "Cookie Log iOS", url: "PLACEHOLDER_URL_6" },
  { title: "Cookie Log PC", url: "PLACEHOLDER_URL_7" },
];

export default function Tutorial() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Starfield />
      
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black mb-4 flex items-center justify-center gap-6 text-glow tracking-widest">
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
            ETHEREAL TUTORIALS
            <Cloud className="w-16 h-16 float-animation drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          </h1>
        </div>

        {/* Tutorial Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorials.map((tutorial, index) => (
            <button
              key={index}
              onClick={() => {
                playClickSound();
                window.open(tutorial.url, '_blank');
              }}
              className="card-premium bg-black/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-white/20 hover:border-white/60 transition-all group premium-button"
            >
              <div className="flex flex-col items-center gap-4">
                <Play className="w-20 h-20 text-white group-hover:scale-125 transition-transform drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                <h3 className="text-xl font-bold text-center leading-tight">{tutorial.title}</h3>
                <p className="text-gray-300 text-sm font-medium">Click to Watch</p>
              </div>
            </button>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center mt-16">
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
