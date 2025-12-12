import { Logo1 } from './logos';
import { MapPin, Star, Clock } from 'lucide-react';

interface UsageExamplesProps {
  darkMode: boolean;
}

export function UsageExamples({ darkMode }: UsageExamplesProps) {
  return (
    <section>
      <h2 className={`text-2xl mb-4 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
        Brand in Context
      </h2>
      <p className={`mb-8 ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
        See how the brand works in real application scenarios
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* App Icon Preview */}
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-[#222222]' : 'bg-white'}`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            App Icon
          </h3>
          <div className="flex items-center justify-center gap-8">
            <div>
              <p className={`mb-3 text-center ${
                darkMode ? 'text-[#808080]' : 'text-[#999999]'
              }`}>iOS</p>
              <div className="w-24 h-24 rounded-[20px] bg-gradient-to-br from-[#c99a6e] to-[#a67c52] flex items-center justify-center shadow-lg">
                <Logo1 type="icon" darkMode={false} size={56} />
              </div>
            </div>
            <div>
              <p className={`mb-3 text-center ${
                darkMode ? 'text-[#808080]' : 'text-[#999999]'
              }`}>Android</p>
              <div className="w-24 h-24 rounded-[24px] bg-gradient-to-br from-[#c99a6e] to-[#a67c52] flex items-center justify-center shadow-lg">
                <Logo1 type="icon" darkMode={false} size={56} />
              </div>
            </div>
          </div>
        </div>

        {/* App Header */}
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-[#222222]' : 'bg-white'}`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            App Navigation
          </h3>
          <div className={`rounded-xl p-4 ${
            darkMode ? 'bg-[#1a1a1a]' : 'bg-[#faf9f7]'
          }`}>
            <div className="flex items-center justify-between">
              <Logo1 type="combined" darkMode={darkMode} size={32} />
              <div className="flex items-center gap-2">
                <button className={`px-4 py-2 rounded-lg transition-colors ${
                  darkMode 
                    ? 'bg-[#2a2a2a] text-white hover:bg-[#333333]' 
                    : 'bg-white text-[#2a2a2a] hover:bg-[#f0ede8]'
                }`}>
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Deal Card Light */}
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-[#222222]' : 'bg-white'}`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            Deal Card - Light Mode
          </h3>
          <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-[#e8e5e0]">
            <div className="h-32 bg-gradient-to-br from-[#f0ede8] to-[#faf9f7]" />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-[#2a2a2a]">Cafe Medina - Brunch Special</h4>
                <span className="px-3 py-1 rounded-full bg-[#c99a6e] text-white text-sm">20% off</span>
              </div>
              <div className="flex items-center gap-4 text-[#6b6b6b] mt-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Downtown</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Deal Card Dark */}
        <div className={`rounded-2xl p-8 ${darkMode ? 'bg-[#222222]' : 'bg-white'}`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            Deal Card - Dark Mode
          </h3>
          <div className="rounded-xl overflow-hidden bg-[#1a1a1a] shadow-sm border border-[#2a2a2a]">
            <div className="h-32 bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a]" />
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h4 className="text-white">Cafe Medina - Brunch Special</h4>
                <span className="px-3 py-1 rounded-full bg-[#c99a6e] text-white text-sm">20% off</span>
              </div>
              <div className="flex items-center gap-4 text-[#a0a0a0] mt-3">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Downtown</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>2 days left</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button Variations */}
        <div className={`rounded-2xl p-8 lg:col-span-2 ${
          darkMode ? 'bg-[#222222]' : 'bg-white'
        }`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            Button System
          </h3>
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 rounded-xl bg-[#c99a6e] text-white hover:bg-[#a67c52] transition-colors">
              Primary Action
            </button>
            <button className={`px-6 py-3 rounded-xl transition-colors ${
              darkMode 
                ? 'bg-[#2a2a2a] text-white hover:bg-[#333333]' 
                : 'bg-[#f0ede8] text-[#2a2a2a] hover:bg-[#e8e5e0]'
            }`}>
              Secondary Action
            </button>
            <button className={`px-6 py-3 rounded-xl border transition-colors ${
              darkMode 
                ? 'border-[#c99a6e] text-[#c99a6e] hover:bg-[#c99a6e]/10' 
                : 'border-[#c99a6e] text-[#c99a6e] hover:bg-[#c99a6e]/5'
            }`}>
              Outline Button
            </button>
            <button className={`px-6 py-3 rounded-xl transition-colors ${
              darkMode ? 'text-[#c99a6e] hover:bg-[#2a2a2a]' : 'text-[#c99a6e] hover:bg-[#f0ede8]'
            }`}>
              Text Button
            </button>
          </div>
        </div>

        {/* Typography Scale */}
        <div className={`rounded-2xl p-8 lg:col-span-2 ${
          darkMode ? 'bg-[#222222]' : 'bg-white'
        }`}>
          <h3 className={`mb-6 ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
            Typography
          </h3>
          <div className="space-y-4">
            <div className={`text-4xl ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Discover local deals in Vancouver
            </div>
            <div className={`text-2xl ${darkMode ? 'text-white' : 'text-[#2a2a2a]'}`}>
              Save on your favorite spots
            </div>
            <div className={`text-xl ${darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}`}>
              Explore restaurants, cafes, and experiences near you
            </div>
            <div className={darkMode ? 'text-[#a0a0a0]' : 'text-[#6b6b6b]'}>
              Body text for descriptions and content. Warm, friendly, and easy to read.
            </div>
            <div className={`uppercase tracking-wide ${
              darkMode ? 'text-[#808080]' : 'text-[#999999]'
            }`}>
              Label Text
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
